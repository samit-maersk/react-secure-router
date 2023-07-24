import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorPage = ({content}) => {
  const e = useRouteError();
  return (
    <div className='error'>
        <strong>Oops!</strong>
        <p>Sometime went wrong...</p>
  
        {Object.keys(e).map((eK,i) => ['status', 'statusText', 'internal','data'].includes(eK) ? <p key={i}>{eK} : {e[eK]}</p> : '')}
        <p>{Object.keys(e)}</p>
        <p>{content}</p>
    </div>
  )
}

export default ErrorPage