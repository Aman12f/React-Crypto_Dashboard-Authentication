import React from 'react'
import { BsFillPatchCheckFill } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';


const ForgotPasswordSent = () => {

  const {email}=useParams()
  return (
    <>
    <div className="border d-flex justify-content-center align-items-center" style={{height:"100%"}}>

  <div className="card shadow" style={{borderRadius:"24px"}}>
  <div className="card-body d-flex flex-column align-items-center" style={{padding:"26px"}}>
     <BsFillPatchCheckFill style={{color:"#059669",height:"35px",width:"35px"}}/>
    <h4 className="card-title mt-2">Successfully Sent</h4>
    <div className='d-flex flex-column align-items-center mt-1'>

    <span style={{color:"#797E82"}}> We have sent instructions on how to reset your</span> 
    <span><span style={{color:"#797E82"}}>password to </span><span style={{fontWeight:"500",fontSize:"14px"}}>{email}. </span><span style={{color:"#797E82"}}>Please</span></span>
    <span style={{color:"#797E82"}}>follow the instructions from the email.</span> 
    
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default ForgotPasswordSent