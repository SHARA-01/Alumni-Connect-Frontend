import { useEffect, useState } from 'react'
import { FetchAllUser, UserDelete } from '../../hooks/useFetch'
import { activeStatus, formatDate } from '../../hooks/UseInfo'
import {  TbEdit , RiDeleteBin6Line } from '../../Components/ReactIconsIndex'


export default function Users() {

    const [users, setUsers] = useState('')


    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedData = await FetchAllUser();
                setUsers(fetchedData.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        if (users.length === 0) {
            fetchData();
        }
    }, [users]);

   const deleteUser = async(id) => {
    const response = await UserDelete(id);
    console.log(response)

   }


    return (
        <div className='font-sans font-roboto font-helvetica font-arial min-h-[76vh]'>
            <div>
                <div name='Admin-table-data' className=' bg-white w-full mt-[5%] rounded-md shadow-md'>
                    <div className='flex'>
                        <div className='w-[98%] h-[70px] overflow-auto bg-gradient-to-tr from-blue-600 to-blue-400 rounded-md shadow-lg my-2 mx-auto -mt-6'>
                            <div className=' text-xl w-1/5 my-auto  text-white p-5 '>Admin</div>
                        </div>
                    </div>

                    <div className=' font-helvetica flex flex-col w-[97%]  mt-6 mx-auto'>
                        <table>
                            <tr className=' flex justify-between my-2'>
                                <tc className='w-[30%]' >
                                    <th className='text-gray-400 text-sm'>
                                        Name
                                    </th>
                                </tc>
                                <tc>
                                    <th className='text-gray-400 text-sm'>
                                        Role
                                    </th>
                                </tc>
                                <tc>
                                    <th className='text-gray-400 text-sm'>
                                        Status
                                    </th>
                                </tc>
                                <tc>
                                    <th className='text-gray-400 text-sm'>
                                        Join
                                    </th>
                                </tc>
                                <tc>
                                    <th className='text-gray-400 text-sm '>
                                        Action
                                    </th>
                                </tc>
                            </tr>


                            <div>
                                {
                                    users && users.filter(user => user.role === "Admin").map((user) => (
                                        <div key={user.id}>
                                            <hr className='w-full h-[0.03rem] m bg-gray-200' />
                                            <tr className='flex justify-between '>
                                                <tc className='w-[30%]'>
                                                    <td className='flex'>
                                                        <td className='my-auto'><img className='h-9 w-9 rounded-full' src={user.avatar} alt="" /></td>
                                                        <td className='grid'>
                                                            {console.log(user)}
                                                            <td className='p-2 text-gray-800 text-md font-semibold '>{user.full_name}</td>
                                                            <td className='p-2 text-gray-600 text-sm -mt-5 '>{user.email}</td>
                                                        </td>
                                                    </td>
                                                </tc>
                                                <tc className='my-auto '>
                                                    <td className='text-gray-500 text-sm font-bold '>
                                                        {user.role}
                                                    </td>
                                                </tc>
                                                <tc className='my-auto '>
                                                    <td className='text-gray-500 text-sm font-bold '>
                                                        {activeStatus(user.last_active)
                                                        }
                                                    </td>
                                                </tc>
                                                <tc className='my-auto '>
                                                    <td className='text-gray-500 text-sm font-bold mx-auto'>
                                                       
                                                    </td>
                                                </tc>
                                                <tc className='my-auto '>
                                                <td className='text-gray-500 space-x-3 font-bold flex text-2xl  p-3'>
                                                 {
                                                    console.log(user._id)
                                                 }
                                                    <TbEdit  className='hover:border hover:bg-yellow-500 hover:text-white hover:text-2xl hover:p-[2px] hover:rounded-md active:text-2xl ' />
                                                    <RiDeleteBin6Line  className='hover:border hover:bg-red-500 hover:text-white hover:text-2xl hover:p-[2px] hover:rounded-md active:text-2xl ' />

                                                </td>
                                                </tc>

                                            </tr>
                                        </div>

                                    ))
                                }

                            </div>

                        </table>
                    </div>
                </div>

                <div name='alumni-table-data' className=' bg-white w-full mt-[5%] rounded-md shadow-md'>
                    <div className='flex'>
                        <div className='w-[98%] h-[70px] overflow-auto bg-gradient-to-tr from-blue-600 to-blue-400 rounded-md shadow-lg my-2 mx-auto -mt-6'>
                            <div className=' text-xl w-1/5 my-auto  text-white p-5 '>Alumni</div>
                        </div>
                    </div>

                    <div className=' font-helvetica flex flex-col w-[97%]  mt-6 mx-auto'>
                        <table>
                            <tr className=' flex justify-between '>
                                <tc className='w-[30%]' >
                                    <th className='text-gray-400 text-sm'>
                                        Name
                                    </th>
                                </tc>
                                <tc>
                                    <th className='text-gray-400 text-sm'>
                                        Role
                                    </th>
                                </tc>
                                <tc>
                                    <th className='text-gray-400 text-sm'>
                                        Status
                                    </th>
                                </tc>
                                <tc>
                                    <th className='text-gray-400 text-sm'>
                                        Join
                                    </th>
                                </tc>
                                <tc>
                                    <th className='text-gray-400 text-sm '>
                                        Action
                                    </th>
                                </tc>
                            </tr>
                            {
                                users &&  users.filter(user => user.role === "Alumni").map((user) => (
                                    <div key={user.id}>
                                        <hr className='w-full h-[0.03rem] m bg-gray-200' />
                                        <tr className='flex justify-between '>
                                            <tc className='w-[32%]'>
                                                <td className='flex'>
                                                    <td className='my-auto'><img className='h-9 w-9 rounded-full' src={user.avatar} alt="" /></td>
                                                    <td className='grid'>
                                                        {console.log(user)}
                                                        <td className='p-2 text-gray-800 text-md font-semibold '>{user.full_name}</td>
                                                        <td className='p-2 text-gray-600 text-sm -mt-5 '>{user.email}</td>
                                                    </td>
                                                </td>
                                            </tc>
                                            <tc className='my-auto '>
                                                <td className='text-gray-500 text-sm font-bold '>
                                                    {user.role}
                                                </td>
                                            </tc>
                                            <tc className='my-auto '>
                                                <td className='text-gray-500 text-sm font-bold '>
                                                    {activeStatus(user.last_active)
                                                    }
                                                </td>
                                            </tc>
                                            <tc className='my-auto '>
                                                <td className='text-gray-500 text-sm font-bold '>
                                                    {formatDate(user.createdAt)}
                                                </td>
                                            </tc>
                                            <tc className='my-auto '>
                                            <td className='text-gray-500 space-x-3 font-bold flex text-2xl  p-3'>
                                                    <TbEdit  className='hover:border hover:bg-yellow-500 hover:text-white hover:text-2xl hover:p-[2px] hover:rounded-md active:text-2xl ' />
                                                    <RiDeleteBin6Line  className='hover:border hover:bg-red-500 hover:text-white hover:text-2xl hover:p-[2px] hover:rounded-md active:text-2xl ' />

                                                </td>
                                            </tc>

                                        </tr>
                                    </div>

                                ))
                            }

                        </table>
                    </div>
                </div>

                <div name='student-table-data' className=' bg-white w-full mt-[5%]  rounded-md shadow-md'>
                    <div className='flex'>
                        <div className='w-[98%] h-[70px] overflow-auto bg-gradient-to-tr from-blue-600 to-blue-400 rounded-md shadow-lg my-2 mx-auto -mt-6'>
                            <div className=' text-xl w-1/5 my-auto  text-white p-5 '>Students</div>
                        </div>
                    </div>

                    <div className=' font-helvetica flex flex-col w-[97%]  mt-6 mx-auto'>
                        <table>
                            <tr className=' flex justify-between '>
                                <tc className='w-[30%]' >
                                    <th className='text-gray-400 text-sm'>
                                        Name
                                    </th>
                                </tc>
                                <tc>
                                    <th className='text-gray-400 text-sm'>
                                        Role
                                    </th>
                                </tc>
                                <tc>
                                    <th className='text-gray-400 text-sm'>
                                        Status
                                    </th>
                                </tc>
                                <tc>
                                    <th className='text-gray-400 text-sm'>
                                        Join
                                    </th>
                                </tc>
                                <tc>
                                    <th className='text-gray-400 text-sm '>
                                        Action
                                    </th>
                                </tc>
                            </tr>
                            {
                            users && users.filter(user => user.role === "Student").map((user) => (
                                    <div key={user.id}>
                                        <hr className='w-full h-[0.03rem] m bg-gray-200' />
                                        <tr className='flex justify-between '>
                                            <tc className='w-[30%]'>
                                                <td className='flex'>
                                                    <td className='my-auto'><img className='h-9 w-9 rounded-full' src={user.avatar} alt="" /></td>
                                                    <td className='grid'>
                                                        {console.log(user)}
                                                        <td className='p-2 text-gray-800 text-md font-semibold '>{user.full_name}</td>
                                                        <td className='p-2 text-gray-600 text-sm -mt-5 '>{user.email}</td>
                                                    </td>
                                                </td>
                                            </tc>
                                            <tc className='my-auto '>
                                                <td className='text-gray-500 text-sm font-bold '>
                                                    {user.role}
                                                </td>
                                            </tc>
                                            <tc className='my-auto '>
                                                <td className='text-gray-500 text-sm font-bold '>
                                                    {activeStatus(user.last_active)
                                                    }
                                                </td>
                                            </tc>
                                            <tc className='my-auto '>
                                                <td className='text-gray-500 text-sm font-bold '>
                                                    {formatDate(user.createdAt)}
                                                </td>
                                            </tc>
                                            <tc className='my-auto '>
                                            <td className='text-gray-500 space-x-3 font-bold flex text-2xl  p-3'>
                                                    <TbEdit  className='hover:border hover:bg-yellow-500 hover:text-white hover:text-2xl hover:p-[2px] hover:rounded-md active:text-2xl ' />
                                                    <RiDeleteBin6Line onClick={() => deleteUser(user._id)} className='hover:border hover:bg-red-500 hover:text-white hover:text-2xl hover:p-[2px] hover:rounded-md active:text-2xl ' />

                                                </td>
                                            </tc>

                                        </tr>
                                    </div>

                                ))
                            }


                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}