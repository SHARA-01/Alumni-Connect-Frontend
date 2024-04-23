import React from 'react'
import { PiStudent } from '../../Components/ReactIconsIndex'
import {InputField, ProfileCard} from '../../Components/index'

function UserProfile() {

    // const data = JSON.parse(localStorage.getItem('user'))

    // console.log(data.user)

    // const imgUrl = (data ? data.user.avatar : "")
    const imgUrl = null

    // console.log(data.user)

    const data = {
        "_id": "6612be6de61e0bc048b025ee",
        "username": "user01",
        "email": "admin01@gmail.com",
        "mobile_number": 8824562736,
        "full_name": "user-01",
        "avatar": "https://res.cloudinary.com/denciqusr/image/upload/v1706349859/azkyifgwggdyjayqxqso.jpg",
        "role": "Student",
        "graduation_details": {
            "degree": "Btech",
            "specialization": "user-01",
            "start_year": 2020,
            "end_year": 2024,
            "_id": "6612be6de61e0bc048b025ef"
        },
        "last_active": "2024-04-08T16:07:48.551Z",
        "createdAt": "2024-04-07T15:40:29.985Z",
        "updatedAt": "2024-04-14T09:52:16.232Z",
        "__v": 0
    }


    return (
        <div className='w-auto w-max-[50px] h-auto min-h-[60vh] mx-2 pb-5 '>
            <div>
                <div>
                    {
                        imgUrl ? (<img src={imgUrl} alt='' />) :
                            <div className='flex w-auto flex-col  justify-center '>
                                <div className='w-[100px] h-[100px]  mt-8 my-4 p-2 mx-auto rounded-full flex shadow-md border border-t-1 border-gray-200'>
                                    <PiStudent size={50} className='mx-auto my-auto' />
                                </div>
                                <span className='mx-auto font-semibold text-md text-gray-600 active:text-gray-800'>Change Profile </span>
                            </div>
                    }
                </div>
              
            </div>

            <div className='w-auto mx-[2%] lg:w-1/2 lg:mx-auto my-5'>
                <ProfileCard />
            </div>
        </div>
    )
}

export default UserProfile