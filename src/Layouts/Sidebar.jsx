import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {BiSolidDashboard, IoMdPerson, IoPeopleSharp} from '../Components/ReactIconsIndex'

export default function Sidebar() {
    const [activeMenu, setActiveMenu] = useState(1)


    const handleBtnFoucus = (value) => {

        switch (value) {
            case 1:
                setActiveMenu(value);
                break;
            case 2:
                setActiveMenu(value);
                break;
            case 3:
                setActiveMenu(value);
                break;
            case 4:
                setActiveMenu(value);
                break;
            case 5:
                setActiveMenu(value);
                break;
            default:
                setActiveMenu(value);
        }
    }

    


    return (
        <div className='w-full h-[500px] bg-white rounded-lg text-md text-red-50  '>
            <div className=' text-blue-500 text-center p-3 flex space-x-1 justify-center pt-10'>
                <img
                    alt=""
                    className="h-8 w-8 "
                    src="https://ik.imagekit.io/pibjyepn7p9/Lilac_Navy_Simple_Line_Business_Logo_CGktk8RHK.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649962071315" />
                <h1 className='text-purple-900 text-lg font-bold '>LOGO Name</h1>
            </div>
            <hr className='w-3/5 m-auto border-t-2' />
            <ul className='w-4/5 m-auto flex flex-col text-center text-lg space-y-4  p-3 '>
                <li className=' flex group'>

                    <Link to='/admin' onClick={() => handleBtnFoucus(1)} className={`flex py-2 px-2 rounded-md w-full border-none ${ activeMenu === 1 ? "bg-sky-400 text-white" : "text-[#344767]" } focus:text-white hover:bg-gray-200 focus:shadow-md focus:bg-sky-400`}>
                        <BiSolidDashboard size={22} className={`my-auto mx-2 ${activeMenu === 1 ? "text-white" : "text-[#40679E]"}`} />
                        Dashboard
                    </Link>

                </li>
                <li >
                    <Link to='profile' onClick={() => handleBtnFoucus(2)} className={`py-2 flex  px-2 rounded-md w-full ${ activeMenu === 2 ? "bg-sky-400 text-white" : "text-[#344767]"}  border-none focus:text-white focus:shadow-md focus:bg-sky-400  hover:bg-gray-200`}>
                        <IoMdPerson size={22} className={`my-auto mx-2 ${activeMenu === 2 ? "text-white" : "text-[#40679E]"}`} />
                        Profile
                    </Link>

                </li>
                <li>
                    <Link to='users' onClick={() => handleBtnFoucus(3)} className={`py-2 flex  px-2 rounded-md w-full ${ activeMenu === 3 ? "bg-sky-400 text-white" : "text-[#344767]"}  border-none focus:text-white focus:shadow-md focus:bg-sky-400  hover:bg-gray-200`}>
                        <IoPeopleSharp size={22} className={`my-auto mx-2 ${activeMenu === 3 ? "text-white" : "text-[#40679E]"}`} />
                        User
                    </Link>

                </li>
                <li className=''>
                    <Link to='user/register' onClick={() => handleBtnFoucus(4)} className={`py-2 flex  px-2 rounded-md w-full ${ activeMenu === 4 ? "bg-sky-400 text-white" : "text-[#344767]"}  border-none focus:text-white focus:shadow-md focus:bg-sky-400  hover:bg-gray-200`}>
                        <BiSolidDashboard size={22} className={`my-auto mx-2 ${activeMenu === 4 ? "text-white" : "text-[#40679E]"}`} />
                        Register
                    </Link>

                </li>
                <li className=''>
                    <Link to='new-post' onClick={() => handleBtnFoucus(5)} className={`py-2 flex  px-2 rounded-md w-full ${ activeMenu === 5 ? "bg-sky-400 text-white" : "text-[#344767]"}  border-none focus:text-white focus:shadow-md focus:bg-sky-400  hover:bg-gray-200`}>
                        <BiSolidDashboard size={22} className={`my-auto mx-2 ${activeMenu === 5 ? "text-white" : "text-[#40679E]"}`} />
                        Create Post
                    </Link>

                </li>
            </ul>
        </div>
    )
}