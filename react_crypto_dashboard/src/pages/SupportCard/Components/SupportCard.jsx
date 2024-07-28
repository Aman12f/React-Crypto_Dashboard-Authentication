import React from 'react'
import { IoMdMail } from "react-icons/io";
import Form from './Form';
import Shapes2 from '../../../components/images/Shapes2.svg'
import { BsChatFill } from "react-icons/bs";
import { useEffect } from 'react';

const SupportCard = (props) => {
  useEffect(() => {
    props.setTitle("Support")
  }, [])
  
  return (
   <>
   {/* this is support card  */}
   <div>

   <div className="container d-flex justify-content-around ">

   <div className="c1 " style={{padding:"24px",borderRadius:"16px"}}>
    <IoMdMail style={{color:"5F00D9", height:"30px",width:"30px"}}/>
    <div style={{fontSize:"36px"}}><h2>Contact Us</h2></div>
    <div style={{color:"#535D66",fontWeight:"400"}}>Have a question or just want to know more? Feel free to<br></br> reach out to us.</div>
    {/* this is c1 */}
    

    </div>
   <div className="c2 bg-white " style={{borderRadius:"16px",marginTop:"20px"}}>
    <Form></Form>
   </div>
   </div>
    
    <div className='d-flex justify-content-center'>

   <div
          className="d-flex justify-content-between"
          style={{ marginTop: "10px", padding: "24px",borderRadius:"16px",width:"94%" }}
          >
          <div
            className="rc31"
            style={{
              width: "50%",
              padding: "15px",
              borderRadius: "16px",
            }} 
            >
              <BsChatFill style={{color:"5F00D9",height:"35px",width:"35px"}}/>
            <div style={{fontWeight:"500",fontSize:"32px"}}>Live Chat</div>
            <div className="mt-3" style={{color:"#535D66",fontWeight:"400",fontSize:"18px"}}>
            Don’t have time to wait for the answer? Chat with us now.
            </div>
          </div>
          
          <div
            className="rc32 position-relative"
            style={{
              width: "48%",
              padding: "15px",
              borderRadius: "16px",
              color: "white",
              backgroundColor: "#5F00D9",
            }}
            >
            <div
              className="background-image"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                borderRadius: "16px",
                backgroundImage: `url(${Shapes2})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                opacity: 0.5,
                zIndex: 0,
              }}
              ></div>
            <div
              style={{
                position: "relative",
                zIndex: 1,
              }}
              >
              <button type="button" className="btn btn-light" style={{borderRadius:"100px"}}>
                Chatbot
              </button>
              <div className="mt-3" style={{color:"535D66",fontWeight:"500",fontSize:"18px"}}>
              Chat with us now
              </div>
            </div>
          </div>
        </div>
              </div>
   </div>
   </>
  )
}

export default SupportCard
