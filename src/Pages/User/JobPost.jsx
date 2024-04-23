import React from 'react'
import { JobPostCard } from '../../Components/index'

function JobPost() {
    return (
        <div className='w-full mx-8 p-4'>

            <div className='w-[60%] m-4 space-y-4 sticky-bg-white-blur top-5 '>
            <span className='flex w-auto text-gray-400 font-bold text-xl border-b border-t border-gray-400 rounded-md p-3 '>Active jobs and Interships</span>
            </div>

            <div className='w-[60%] m-4 space-y-4 '>
           
                <JobPostCard />
                <JobPostCard />
                <JobPostCard />
                <JobPostCard />
                <JobPostCard />
                <JobPostCard />
            </div>

        </div>
    )
}

export default JobPost