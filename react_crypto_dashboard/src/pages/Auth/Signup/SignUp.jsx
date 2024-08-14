import React from "react";
import { Formik, Form, Field,ErrorMessage  } from "formik";
import { object, string, number } from 'yup';
import { ref } from "yup";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useMutation } from "react-query";
import { signupUser } from "../../../api/query/userQuery";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
  

const SignUp = (props) => {
  
  // const [email, setEmail] = useState("")

  const navigate = useNavigate()
  let signUpValidationSchema = object({
    name: string().required(),
    surname: string().required(),
    email: string().email().required(),
    password: string().min(6,"Password must be at least 6 characters").required(),
    repeatPassword:string().oneOf([ref("password"),null],"Passwords must match").required("Repeat password is required")
  });
   
  const {mutate,isLoading,error,isError}=   useMutation({
    mutationKey:['signup'],
    mutationFn:signupUser,
    onSuccess:async (data,variables)=>{
      // const jsonData = await data.json();
      console.log(`onsuccess data is ${JSON.stringify(data)}`)
      console.log(`onsuccess email which gonna send is ${variables.email}`);
      if(variables.email)
      {
        navigate(`/registeremailverify/${variables.email}`)
      }
    },
    onError:(error)=>{
      toast.error(`SignUp Error: ${error.message}`);
    }
  })
  useEffect(() => {
     props.setTitle("");
  }, [])
  

  return (
    <>
      <div className="d-flex justify-content-center">
        <div
          className="bg-white"
          style={{ borderRadius: "16px", marginTop: "20px", width: "65%" }}
        >
          <Formik
            initialValues={{
              name: "",
              surname: "",
              email: "",
              password: "",
              repeatPassword: "",
              terms:true
            }}
            onSubmit={(values) => {
              
              console.log(`signup form submitted values is ${values}`);
              
              mutate({
                firstName:values.name,
                lastName:values.surname,
                email:values.email,
                password:values.password
              })
            }}
            validationSchema={signUpValidationSchema}
          >
            {({errors,touched}) => (
              <Form className="" style={{ padding: "24px" }}>
                <div className="c21 d-flex flex-column align-items-center">
                  <h2>Welcome to Crypto App</h2>
                  <h6 style={{ fontSize: "14px", color: "#797E82" }}>
                    Create a free account by filling data below.
                  </h6>
                </div>
                   <div className="row" style={{ marginTop: "25px" }}>
                  <div className="col">
                    <span style={{ fontWeight: "500" }}>Name</span>
                    <Field
                      name="name"
                      type="text"
                      className={`form-control ${errors.name && touched.name ? "is-invalid" : ""}`}
                      placeholder="First name"
                    ></Field>
                    <ErrorMessage name="name" component="div" className="invalid-feedback" />
                  </div>

                  <div className="col">
                    <span style={{ fontWeight: "500" }}>Surname</span>
                    <Field
                      name="surname"
                      type="text"
                      className={`form-control ${errors.surname && touched.surname ? "is-invalid" : ""}`}
                      placeholder="Arthur"
                    ></Field>
                    <ErrorMessage name="surname" component="div" className="invalid-feedback" />
                  </div>
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
                    className={`form-control ${errors.email && touched.email ? "is-invalid" : ""}`}
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  ></Field>
                  <ErrorMessage name="email" component="div" className="invalid-feedback" />
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
                    className={`form-control ${errors.password && touched.password ? "is-invalid" : ""}`}
                    id="exampleInputPassword1"
                    placeholder="Password"
                  ></Field>
                  <ErrorMessage name="password" component="div" className="invalid-feedback" />
                </div>
                <div className="form-group">
                  <label
                    htmlFor="exampleInputPassword1"
                    style={{ fontWeight: "500", marginTop: "10px" }}
                  >
                    Repeat Password
                  </label>
                  <Field
                    name="repeatPassword"
                    type="password"
                    className={`form-control ${errors.repeatPassword && touched.repeatPassword ? "is-invalid" : ""}`}
                    id="exampleInputrepeatPassword1"
                    placeholder="Password"
                  ></Field>
                  <ErrorMessage name="repeatPassword" component="div" className="invalid-feedback" />
                </div>
                <div className="form-check mt-4">
                  <Field
                    name="terms"
                    className="form-check-input"
                    type="checkbox"
                    id="flexCheckDefault"
                  ></Field>
                  <ErrorMessage name="terms" component="div" className="invalid-feedback" />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    <span>I agree with </span>
                    <span style={{ color: "#5F00D9" }}>
                      {" "}
                      Terms & Conditions
                    </span>
                  </label>
                </div>
                <div
                  className="d-flex flex-column"
                  style={{ marginTop: "20px" }}
                >
                  <button
                    type="submit"
                    className="btn mt-2"
                    style={{ backgroundColor: "#D8DDE2" }}
                    disabled={isLoading}
                  >
                    {/* Create Account */}
                    {isLoading ? "Loading..." : "Create Account"}
                  </button>
                  <div className="d-flex justify-content-center mt-3">
                    <span style={{ color: "#797E82", fontWeight: "500" }}>
                      Already have an account?
                    </span>
                    <NavLink
                    to="/signin"
                    >

                    <span style={{fontWeight:"500",fontSize:"16px"}}> Log In</span>
                    </NavLink>
                  </div>
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

export default SignUp;

// NOTE :1 FORM WRAPPED IN ARRAY CALLBACK FUNCTION 
      // 2 CALLBACK FUNCTION WRAPPED IN FORMIK 
      // 3 FIELDS ARE USED IN PLACE ON INPUT 
