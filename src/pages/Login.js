import React, { useState } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'

const Login = () => {
  
  const {state} = useLocation();
  const redirectTo = state?.from?.pathname
  const [user, setUser] = useState('');
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('token',user)
    if(redirectTo) {
      console.log(`Redirecting To : ${redirectTo}`)
      navigate(redirectTo)
    } else {
      console.log(`Redirecting To ${"/"}`)
      navigate("/")
    }
    
  }

  return (
    <div className='login__container'>
      <form onSubmit={handleSubmit}>
        <fieldset>
            <legend>Login</legend>
            <input type="text" id="fname" name="fname" placeholder='Username' onChange={(e) => setUser(e.target.value)} />
            <button>Submit</button>
        </fieldset>
      </form>
    </div>
  )
}

export default Login