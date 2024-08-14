import React from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string ,ref} from "yup";
import { useNavigate } from 'react-router-dom';
import { useMutation} from 'react-query';
import { verifyForgotToken } from '../../../api/query/userQuery';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const ResetPassword = (props) => {


  const navigate = useNavigate()
  const {token} = useParams();
  // console.log(token);
  
  const {mutate,isSuccess,isLoading}= useMutation({
    mutationKey:["verify-forgot-token"],
    mutationFn:verifyForgotToken,
    enabled:!!token,
    onError:(error)=>{
      toast.error(`Register Success Error: ${error.message}`);
      
      navigate("/signup")
    },
   onSettled:()=>{
    navigate("/resetpassworddone")
   }
  })

  if(isLoading){
    // TODO : SPINNER 
    <div>Loading</div>
  }
  useEffect(() => {
    props.setTitle("");
 }, [])


  let repeatPasswordSchema = object({
    password: string().min(6,"Password must be at least 6 characters").required(),
    repeatPassword:string().oneOf([ref("password"),null],"Passwords must match").required("Repeat password is required")
    
  });

  
  return (
    <>
    <div className='d-flex justify-content-center align-items-center' style={{height:"100%"}}>

    <Formik
    initialValues={{
      password:"",
      repeatPassword:""
    }}
    onSubmit={(values)=>{
      console.log(`resetPassword on submit values is ${JSON.stringify(values)}`);
      // console.log(JSON.stringify(values));

      mutate({token:token,password:values.password})
    }}
    validationSchema={repeatPasswordSchema}
    
    >
      {({errors,touched})=>(
        
        <Form style={{width:"35%"}}>

           <div className="d-flex justify-content-center align-items-center">
       
         <div className="card shadow" style={{borderRadius:"24px",width:"100%"}}>
         <div className="card-body d-flex flex-column" style={{padding:"26px"}}>
           {/* <div> */}
           <h4 className="card-title mt-3">Reset Password</h4>
           <span style={{color:"#797E82",fontSize:"400",fontWeight:"14px",marginTop:"4px"}}>Enter your new password</span> 

           {/* </div> */}
           <div className='mt-3'>
           <label htmlFor="exampleInputEmail1">New Password</label>
           <Field
                    name="password"
                    type="password"
                    className={`form-control ${
                      errors.password && touched.password ? "is-invalid" : ""
                    }`}
                    id="exampleInputPassword1"
                    aria-describedby="passwordHelp"
                    // placeholder="Enter Password"
                    ></Field>
           <ErrorMessage
                    name="password"
                    component="div"
                    className="invalid-feedback"
                    />
           <label htmlFor="exampleInputrepeatPassword1" className='mt-2'>Repeat New Password</label>
           <Field
                    name="repeatPassword"
                    type="password"
                    className={`form-control ${
                      errors.repeatPassword && touched.repeatPassword ? "is-invalid" : ""
                    }`}
                    id="exampleInputrepeatPassword1"
                    aria-describedby="passwordHelp"
                    placeholder=""
                    ></Field>
           <ErrorMessage
                    name="repeatPassword"
                    component="div"
                    className="invalid-feedback"
                    />

       
                  
           <button type="submit" className="btn mt-3 mb-2" style={{width:"100%",fontWeight:"500",fontSize:"16px",backgroundColor:"#5F00D9",color:"white",borderRadius:"10px"}}>Reset Password</button>
           </div>
         </div>
       </div>
           </div>
            </Form>
      )}
      {/* </div> */}
     
    </Formik>
      </div>
    </>
  )
}

export default ResetPassword