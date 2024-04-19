import React from 'react'
import {FetchAllUser} from  '../../hooks/useFetch'
import { BsClipboardDataFill, FaUsers, FaUsersBetweenLines, MdOutlineAdminPanelSettings, PiClockClockwiseBold } from '../../Components/ReactIconsIndex'

export default function Dashboard() {

    const users = FetchAllUser();
    console.log(users)


    return (
        <div id='Dashboard'>
            <div id='first-row' className=' mt-[7%] flex justify-between'>
                <div className=' flex  justify-between bg-white w-1/3 h-[130px] rounded-md mt-9 p-2 mx-1 shadow-md'>
                    <div className='w-2/3 space-y-12'>
                        <div className='bg-[rgba(0,0,0,0.9)] w-[65px] rounded-md h-[55px] p-3 -mt-8 shadow-sm '>
                            <BsClipboardDataFill size={25} className='m-auto text-white outline-none ' />
                        </div>
                        <div className=' w-full mx-1'>
                            <span className='font-bold text-green-500'>0%</span><span className='text-gray-500'>   than last week</span>
                        </div>
                    </div>
                    <div className='grid h-[50px] text-right'>
                        <span className=' text-md mx-3 text-gray-500 ' >
                            Membres
                        </span>
                        <span className=' font-bold text-2xl text-gray-700 mx-4'>
                            500
                        </span>
                    </div>
                </div>

                <div className=' flex  justify-between bg-white w-1/3 h-[130px] rounded-md mt-9 p-2 mx-1 shadow-md'>
                    <div className='w-2/3 space-y-12'>
                        <div className='bg-sky-500 w-[65px] rounded-md h-[55px] p-3 -mt-8 shadow-sm '>
                            <FaUsersBetweenLines size={25} className='m-auto text-white outline-none ' />
                        </div>
                        <div className=' w-full mx-1'>
                            <span className='font-bold text-green-500'>0%</span><span className='text-gray-500'>   than last week</span>
                        </div>
                    </div>
                    <div className='grid h-[50px] text-right'>
                        <span className=' text-md mx-3 text-gray-500 ' >
                            Alumnis
                        </span>
                        <span className=' font-bold text-2xl text-gray-700 mx-4'>
                            200
                        </span>
                    </div>
                </div>

                <div className=' flex  justify-between bg-white w-1/3 h-[130px] rounded-md mt-9 p-2 mx-1 shadow-md'>
                    <div className='w-2/3 space-y-12'>
                        <div className='bg-pink-500 w-[65px] rounded-md h-[55px] p-3 -mt-8 shadow-lg '>
                            <FaUsers size={25} className='m-auto text-white outline-none ' />
                        </div>
                        <div className=' w-full mx-1'>
                            <span className='font-bold text-green-500'>0%</span><span className='text-gray-500'>   than last week</span>
                        </div>
                    </div>
                    <div className='grid h-[50px] text-right'>
                        <span className=' text-md mx-3 text-gray-500 ' >
                            Students
                        </span>
                        <span className=' font-bold text-2xl text-gray-700 mx-4'>
                            700
                        </span>
                    </div>
                </div>

                <div className=' flex  justify-between bg-white w-1/3 h-[130px] rounded-md mt-9 p-2 mx-1 shadow-md'>
                    <div className='w-2/3 space-y-12'>
                        <div className='bg-green-600 w-[65px] rounded-md h-[55px] p-3 -mt-8 shadow-sm '>
                            <MdOutlineAdminPanelSettings size={25} className='m-auto text-white outline-none ' />
                        </div>
                        <div className=' w-full mx-1'>
                            <span className='font-bold text-green-500'>0%</span><span className='text-gray-500'>   than last week</span>
                        </div>
                    </div>
                    <div className='grid h-[50px] text-right'>
                        <span className=' text-md mx-3 text-gray-500 ' >
                            Admins
                        </span>
                        <span className=' font-bold text-2xl text-gray-700 mx-4'>
                            5
                        </span>
                    </div>
                </div>
            </div>

            <div className='w-full flex space-x-5' >
                <div className='flex flex-col w-1/3 p-4 bg-white rounded-md mt-12 shadow-md'>
                    <div className='bg-sky-600 w-full -mt-12 rounded-md h-[200px] shadow-md'>
                    </div>
                    <div className=' px-3 mt-4'>
                        <span className='text-gray-700 text-lg font-semibold block '>New Connection Review</span>
                        <span className='text-gray-500 text-md '>Lorem ipsum dolor, sit amet.</span>

                        <hr className='border  w-2/3 my-4 m-auto ' />

                        <span className='flex  space-x-2 text-gray-400 '><PiClockClockwiseBold className='my-auto' size={15} /><span className='my-auto'>Update 4 min ago </span></span>
                    </div>
                </div>

                <div className='flex flex-col w-1/3 p-4 bg-white rounded-md mt-12 shadow-md'>
                    <div className='bg-green-500 w-full -mt-12 rounded-md h-[200px] shadow-md'>
                    </div>
                    <div className=' px-3 mt-4'>
                        <span className='text-gray-700 text-lg font-semibold block '>New Connection Review</span>
                        <span className='text-gray-500 text-md '>Lorem ipsum dolor, sit amet.</span>

                        <hr className='border  w-2/3 my-4 m-auto ' />

                        <span className='flex  space-x-2 text-gray-400 '><PiClockClockwiseBold className='my-auto' size={15} /><span className='my-auto'>Update 4 min ago </span></span>
                    </div>
                </div>

                <div className='flex flex-col w-1/3 p-4 bg-white rounded-md mt-12 shadow-md'>
                    <div className='bg-gray-800 w-full -mt-12 rounded-md h-[200px] shadow-md'>
                    </div>
                    <div className=' px-3 mt-4'>
                        <span className='text-gray-700 text-lg font-semibold block '>New Connection Review</span>
                        <span className='text-gray-500 text-md '>Lorem ipsum dolor, sit amet.</span>

                        <hr className='border  w-2/3 my-4 m-auto ' />

                        <span className='flex  space-x-2 text-gray-400 '><PiClockClockwiseBold className='my-auto' size={15} /><span className='my-auto'>Update 4 min ago </span></span>
                    </div>
                </div>
            </div>
        </div>
    )
}