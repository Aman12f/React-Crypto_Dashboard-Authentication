import React, { createContext, useState } from 'react';
import { useCookies } from 'react-cookie';
// import { Navigate } from 'react-router-dom';


// Import jwt_decode with a dynamic import
import {jwtDecode} from 'jwt-decode';


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [cookies, setCookie, removeCookie] = useCookies();

    const login = async (tokenStr) => {
        if (tokenStr) {
            setToken(tokenStr);
            try {
                // const decodedToken = jwtDecode(token)
                const {exp} = jwtDecode(tokenStr)
                console.log(`exp from login function is ${exp}`);
                if(exp)
                {
                    setCookie("jwt",tokenStr,{
                        path:"/",
                        maxAge:exp,
                        sameSite:true,
                    })

                }
                return;

            } catch (error) {
                console.error("Failed to decode token:", error);
            }
            
        }
        logout();
    };

    const logout = () => {
        setToken(null);
        setUser(null);
        removeCookie("jwt",{path:"/"});
    };

    return (
        <AuthContext.Provider value={{ user, token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

