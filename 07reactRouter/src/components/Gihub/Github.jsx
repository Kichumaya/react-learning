import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(resp => resp.json())
    //     .then(data => {
    //         console.log(data)
    //         setData(data)
    //     })
    // }, [])
  return (
    <div className='text-center m4 bg-gray-600 text-white'>Github Followers: {data.followers}
        <img src={data.avatar_url} alt="git picture" width={300} />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const resp = await fetch('https://api.github.com/users/hiteshchoudhary')
    return resp.json()
} 