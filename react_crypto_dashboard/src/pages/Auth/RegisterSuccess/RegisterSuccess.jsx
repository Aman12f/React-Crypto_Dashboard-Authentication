import React from 'react'
import { BsFillPatchCheckFill } from "react-icons/bs";
import { useMutation, useQueries } from 'react-query';
import { NavLink, useParams } from 'react-router-dom';
import { verifyEmailAddressSignup } from '../../../api/query/userQuery';
import { useQuery } from 'react-query';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
const RegisterSuccess = () => {
  
  const navigate = useNavigate()
  const {token} = useParams();
  console.log(token);
  
  const {isSuccess,isLoading}= useQuery({
    queryKey:["verify-email-token"],
    queryFn:()=>verifyEmailAddressSignup({token}),
    enabled:!!token,
    onError:(error)=>{
      toast.error(`Register Success Error: ${error.message}`);
      
      navigate("/signup")
    }
  })

  if(isLoading){
    // TODO : SPINNER 
    <div>Loading</div>
  }
  

  return (
    <>
    
   {
    isSuccess &&  <div className="border d-flex justify-content-center align-items-center" style={{height:"100%"}}>

    <div className="card shadow" style={{borderRadius:"24px"}}>
    <div className="card-body d-flex flex-column align-items-center" style={{padding:"26px"}}>
       <BsFillPatchCheckFill style={{color:"#059669",height:"35px",width:"35px"}}/>
      <h4 className="card-title mt-2">Successfully Registration</h4>
      <div className='d-flex flex-column align-items-center mt-1'>
  
      <span style={{color:"#797E82"}}> Hurray! You have successfully created your account. Enter the </span> 
      <span style={{color:"#797E82"}}>app to explore all it’s features. </span> 
      
      </div>
      <NavLink to="/signin">
      <button type="button" className="btn mt-2 mb-2" style={{width:"100%",fontWeight:"500",fontSize:"16px",backgroundColor:"#5F00D9",color:"white",borderRadius:"10px"}}>Enter the App</button>
      </NavLink>
    </div>
  </div>
      </div>
   }
    <ToastContainer
  position="top-right"
  autoClose={5000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  theme="light"
  transition={Bounce}
/>
    </>
  )
}

export default RegisterSuccess