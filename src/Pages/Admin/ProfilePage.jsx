import React from 'react'
import { ToggleButton } from '../../Components/index'
import { FiEdit } from "../../Components/ReactIconsIndex";
import { Link } from 'react-router-dom';

function Profile() {

    const data = JSON.parse(localStorage.getItem("user"));



    return (
        <div className='flex flex-col mt-5'>
            <div className='bg-image w-full rounded-md h-[300px] shadow-lg'>
            </div>
            <div className='bg-white rounded-md mx-3 -mt-10 p-2'>
                <div className='p-2 flex '>
                    <div className='mx-1' >
                        <img src="https://gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" className='h-[75px] w-[75px] rounded-[50px] mx-2' />

                    </div>
                    <div className='my-auto '>
                        <span className='text-gray-700 font-bold outline-none text-[1.4rem]'>{data ? data.user.full_name : "User Name"}</span>
                        <br />
                        <span className='text-gray-500 text-[0.9rem]'>{data ? data.user.role : "User Role"}</span>
                    </div>
                </div>
                <div>
                    <div className=' flex  px-4 py-5'>
                        <div className='p-2 flex-col w-1/2'>
                            <div className='flex justify-between  my-5'>
                                <span className='text-gray-500 text-[1rem] font-bold block'>Profile Information</span>
                                <div className='mx-[5rem]'>
                                    <button className='active:text-sky-500 '> <FiEdit /></button>
                                </div>
                            </div>
                            <div className='mt-5'>
                                <table className='flex space-x-8'>
                                    <td className='flex flex-col text-md font-semibold text-gray-700'>
                                        <td>Full Name</td>
                                        <td>Email</td>
                                        <td>Mobile</td>
                                        <td>username</td>
                                        <td>role</td>
                                    </td>
                                    <td className='flex flex-col '>
                                        <td>{data.user.full_name}</td>
                                        <td>{data.user.email}</td>
                                        <td>{data.user.mobile_number}</td>
                                        <td>{data.user.username}</td>
                                        <td>{data.user.role}</td>
                                    </td>
                                </table>
                            </div>

                        </div>

                        {/* <div className='p-2 w-1/2 flex-col ml-4'>
                        <span className='text-gray-700 text-[1rem] font-bold block my-5'>Application Settings</span>
                        <span className='block text-md font-semibold mb-2 text-gray-500 '>Account</span>
                        <div>
                            <ul>
                                <li className=' w-4/5 flex justify-between p-1 my-4'>
                                    <span className='my-auto'><ToggleButton /></span>
                                    <h4 className='mx-7 my-auto text-md text-gray-500 font-semibold'>Email me when some one post an job post</h4>
                                </li>
                                <li className=' w-4/5 flex justify-between p-1 my-4'>
                                    <span className='my-auto'><ToggleButton /></span>
                                    <h4 className='mx-7 my-auto text-md text-gray-500 font-semibold'>Email me when some one post an job post</h4>
                                </li>
                                <li className=' w-4/5 flex justify-between p-1 my-4'>
                                    <span className='my-auto'><ToggleButton /></span>
                                    <h4 className='mx-7 my-auto text-md text-gray-500 font-semibold'>Email me when some one post an job post</h4>
                                </li>
                                <li className=' w-4/5 flex justify-between p-1 my-4'>
                                    <span className='my-auto'><ToggleButton /></span>
                                    <h4 className='mx-7 my-auto text-md text-gray-500 font-semibold'>Email me when some one post an job post</h4>
                                </li>
                            </ul>
                        </div>
                    </div> */}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Profile