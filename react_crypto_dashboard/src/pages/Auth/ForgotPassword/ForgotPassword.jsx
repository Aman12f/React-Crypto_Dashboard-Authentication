import React from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string} from "yup";
import { useMutation } from "react-query";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { sendForgotMail } from '../../../api/query/userQuery';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


const ForgotPassword = () => {
  
  const [email, setEmail] = useState("")
  
  const navigate = useNavigate()

  const { mutate, isLoading } = useMutation({
    mutationKey: ["send-forgot-mail"],
    mutationFn:sendForgotMail,
    onSuccess: (data,variables) => {
      console.log(`onsuccess send-forgot-mail data1 is ${JSON.stringify(data)}`)
      navigate(`/forgotpasswordsent/${variables.email}`)
    },
    onError: (error) => {
      toast.error(`sendForgotMail Error: ${error.message}`);
    },
  });


  let forgotPasswordSchema = object({
    email: string().email().required(),
  });
  return (
    <>
    <div className='d-flex justify-content-center align-items-center' style={{height:"100%"}}>

    <Formik
    initialValues={{
      email:""
    }}
    onSubmit={(values)=>{
      console.log(values);
      mutate(values)
    }}
    validationSchema={forgotPasswordSchema}
    >
      {({errors,touched})=>(
        
        <Form >

           <div className="d-flex justify-content-center align-items-center">
       
         <div className="card shadow" style={{borderRadius:"24px"}}>
         <div className="card-body d-flex flex-column" style={{padding:"26px"}}>
          
           <FaArrowLeftLong onClick={()=>{navigate("/signin")}}/>
           <h4 className="card-title mt-3">Forgot Password</h4>
           <div className='d-flex flex-column mt-1'>
       
           <span style={{color:"#797E82"}}> Enter your email address for which account you want to rese</span> 
           <span style={{color:"#797E82"}}>your password.</span> 
          
           </div>
           <div className='mt-3'>
           <label htmlFor="exampleInputEmail1">Email</label>
           <Field
                    name="email"
                    type="email"
                    className={`form-control ${
                      errors.email && touched.email ? "is-invalid" : ""
                    }`}
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    ></Field>
           <ErrorMessage
                    name="email"
                    component="div"
                    className="invalid-feedback"
                    />

       
                  
           <button type="submit" className="btn mt-2 mb-2 mt-3" style={{width:"100%",fontWeight:"500",fontSize:"16px",backgroundColor:"#5F00D9",color:"white",borderRadius:"10px"}}>Reset Password</button>
           </div>
         </div>
       </div>
           </div>
            </Form>
      )}
      {/* </div> */}
     
    </Formik>
      </div>
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

export default ForgotPassword