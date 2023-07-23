import React from 'react'
import { useLoaderData } from 'react-router-dom'

const NonSecurePage = () => {
  const numbers = useLoaderData();
  return (
    <div className='nonsecurepage__container'>
      { numbers ? (numbers?.map((n,i)=> <p className='nonsecurepage__child' key={i}>{n}</p>)) : (<p>No Content</p>) }
    </div>
  )
}

export default NonSecurePage