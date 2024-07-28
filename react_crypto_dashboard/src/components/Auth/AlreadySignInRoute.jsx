import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { Navigate } from 'react-router-dom';

const AlreadySignInRoute = ({ children }) => {
    const navigate = useNavigate();
    const { token } = useAuth();

    useEffect(() => {
        if (token) {
            navigate("/");
        }
    }, [token, navigate]);

    // If the token exists, render children; otherwise, render nothing until redirect
    return !token ? children : <Navigate to="/dashboard"></Navigate>;
};

export default AlreadySignInRoute;