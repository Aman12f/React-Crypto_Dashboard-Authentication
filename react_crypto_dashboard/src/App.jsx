import React from 'react'
import Dashboard from './pages/Dashboard/Dashboard'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import SideNav from './components/SideNav';
import DashboardLayout from './components/DashboardLayout';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Transaction from './pages/Transaction/Transaction';
import SupportCard from './pages/SupportCard/Components/SupportCard';
import SignUp from './pages/Auth/Signup/SignUp';
import SignIn from './pages/Auth/SignIn/SignIn';
import RegisterEmailVerify from './pages/Auth/RegisterEmailVerify/RegisterEmailVerify';
import RegisterSuccess from './pages/Auth/RegisterSuccess/RegisterSuccess';
import ForgotPassword from './pages/Auth/ForgotPassword/ForgotPassword';
import ForgotPasswordSent from './pages/Auth/ForgotPasswordSent/ForgotPasswordSent';
import ResetPasswordDone from './pages/Auth/ResetPasswordDone/ResetPasswordDone';
import ResetPassword from './pages/Auth/ResetPassword/ResetPassword';
import { ReactQueryDevtools } from 'react-query/devtools'
import Protectedroute from './components/Auth/Protectedroute';
import { useState } from 'react';


import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'

// const [title_name, setTitle_name] = useState("");
const App = () => {
  
  const [title, setTitle] = useState("")

  const queryClient = new QueryClient()
  return (
   <>
       {/* <RouterProvider router={router} /> */}
       <QueryClientProvider client={queryClient}>
  
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<SideNav title={title}/>}>
            <Route index element={<SignUp></SignUp>} />
            <Route path="/dashboard" element={<Protectedroute><Dashboard setTitle={setTitle}></Dashboard></Protectedroute>} />
            <Route path="/transactions" element={<Protectedroute><Transaction setTitle={setTitle}/></Protectedroute>} />
            <Route path="/support" element={<Protectedroute><SupportCard setTitle={setTitle}></SupportCard></Protectedroute>} />
            <Route path="/signup" element={<SignUp setTitle={setTitle}></SignUp>}/>
            <Route path="/signin" element={<SignIn setTitle={setTitle}></SignIn>}/>
            <Route path="/registeremailverify/:email" element={<RegisterEmailVerify setTitle={setTitle}></RegisterEmailVerify>} />
            <Route path="/email-verify/:token" element={<RegisterSuccess setTitle={setTitle}></RegisterSuccess>} />
            <Route path="/forgotpassword" element={<ForgotPassword setTitle={setTitle}></ForgotPassword>} />
            <Route path="/forgotpasswordsent/:email" element={<ForgotPasswordSent setTitle={setTitle}></ForgotPasswordSent>} />
            <Route path="/resetpassworddone" element={<ResetPasswordDone setTitle={setTitle}></ResetPasswordDone>} />
            <Route path="/forgot-password-verify/:token" element={<ResetPassword setTitle={setTitle}></ResetPassword>} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
       
   </>
  )
}

export default App

