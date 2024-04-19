import React, { useState } from 'react'
import {AlumniProfileCard, Searchbar } from '../../Components/index'

function IndexPage() {

    const [searchValue, setSearchValue] = useState('')
  return (
    <div className='mx-3 pb-5 '>
        <div className='lg:w-[80vw] mx-auto h-auto sticky top-4 my-[10vh]'>
            <Searchbar value={searchValue} onChange={setSearchValue} />
        </div>

        <div className='w-full text-center py-10 felx'>
            <span  className='text-4xl text-gray-600 block bg-clip-text'>Our Proud Alumnis</span>
            <hr className='my-5 w-[22%] mx-auto h-[0.1rem]  rounded-xl shadow-md bg-gray-300 ' />
        </div>

        <div className='lg:flex lg:flex-wrap lg:space-x-5  mt-10 lg:justify-center mx-4'>
           
            {/* <div className='lg:flex  justify-between w-full h-auto'> */}
            <AlumniProfileCard name="User" imgurl="https://gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" desination='Software Developer' Company="Google" />
            <AlumniProfileCard name="Man" imgurl="" desination='Software Developer' Company="Google" Email="user@gmail.com" workingStatus="true" mobile_Number="0123456789" />
            <AlumniProfileCard name="Rio" imgurl="" desination='Software Developer' Company="Google" />
            <AlumniProfileCard name="Ravi" imgurl="" desination='Software Developer' Company="Google" />
            <AlumniProfileCard name="Devendra" imgurl="" desination='Software Developer' Company="Google" />
            {/* </div> */}
            
        
       
            
            {/* <div className='lg:flex  justify-between w-full h-auto'> */}
           
            <AlumniProfileCard name="Ravi" imgurl="" desination='Software Developer' Company="Google" />
            <AlumniProfileCard name="Devendra" imgurl="" desination='Software Developer' Company="Google" />
            {/* </div> */}
           
            
        </div>
        

    </div>
  )
}

export default IndexPage