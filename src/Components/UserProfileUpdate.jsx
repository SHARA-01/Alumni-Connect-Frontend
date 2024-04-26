import React, { useState } from 'react'
import { RiLockPasswordLine, FiEdit } from "../Components/ReactIconsIndex";
import InputField from './InputField';
import { act } from 'react-dom/test-utils';
// import { Register } from '../hooks/useRegister';
// import { useSearchParams } from 'react-router-dom';


function UserProfileForAdmin({role, fullname, Email, userName, MobileNumber, Degree, Specialization, StartYear, EndYear, CompanyName, Desination, StartDate, EndDate , CurrentlyWorking}) {
    const [username, setUserName] = useState(userName || '')
    const [fullName, setFullName] = useState(fullname || '')
    const [email, setEmail] = useState(Email || '')
   const [mobileNumber, setMobileNumber] = useState(MobileNumber || '')

    const [degree, setDegree] = useState(Degree || '')
    const [specialization, setSpecialization] = useState(Specialization || '')
    const [startYear, setStartYear] = useState(StartYear || '')
    const [endYear, setEndYear] = useState(EndYear || '')

    const [companyName, setCompanyName] = useState(CompanyName || '')
    const [desination, setDesination] = useState(Desination)
    const [startDate, setStartDate] = useState( StartDate||'')
    const [endDate, setEndDate] = useState( EndDate||'')
    const [currentlyWorking, setCurrentlyWorking] = useState(CurrentlyWorking || false)
    const [active , setActive] = useState(true)

    const handleSubmit = () => {
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }

    const activeField = ()=> {
        setActive(!active)
    }

    const handleCheckbox = () => {
        setCurrentlyWorking(!currentlyWorking);
    }

    return (
        <div className='w-full rounded-lg mx-auto  bg-gray-300 py-2'>
            <div>
                <div className='block text-left p-1'>
                    <ul className='flex justify-between'>
                        <li><span className='text-gray-600 capitalize text-md font-semibold'>Personal Details</span></li>
                    </ul>
                </div> 
                <div className=' mx-auto p-1'>
                    <ul className='flex  space-y-1 space-x-2 flex-wrap'>
                         <li><InputField type="text"  value={role} placeholder='Role' inputClass='focus:outline-blue-400' inputdivclass='mt-1 ml-2'  /></li>
                        <li><InputField type="text" value={fullName} onChange={setFullName} placeholder='Full Name'  required /></li>
                        <li><InputField type="email" value={email} onChange={setEmail} placeholder='Email' required /></li>
                        <li><InputField type="text" value={username} onChange={setUserName} placeholder='@username' required  /></li>
                        <li><InputField type="text" value={mobileNumber} onChange={setMobileNumber} placeholder='Mobile Number' required /></li>
                        <li><InputField type="text" className='' value={""} placeholder='Linkdin Profile URL' /></li>
                       
                    </ul>
                </div>
            </div>

            <div className='w-full p-1'>
                <div className='block text-left p-1'>
                    <span className='text-gray-600 capitalize text-md font-semibold'>Collage Details</span>
                </div>
                <div className='w-full mx-auto'>
                    <ul className='flex  space-y-1 space-x-2 flex-wrap'>
                        <li><InputField type="text" value={degree} onChange={setDegree} placeholder='Degree' inputdivclass='mt-1 ml-2'   /></li>
                        <li><InputField type="text" value={specialization} onChange={setSpecialization} placeholder='Branch'  /></li>
                       <li><InputField type="text" value={startYear} onChange={setStartYear} placeholder='start Year'  /></li> 
                        <li><InputField type="text" value={endYear} onChange={setEndYear} placeholder='Passing Year'  /></li>
                    </ul>
                </div>
            </div>

            <div>
                <div className='block text-left p-1'>
                    <span className='text-gray-600 capitalize text-md font-semibold'>Company Details</span>
                </div>
                <div className='  mx-auto'>
                        <ul className='flex  space-y-1 space-x-2 flex-wrap'>
                            <li><InputField type="text" value={companyName} onChange={setCompanyName} placeholder='Company Name' inputdivclass='mt-1 ml-2'  /></li>
                            <li><InputField type="text" value={desination} onChange={setDesination} placeholder='Desination' /></li>
                            <li><InputField type="text" value={startDate} onChange={setStartDate} placeholder='Joining Date' /></li>
                            <li><InputField type="text" value={endDate} onChange={setEndDate} placeholder='End Date' /></li>
                            <li className='flex text-gray-600 font-semibold space-x-3 pt-2'><input type="checkbox" onClick={handleCheckbox} className='px-3 '   /> <span>CurrentlyWorking</span></li>
{console.log(currentlyWorking)}
                        </ul>
                <button onClick={handleSubmit} className='bg-gradient-to-tr from-yellow-300 to-yellow-400 py-1 px-2 font-semibold ml-[86%] rounded-md  text-gray-600 active:border  active:border-gray-400 active:border-spacing-1 '>Submit</button>

                        
                </div>
            </div>
           
        </div>
    )
}

export default UserProfileForAdmin