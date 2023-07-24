import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Logout = () => {
    const navigate = useNavigate();

    localStorage.removeItem('token')
    
    useEffect(() => {
        setTimeout(() => {
            navigate('/')
        }, "2000");
    },[])
    

    return (
        <div>Logout Successfully! <p>The page will redirect automatically..</p> </div>
    )
}

export default Logout