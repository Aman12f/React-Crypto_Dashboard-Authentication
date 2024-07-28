import React, { useContext } from 'react'
import { AuthContext } from '../Provider/AuthProvider'

const useAuth = () => {
   const {token,user,login,logout} = useContext(AuthContext)
  return {
    token,user,login,logout,
  }
}

export default useAuth
