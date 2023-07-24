import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';

const Auth = ({children}) => {
    const location = useLocation();

    if(localStorage.getItem('token')) {
        console.log('token available')
        return children;
    }
    return <Navigate to="/login" state={{from: location}}/>
}

export default Auth