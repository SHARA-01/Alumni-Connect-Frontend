import React, { useEffect, useState } from 'react'
import { JobPostCard } from '../../Components/index'
import { GetAllJobPost } from '../../hooks/useFetchJobs'
import { Link } from 'react-router-dom'

function JobPost() {
    const [jobs, setJobs] = useState('')

    useEffect(() => {
        const fetch = async () => {
            let response = await GetAllJobPost();
            setJobs(response.data)
        }
        fetch()
    }, [])

    return (
        <div className='w-full mx-8 p-4'>
            <div className='w-[60%] m-4 space-y-4 sticky-bg-white-blur top-5 '>
                <span className='flex w-auto text-gray-400 font-bold text-xl border-b border-t border-gray-400 rounded-md p-3 '>Active jobs and Interships</span>
            </div>
            <div  className='w-[60%] m-4 space-y-4 '>
                {
                    jobs && jobs.map((job) => (
                        <div key={job._id}>
                      <Link to={`/user/job/${job._id}`}>  <JobPostCard title={job.title} location={job.location} posted_by={job.posted_by.full_name} role={job.posted_by.role} jobDescription={job.job_description} /> </Link>    
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default JobPost