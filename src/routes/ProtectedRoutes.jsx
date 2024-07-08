import React from 'react';
import { Navigate } from 'react-router-dom'

const ProtectedRoutes = ({children, login}) => {
    if(login) {
        return children;
    } else {
        return <Navigate to="/Login" />
    }
}

export default ProtectedRoutes;