import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string} from "yup";
import { NavLink } from "react-router-dom";
import { useMutation } from "react-query";
import { signinUser } from "../../../api/query/userQuery";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
const SignIn = () => {
  const navigate = useNavigate();
  let signUpValidationSchema = object({
    email: string().email().required(),
    password: string()
      .min(6, "Password must be at least 6 characters")
      .required(),
  });

  const {login} = useAuth()

  const {mutate,isLoading,error,isError}=  useMutation({
    mutationKey:['signin'],
    mutationFn:signinUser,
    onSuccess:(data)=>{
      console.log("successfully sign in and responst data is ")
      console.log(JSON.stringify(data));
      const {token} = data;
      if(token){
            login(token);
      }
      navigate("/dashboard")

    },
    onError:(error)=>{
      toast.error(`Signin Error: ${error.message}`);
      
    }
  })
   
  return (
    <>
      <div className="d-flex justify-content-center align-items-center" style={{height:"100%"}}>
        <div
          className="bg-white"
          style={{ borderRadius: "16px", marginTop: "20px", width: "38%" }}
        >
          <Formik
            initialValues={{
              email: "amanmotgharefinal12003@gmail.com",
              password: "amanaman",
              terms: false,
            }}
            onSubmit={(values) => {

              console.log(`signin values is ${JSON.stringify(values)}`);
              mutate(values)
              // mutate({
              //   email:values.email,
              //   password:values.password
              // })
            }}
            validationSchema={signUpValidationSchema}
          >
            {({ errors, touched }) => (
              <Form className="" style={{ padding: "24px" }}>
                <div className="c21 d-flex flex-column align-items-start">
                  <h2>Welcome to Crypto App</h2>
                  <h6 style={{ fontSize: "14px", color: "#797E82" }}>
                    Enter your credentials to access the account.
                  </h6>
                </div>
                <div className="form-group">
                  <label
                    htmlFor="exampleInputEmail1"
                    style={{ fontWeight: "500", marginTop: "10px" }}
                  >
                    Email address
                  </label>
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
                  <small id="emailHelp" className="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div className="form-group">
                  <label
                    htmlFor="exampleInputPassword1"
                    style={{ fontWeight: "500", marginTop: "10px" }}
                  >
                    Password
                  </label>
                  <Field
                    name="password"
                    type="password"
                    className={`form-control ${
                      errors.password && touched.password ? "is-invalid" : ""
                    }`}
                    id="exampleInputPassword1"
                    placeholder="Password"
                  ></Field>
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>
                
                <div className="form-check mt-4">
                  <Field
                    name="terms"
                    className="form-check-input"
                    type="checkbox"
                    id="flexCheckDefault"
                  ></Field>
                  <ErrorMessage
                    name="terms"
                    component="div"
                    className="invalid-feedback"
                  />

                  <label
                    className="form-check-label d-flex justify-content-between"
                    htmlFor="flexCheckDefault"
                    >
                    <span>Remember me</span>
                    <NavLink to="/forgotpassword">

                    <span style={{ color: "#5F00D9",fontWeight:"500",fontSize:"14px" }}>Forgot password?</span>
                    </NavLink>
                  </label>
                </div>
                <div
                  className="d-flex flex-column"
                  style={{ marginTop: "20px" }}
                >
                  {/* <NavLink
                  to="/dashboard"
                  >
                    </NavLink> */}

                  <button
                    type="submit"
                    className="btn mt-2"
                    style={{ backgroundColor: "#5F00D9",color:"white",fontWeight:"500",width:"100%" }}
                    // isLoading= {isLoading}
                    // disabled={isLoading}
                    >
                    {/* Log In */}
                    {/* {isLoading ? "Loading..." : "Log In"} */}
                     Log In
                  </button>
                  <NavLink to="/signup">
                  <button
                    type="button"
                    className="btn mt-2"
                    style={{ backgroundColor: "#D8DDE2",width:"100%" }}
                    >
                    Create New Account
                  </button>
                    </NavLink>
                </div>
              </Form>
            )}
          </Formik>
        </div>
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
  );
};

export default SignIn;

// NOTE :1 FORM WRAPPED IN ARRAY CALLBACK FUNCTION
// 2 CALLBACK FUNCTION WRAPPED IN FORMIK
// 3 FIELDS ARE USED IN PLACE ON INPUT
