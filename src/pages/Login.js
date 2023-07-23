import React from 'react'

const Login = () => {
  return (
    <div className='login__container'>
      <fieldset>
        <legend>Login</legend>
        <input type="text" id="fname" name="fname" placeholder='Username'/>
        <button>Submit</button>
      </fieldset>
    </div>
  )
}

export default Login