import { useEffect, useState } from 'react'
import { FetchAllUser, UserDelete } from '../../hooks/useFetch'
import { activeStatus, formatDate } from '../../hooks/UseInfo'
import { TbEdit, RiDeleteBin6Line, PiStudent, FaRegWindowClose } from '../../Components/ReactIconsIndex'
import { UserProfileUpdateAdmin , UserProfileAdmin } from '../../Components/index'


export default function Users() {

    const [users, setUsers] = useState('')
    const imgurl = "https://gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
    const [showUpdatediv , setShowUpdatediv] = useState(false)
    const [userId, setUserId] = useState(null)
    const [showProfile , setShowProfile] = useState(false)


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

    const deleteUser = async (id) => {
        const response = await UserDelete(id);
        setUsers('')

    }

    const UpdateUser = (userId) => {

    }

    const CheckSpecificUser = (id) => {
        setUserId(id)
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
                                <td className='w-[30%]' >
                                    <th className='text-gray-400 text-sm'>
                                        Name
                                    </th>
                                </td>
                                <td>
                                    <th className='text-gray-400 text-sm'>
                                        Role
                                    </th>
                                </td>
                                <td>
                                    <th className='text-gray-400 text-sm'>
                                        Status
                                    </th>
                                </td>
                                <td>
                                    <th className='text-gray-400 text-sm'>
                                        Join
                                    </th>
                                </td>
                                <td>
                                    <th className='text-gray-400 text-sm '>
                                        Action
                                    </th>
                                </td>
                            </tr>


                            <div>
                                {
                                    users && users.filter(user => user.role === "Admin").map((user) => (
                                        <div key={user.id}>
                                            <hr className='w-full h-[0.03rem] m bg-gray-200' />
                                            <tr className='flex justify-between '>
                                                <td className='w-[30%]'>
                                                    <td className='flex'>
                                                        <td className='my-auto'><img className='h-9 w-9 rounded-full' src={user.avatar} alt="" /></td>
                                                        <td className='grid'>
                                                            <td className='p-2 text-gray-800 text-md font-semibold '>{user.full_name}</td>
                                                            <td className='p-2 text-gray-600 text-sm -mt-5 '>{user.email}</td>
                                                        </td>
                                                    </td>
                                                </td>
                                                <td className='my-auto '>
                                                    <td className='text-gray-500 text-sm font-bold '>
                                                        {user.role}
                                                    </td>
                                                </td>
                                                <td className='my-auto '>
                                                    <td className='text-gray-500 text-sm font-bold '>
                                                        {activeStatus(user.last_active)
                                                        }
                                                    </td>
                                                </td>
                                                <td className='my-auto '>
                                                    <td className='text-gray-500 text-sm font-bold mx-auto'>
                                                       
                                                    </td>
                                                </td>
                                                <td className='my-auto '>
                                                <td className='text-gray-500 space-x-3 font-bold flex text-2xl  p-3'>
                                                    <TbEdit  className='hover:border hover:bg-yellow-500 hover:text-white hover:text-2xl hover:p-[2px] hover:rounded-md active:text-2xl ' />
                                                    <RiDeleteBin6Line  className='hover:border hover:bg-red-500 hover:text-white hover:text-2xl hover:p-[2px] hover:rounded-md active:text-2xl ' />

                                                </td>
                                                </td>

                                            </tr>
                                        </div>

                                    ))
                                }

                            </div>

                        </table>
                    </div>
                </div> 

                {/* <div className=' flex justify-between w-full w-max-[50px] h-[50vh] min-h-[30vh] mx-2 pb-5 '>
                    <div>
                        <div>
                            {
                                imgurl ? (<img src={imgurl} alt='' />) :
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
                </div> */}
                <div name='alumni-table-data' className=' bg-white w-full mt-[5%] rounded-md shadow-md'>
                    <div className='flex'>
                        <div className='w-[98%] h-[70px] overflow-auto bg-gradient-to-tr from-blue-600 to-blue-400 rounded-md shadow-lg my-2 mx-auto -mt-6'>
                            <div className=' text-xl w-1/5 my-auto  text-white p-5 '>Alumni</div>
                        </div>
                    </div>

                    <div className=' font-helvetica flex flex-col w-[97%]  mt-6 mx-auto'>
                        <table>
                            <tr className=' flex justify-between '>
                                <td className='w-[30%]' >
                                    <th className='text-gray-400 text-sm'>
                                        Name
                                    </th>
                                </td>
                                <td>
                                    <th className='text-gray-400 text-sm'>
                                        Role
                                    </th>
                                </td>
                                <td>
                                    <th className='text-gray-400 text-sm'>
                                        Status
                                    </th>
                                </td>
                                <td>
                                    <th className='text-gray-400 text-sm'>
                                        Join
                                    </th>
                                </td>
                                <td>
                                    <th className='text-gray-400 text-sm '>
                                        Action
                                    </th>
                                </td>
                            </tr>
                            {
                                users && users.filter(user => user.role === "Alumni").map((user) => (
                                    <div key={user.id} >
                                        <hr className='w-full h-[0.03rem] m bg-gray-200' />
                                        <tr className='flex justify-between'>
                                            <td className='w-[32%]' >
                                                <td className='flex' >
                                                    <td className='my-auto cursor-pointer'  onClick={()=> {setShowProfile(true) , setUserId(user._id), setShowUpdatediv(false)}}><img className='h-9 w-9 rounded-full' src={user.avatar} alt="" /></td>
                                                    <td className='grid cursor-pointer' onClick={()=> {setShowProfile(true) , setUserId(user._id), setShowUpdatediv(false)}} >
                                                        <td className='p-2 text-gray-800 text-md font-semibold cursor-pointer'>{user.full_name}</td>
                                                        <td className='p-2 text-gray-600 text-sm -mt-5 '>{user.email}</td>
                                                    </td>
                                                </td>
                                            </td>
                                            <td className='my-auto '>
                                                <td className='text-gray-500 text-sm font-bold '>
                                                    {user.role}
                                                </td>
                                            </td>
                                            <td className='my-auto '>
                                                <td className='text-gray-500 text-sm font-bold '>
                                                    {activeStatus(user.last_active)
                                                    }
                                                </td>
                                            </td>
                                            <td className='my-auto '>
                                                <td className='text-gray-500 text-sm font-bold '>
                                                    {formatDate(user.createdAt)}
                                                </td>
                                            </td>
                                            <td className='my-auto '>
                                                <td className='text-gray-500 space-x-3 font-bold flex text-2xl  p-3'>
                                                  {
                                                    showUpdatediv && user._id == userId ? <FaRegWindowClose onClick={()=> setShowUpdatediv(false)} className='hover:bg-red-800 hover:text-white rounded-md  font-semibold hover:p-1 cursor-pointer'  /> :
                                                    <TbEdit onClick={()=> {setShowUpdatediv(true), CheckSpecificUser(user._id), setShowProfile(false)}} className='hover:border hover:bg-yellow-500 hover:text-white hover:text-2xl hover:p-[2px] hover:rounded-md active:text-2xl cursor-pointer ' />
                                                  } 
                                                    <RiDeleteBin6Line onClick={() => deleteUser(user._id)} className='hover:border hover:bg-red-500 hover:text-white hover:text-2xl hover:p-[2px] hover:rounded-md active:text-2xl cursor-pointer' />

                                                </td>
                                            </td>

                                        </tr>  
                                        {
                                            showUpdatediv && userId === user._id  ?    <div  className='relative border-4 rounded-md p-3 mx-auto my-3'>
                                                <UserProfileUpdateAdmin role={user.role} fullname={user.full_name} Email={user.email} userName={user.username} MobileNumber={user.mobile_number} Degree={user.graduation_details.degree} Specialization={user.graduation_details.specialization}
                                                StartYear={user.graduation_details.start_year} EndYear={user.graduation_details.end_year} CompanyName={user.Compan} />
                                            </div> : ''
                                        }
                                        {
                                            showProfile && user._id == userId ? <UserProfileAdmin imgurl = {imgurl} setState={setShowProfile}/> : ''
                                        }
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
                                <td className='w-[30%]' >
                                    <th className='text-gray-400 text-sm'>
                                        Name
                                    </th>
                                </td>
                                <td>
                                    <th className='text-gray-400 text-sm'>
                                        Role
                                    </th>
                                </td>
                                <td>
                                    <th className='text-gray-400 text-sm'>
                                        Status
                                    </th>
                                </td>
                                <td>
                                    <th className='text-gray-400 text-sm'>
                                        Join
                                    </th>
                                </td>
                                <td>
                                    <th className='text-gray-400 text-sm '>
                                        Action
                                    </th>
                                </td>
                            </tr>
                            {
                                users && users.filter(user => user.role === "Student").map((user) => (
                                    <div key={user.id} >
                                        <hr className='w-full h-[0.03rem] m bg-gray-200' />
                                        <tr className='flex justify-between '>
                                            <td className='w-[30%]'>
                                                <td className='flex'>
                                                    <td className='my-auto'><img className='h-9 w-9 rounded-full' src={user.avatar} alt="" /></td>
                                                    <td className='grid'>
                                                        <td className='p-2 text-gray-800 text-md font-semibold '>{user.full_name}</td>
                                                        <td className='p-2 text-gray-600 text-sm -mt-5 '>{user.email}</td>
                                                    </td>
                                                </td>
                                            </td>
                                            <td className='my-auto '>
                                                <td className='text-gray-500 text-sm font-bold '>
                                                    {user.role}
                                                </td>
                                            </td>
                                            <td className='my-auto '>
                                                <td className='text-gray-500 text-sm font-bold '>
                                                    {activeStatus(user.last_active)
                                                    }
                                                </td>
                                            </td>
                                            <td className='my-auto '>
                                                <td className='text-gray-500 text-sm font-bold '>
                                                    {formatDate(user.createdAt)}
                                                </td>
                                            </td>
                                            <td className='my-auto '>
                                                <td className='text-gray-500 space-x-3 font-bold flex text-2xl  p-3'>
                                                    <TbEdit className='hover:border hover:bg-yellow-500 hover:text-white hover:text-2xl hover:p-[2px] hover:rounded-md active:text-2xl ' />
                                                    <RiDeleteBin6Line onClick={() => deleteUser(user._id)} className='hover:border hover:bg-red-500 hover:text-white hover:text-2xl hover:p-[2px] hover:rounded-md active:text-2xl ' />

                                                </td>
                                            </td>

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