import React from 'react'

function JobPostCard() {
  return (
    <div>
        <ul className='flex flex-col space-y-2 shadow-md p-4 rounded-md border-t-2 hover:shadow-xl bg-white'>
            <li className='flex flex-col space-y-1'>
            <li className='text-2xl uppercase font-semibold text-gray-700'>{"Software Developer Inter"}</li>
            <li className='text-md capitalize text-zinc-600 font-semibold'>{"google"}</li>
            </li>
            <li className='flex space-x-4'>
            <li className='text-md capitalize text-zinc-700 font-semibold'> location : {"mumbai, india"}</li>
            <li className='text-md capitalize text-green-600 font-semibold'>Posted By : {"bhart Jain (admin)"}</li>
            </li>
            <li className='text-sm capitalize text-zinc-500 font-semibold'>Smarketing Cloud is a dynamic and innovative digital marketing agency committed to delivering high-impact video marketing solutions. We empower brands to tell their stories through engaging video content that drives brand recognition and boosts customer engagement across various digital platforms.</li>
        </ul>
    </div>
  )
}

export default JobPostCard