import React, { useState } from 'react'
import { RiLockPasswordLine } from "../Components/ReactIconsIndex";
import InputField from './InputField';
import { Register } from '../hooks/useRegister';
// import { useSearchParams } from 'react-router-dom';


function RegisterForm({ role }) {

    const [showPassword, setShowPassword] = useState(false);

    const [username, setUserName] = useState('')
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [mobileNumber, setMobileNumber] = useState('')

    const [degree, setDegree] = useState('')
    const [specialization, setSpecialization] = useState('')
    const [startYear, setStartYear] = useState('')
    const [endYear, setEndYear] = useState('')

    const [companyName, setCompanyName] = useState('')
    const [desination, setDesination] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [currentlyWorking, setCurrentlyWorking] = useState('')

    const handleSubmit = () => {

        Register({role, username, fullName, email, password, mobileNumber , degree, specialization, startYear, endYear, companyName, desination, startDate , endDate , currentlyWorking })
            // let accese = JSON.parse(localStorage.getItem('user'))
            // console.log(accese.accessToken)
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }

    return (
        <div className='w-[97%] bg-gray-200 rounded-lg mx-auto my-10 bg-blur '>
            <div>
                <div className='block text-left p-4'>
                    <span className='text-gray-600 capitalize text-md font-semibold'>Personal Details</span>
                    <hr className='w-full h-[0.05rem] bg-gray-600  my-2' />
                </div>
                <div className='w-[97%] mx-auto p-5'>
                    <div className='flex justify-between mb-2'>
                        {/* <input type="text"   value={type} placeholder='Role' className=' p-2 rounded-md w-[20%] text-gray-600 text-md border border-gray-300 shadow-md placeholder:text-gray-500 placeholder:mx-2 focus:outline-blue-400' disabled /> */}
                        <InputField type="text"  value={role} inputClass='focus:outline-blue-400' disabled />
                    </div>
                    <div className='flex justify-between space-y-8 mb-8 flex-wrap'>
                        <InputField type="text" value={fullName} onChange={setFullName} placeholder='Full Name' inputClass='mt-8' required />
                        <InputField type="email" value={email} onChange={setEmail} placeholder='Email' required />
                        <InputField type="text" value={username} onChange={setUserName} placeholder='@username' required  />
                        <InputField type="text" value={mobileNumber} onChange={setMobileNumber} placeholder='Mobile Number' required />
                        <InputField type="text" value={""} placeholder='Linkdin Profile URL' />
                        <div className='flex '>
                            <InputField type={showPassword ? "text" : "password"} value={password} onChange={setPassword} placeholder='Password'  required/>
                            <RiLockPasswordLine size={28} onClick={togglePasswordVisibility} className='absolute text-gray-700 my-auto cursor-pointer ml-[23%] mt-3 z-10 bg-white' />
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className='block text-left p-4'>
                    <span className='text-gray-600 capitalize text-md font-semibold'>Collage Details</span>
                    <hr className='w-full h-[0.05rem] bg-gray-600  my-2' />
                </div>
                <div className='w-[97%] mx-auto px-5 '>
                    <div className='flex justify-between space-y-8 mb-8 flex-wrap'>
                        <InputField type="text" value={degree} onChange={setDegree} placeholder='Degree' inputClass='mt-8' />
                        <InputField type="text" value={specialization} onChange={setSpecialization} placeholder='Branch' />
                        <InputField type="text" value={startYear} onChange={setStartYear} placeholder='start Year' />
                        <InputField type="text" value={endYear} onChange={setEndYear} placeholder='Passing Year' />
                    </div>
                </div>
            </div>

            <div>
                <div className='block text-left p-4'>
                    <span className='text-gray-600 capitalize text-md font-semibold'>Company Details</span>
                    <hr className='w-full h-[0.05rem] bg-gray-600  my-2' />
                </div>
                <div className='w-[97%] mx-auto px-5'>
                    <div className='flex justify-between space-y-8 mb-8 flex-wrap'>
                        <InputField type="text" value={companyName} onChange={setCompanyName} placeholder='Company Name' inputClass='mt-8' />
                        <InputField type="text" value={desination} onChange={setDesination} placeholder='Desination' />
                        <InputField type="text" value={startDate} onChange={setStartDate} placeholder='Joining Date' />
                        <div className='flex space-x-[14.5%]'>
                        <InputField type="text" value={endDate} onChange={setEndDate} placeholder='End Date' />
                        <InputField type="text" value={currentlyWorking} onChange={setCurrentlyWorking} placeholder='Currtly Working' />
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className='flex justify-end p-10'>
                <button onClick={handleSubmit} className='bg-gradient-to-tr from-blue-400 to-blue-500 w-[15%] rounded-md p-2 text-white text-md font-semibold '>Submit</button>
            </div>




        </div>
    )
}

export default RegisterForm