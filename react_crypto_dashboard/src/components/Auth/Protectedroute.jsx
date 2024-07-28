import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const ProtectedRoute = ({ children }) => {
    const navigate = useNavigate();
    const { token } = useAuth();

    useEffect(() => {
        if (!token) {
            navigate("/signin");
        }
    }, [token, navigate]);

    // If the token exists, render children; otherwise, render nothing until redirect
    return token ? children : <div>nothing is there from ProtectedRoute function</div>;
};

export default ProtectedRoute;
