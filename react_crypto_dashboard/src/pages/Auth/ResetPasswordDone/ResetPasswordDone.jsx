import React from 'react'
import { BsFillPatchCheckFill } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';

const ResetPasswordDone = (props) => {
  useEffect(() => {
    props.setTitle("");
 }, [])
  return (
    <>
    <div className="border d-flex justify-content-center align-items-center" style={{height:"100%"}}>

  <div className="card shadow" style={{borderRadius:"24px"}}>
  <div className="card-body d-flex flex-column align-items-center" style={{padding:"26px"}}>
     <BsFillPatchCheckFill style={{color:"#059669",height:"35px",width:"35px"}}/>
    <h4 className="card-title mt-3">Password Reset Done</h4>
    <div className=''>

    <span style={{color:"#797E82"}}>Now you can access you account. </span> 
    
    </div>
    <NavLink to="/signin" style={{width:"100%"}}>
    <button type="button" class="btn mt-4 mb-2" style={{width:"100%",fontWeight:"500",fontSize:"16px",backgroundColor:"#5F00D9",color:"white",borderRadius:"10px"}}>Sign In</button>
    </NavLink>
  </div>
</div>
    </div>
    </>
  )
}

export default ResetPasswordDone