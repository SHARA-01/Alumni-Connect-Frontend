import React, { useState,useEffect } from 'react'
import { GoHome } from '../Components/ReactIconsIndex'
import {useNavigate} from 'react-router-dom'


function AdminNavbar() {

    const [menuvisible, setMenuvisible] = useState(false)
    const navigate = useNavigate()

    const basePath = '/admin'; // Change this to your base path

    const subRoute = location.pathname.split(basePath)[1].substring(0);
    const subRoutes = location.pathname.split(basePath)[1].substring(1);


    const RightMenuVisible = () => {
        setMenuvisible(true);
    }
    const RightMenuHide = () => {
        setMenuvisible(false);
    }

    const logout = async () => {

        localStorage.clear()
        navigate('/')

    }

    return (
        <div>
            <div id='Navbar' className='flex  w-[97%] mt-4 text-[#344767]'>

                <div className='w-full m-1'>
                    <div className='w-full flex '>
                        <div className='p-1'><GoHome /></div>
                        <div className='capitalize'>{subRoute ? subRoute : "/ dashboard"}</div>
                    </div>
                    <div className='capitalize mx-1 font-bold'>
                        <h1>{subRoutes ? subRoutes : "Dashboard"}</h1>
                    </div>
                </div>

                <div className='py-[6px] mx-4 justify-end cursor-pointer  '>
                    <img
                        onMouseEnter={RightMenuVisible}
                        // onMouseLeave={RightMenuHide}
                        alt=""
                        className={`h-11 w-11 rounded-full absolute  z-[1] `}
                        src="https://gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" />
                    {
                        menuvisible ? <div onMouseLeave={RightMenuHide} className='-mt-2  rounded-md w-[7%] absolute p-3 border-b-2  border-r-2 border-gray-200 -mx-[31px] bg-blur  -z-10'>
                           
                            <ul className='space-y-2 pt-[3rem]'>
                                <li className=' mx-auto space-y-3 w-[90%]'>
                                    <span className=' w-full text-[#344767] text-md font-semibold px-auto active:text-gray-500'>Profile</span>
                                </li>
                                <li onClick={logout} className=' mx-auto space-y-3 w-[90%] '>
                                    <span className=' w-full text-[#344767] text-md font-semibold px-auto active:text-gray-500'>Logout</span>
                                </li>

                            </ul>

                        </div>
                            :
                            <div className='bg-white'>
                                <div>
                                    <img />
                                    <div className='bg-red-500'></div>
                                </div>
                            </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default AdminNavbar