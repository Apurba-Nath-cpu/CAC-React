import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(
    //     () => {
    //         fetch('https://api.github.com/users/Apurba-Nath-cpu')
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data)
    //             setData(data)
    //         })
    //     }, []
    // )

  return (
    <div className='flex flex-col items-center text-center m-4 bg-gray-500 text-white p-4 text-3xl rounded-xl'>
      <div className='w-full flex flex-row justify-between'>
        <div>Followers: {data.followers ?? 0}</div>
        <div>Following: {data.following ?? 0}</div>
        <div>Public Repos: {data.public_repos ?? 0}
            {/* <Link to={data.repos_url ?? 0}> */}
        {/* {data.public_repos ?? 0}</Link> */}
        </div>
      </div>
      <Link to={data.html_url ?? '/github'}>
      <img className='mt-4 rounded-[50%]' src={data.avatar_url} alt="avatar" width={300}/>
      </Link>
    </div>
  )
}

export default Github
