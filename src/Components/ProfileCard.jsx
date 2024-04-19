import React, { useState } from 'react'
import { RiLockPasswordLine, FiEdit } from "../Components/ReactIconsIndex";
import InputField from './InputField';
import { act } from 'react-dom/test-utils';
// import { Register } from '../hooks/useRegister';
// import { useSearchParams } from 'react-router-dom';


function ProfileCard() {


    // const data = JSON.parse(localStorage.getItem('user'))
    const data = {user:{
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
       
    }

    const [showPassword, setShowPassword] = useState(false);

    const [username, setUserName] = useState(data.user.username)
    const [fullName, setFullName] = useState(data.user.full_name)
    const [email, setEmail] = useState(data.user.email)
    const [password, setPassword] = useState()
    const [mobileNumber, setMobileNumber] = useState(data.user.mobile_number)

    const [degree, setDegree] = useState(data.user.graduation_details.degree)
    const [specialization, setSpecialization] = useState(data.user.graduation_details.specialization)
    const [startYear, setStartYear] = useState(data.user.graduation_details.start_year)
    const [endYear, setEndYear] = useState(data.user.graduation_details.end_year)

    const [companyName, setCompanyName] = useState('')
    const [desination, setDesination] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [currentlyWorking, setCurrentlyWorking] = useState('')
    const [active , setActive] = useState(true)

    const handleSubmit = () => {

        // Register({type, username, fullName, email, password, mobileNumber , degree, specialization, startYear, endYear, companyName, desination, startDate , endDate , currentlyWorking })
            // let accese = JSON.parse(localStorage.getItem('user'))
            // console.log(accese.accessToken)
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }

    const activeField = ()=> {
        setActive(!active)
    }

    return (
        <div className='w-[97%] bg-gray-200 rounded-lg mx-auto pb-5 bg-blur '>
            <div>
                <div className='block text-left p-4'>
                    
                    <ul className='flex justify-between'>
                        <li><span className='text-gray-600 capitalize text-md font-semibold'>Personal Details</span></li>
                        <li> <button onClick={activeField} className='active:text-sky-500 '> <FiEdit /></button></li>
                    </ul>
                </div> 
                <div className=' mx-auto p-5'>
                    <div className='flex justify-between mb-2'>     
                        <InputField type="text"  value={data.user.role} inputClass='focus:outline-blue-400' disabled />
                    </div>
                    <ul className='flex justify-between space-y-8 mb-8 flex-wrap'>
                        <li><InputField type="text" value={fullName} onChange={setFullName} placeholder='Full Name' inputClass='mt-8' required disabled={active} /></li>
                        <li><InputField type="email" value={email} onChange={setEmail} placeholder='Email' required disabled={active} /></li>
                        <li><InputField type="text" value={username} onChange={setUserName} placeholder='@username' required disabled={active}  /></li>
                        <li><InputField type="text" value={mobileNumber} onChange={setMobileNumber} placeholder='Mobile Number' required disabled={active} /></li>
                        <li><InputField type="text" value={""} placeholder='Linkdin Profile URL' disabled={active} /></li>
                        <li className='flex'>
                            <li><InputField type={showPassword ? "text" : "password"} value={password} onChange={setPassword} placeholder='Password'  required disabled={active} /></li>
                            <li><RiLockPasswordLine size={28} onClick={togglePasswordVisibility} className='text-gray-700 my-auto cursor-pointer  mt-3 z-10  -ml-10' disabled={active} /></li>
                            </li>
                    </ul>
                </div>
            </div>

            <div className='w-full p-2'>
                <div className='block text-left p-2'>
                    <span className='text-gray-600 capitalize text-md font-semibold'>Collage Details</span>
                </div>
                <div className='w-full mx-auto px-5 '>
                    <ul className='flex justify-between space-y-8 mb-8 flex-wrap'>
                        <li><InputField type="text" value={degree} onChange={setDegree} placeholder='Degree' inputClass='mt-8' disabled /></li>
                        <li><InputField type="text" value={specialization} onChange={setSpecialization} placeholder='Branch' disabled /></li>
                       <li><InputField type="text" value={startYear} onChange={setStartYear} placeholder='start Year' disabled /></li> 
                        <li><InputField type="text" value={endYear} onChange={setEndYear} placeholder='Passing Year' disabled /></li>
                    </ul>
                </div>
            </div>

            <div>
                <div className='block text-left p-4'>
                    <span className='text-gray-600 capitalize text-md font-semibold'>Company Details</span>
                </div>
                <div className='w-[97%] mx-auto px-5'>
                        <ul className='flex  space-y-8 mb-8 justify-between flex-wrap'>
                            <li><InputField type="text" value={companyName} onChange={setCompanyName} placeholder='Company Name' inputClass='mt-8' disabled={active} /></li>
                            <li><InputField type="text" value={desination} onChange={setDesination} placeholder='Desination' disabled={active} /></li>
                            <li><InputField type="text" value={startDate} onChange={setStartDate} placeholder='Joining Date' disabled={active} /></li>
                            <li><InputField type="text" value={endDate} onChange={setEndDate} placeholder='End Date' disabled={active} /></li>
                            <li><InputField type="text" value={currentlyWorking} onChange={setCurrentlyWorking} placeholder='Currtly Working' disabled={active} /></li>
                        </ul>
                </div>
            </div>
            <div className='flex justify-end mx-auto w-auto lg:mx-0 lg:p-10'>
                <button onClick={handleSubmit} className='bg-gradient-to-tr from-blue-400 to-blue-500 w-auto rounded-md p-2  text-white text-md font-semibold '>Submit</button>
            </div>
        </div>
    )
}

export default ProfileCard