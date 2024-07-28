import React from "react";
import { IoMdMail } from "react-icons/io";
import { useLocation, useParams } from "react-router-dom";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useMutation } from "react-query";
import { useQuery } from "react-query";
import { sendVerificationMail } from "../../../api/query/userQuery";
import { useEffect } from "react";

const RegisterEmailVerify = () => {
  // const location = useLocation();
   const {email} = useParams()
  // const email = location.state?.email ?? "test@gmail.com"; // Add optional chaining to safely access state
  console.log(`location email is ${email}`)

  const { mutate,isSuccess, isLoading } = useMutation({
    mutationKey: ["send-verification-mail"],
    mutationFn:sendVerificationMail,
    onSuccess: (data) => {
      console.log(`onsuccess send-verification-mail data1 is ${JSON.stringify(data)}`)
      // console.log(`onsuccess send-verification-mail data2 is ${data}`)
    },
    onError: (error) => {
      toast.error(`registerEmailVerify Error: ${error.message}`);
    },
    enabled: email !== "test@gmail.com",
  });
  useEffect(() => {
    console.log(`useeffect email is ${email}`);
     mutate({email})
  }, [email])
  
  // if(isLoading){
  //   // TODO : ADD SPINNER COMPONENT 
  // }

  return (
    <>
      <div
        className="border d-flex justify-content-center align-items-center"
        style={{ height: "100%" }}
      >
      {
        // isSuccess && <div className="card shadow" style={{ borderRadius: "24px" }}>
        <div className="card shadow" style={{ borderRadius: "24px" }}>
        <div
          className="card-body d-flex flex-column align-items-center"
          style={{ padding: "26px" }}
        >
          <IoMdMail
            style={{ color: "#5F00D9", height: "35px", width: "35px" }}
          />
          <h4 className="card-title mt-2">Email Verification</h4>
          <div className="d-flex flex-column align-items-center mt-1">
            <span style={{ color: "#797E82" }}>
              {" "}
              We have sent you an email verification to
            </span>
            <span>
              <span style={{ fontSize: "16px", fontWeight: "500" }}>
                {email}
              </span>{" "}
              <span style={{ color: "#797E82" }}>
                If you didn’t receive it,
              </span>
            </span>
            <span style={{ color: "#797E82" }}> click the button below.</span>
          </div>
          <button
            type="button"
            className="btn mt-2 mb-2"
            style={{
              width: "100%",
              fontWeight: "500",
              fontSize: "16px",
              backgroundColor: "#5F00D9",
              color: "white",
              borderRadius: "10px",
            }}
            onClick={()=>{
              console.log(`onclick resend email is ${email}`);
              mutate({email})
            }}
            // disabled={isLoading}
          >
            {/* Re-Send Email */}
            {/* {isLoading ? "Loading..." : "Re-Send Email"} */}
            Re-Send Email
          </button>
        </div>
      </div>
      }
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

export default RegisterEmailVerify;
