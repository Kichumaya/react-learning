import React from 'react'
import { useParams } from 'react-router'

function User() {
    const {userId} = useParams()
  return (
    <div className='text-center bg-gray-500 text-white p-5'>User: {userId}</div>
  )
}

export default User