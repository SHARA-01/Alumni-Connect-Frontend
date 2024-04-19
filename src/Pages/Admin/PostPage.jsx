import React from 'react'
import InputField from '../../Components/InputField'

function CreatePost() {
  return (
    <div>
      <div>
        <div className='mt-12 bg-white rounded-lg h-[90vh]'>
          <div className="flex">
            <div className='w-[32%] ml-2 h-[60px] bg-gradient-to-tr from-purple-500 to-purple-300 rounded-md flex my-6 -mt-7 shadow-lg skew-x-[8deg]' >
              <span className='w-full inline-flex  text-xl text-white font-semibold py-3 px-3 capitalize'>New Post</span>
            </div>
          </div>

          <div className='w-[97%] bg-gray-200 rounded-lg mx-auto my-10 bg-blur flex  flex-wrap'>

        <InputField type='text' placeholder="Title of this page" required />
        <InputField type='text' placeholder="Title of this page" required />
        <InputField type='text' placeholder="Title of this page" required />
        <InputField type='text' placeholder="Title of this page" required />
       






          </div>



        </div>
      </div>

    </div>
  )
}

export default CreatePost