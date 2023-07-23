import React from 'react'

const ErrorPage = ({content}) => {
  return (
    <div>
        <strong>Sorry! An error occured.</strong>
        <p>Please try after sometime...</p>
        <p>{content}</p>
    </div>
  )
}

export default ErrorPage