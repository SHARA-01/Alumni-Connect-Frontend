import { useState , useEffect} from 'react'
import { MdPostAdd, TbEdit , RiDeleteBin6Line, FaRegWindowClose, BiNotification } from '../../Components/ReactIconsIndex'
import { CreatePost } from '../../Components/index'
import { FetchAllUser } from '../../hooks/useFetch'

import { Tooltip } from 'react-tooltip'
// import { RiH1 } from 'react-icons/ri'



const JobPost = () => {

  const [createPost , setCreatePost] = useState(false)
  const [postRequestVisible, setPostRequestVisible] = useState(true)
  // const [title, Company_Name, Location, job_description, posted_By ]

  const CreatePostVisble = ()=> {
    setCreatePost(!createPost)
    setPostRequestVisible(!postRequestVisible)
  }
  const RequestPostVisble = ()=> {
    // setCreatePost(!createPost)
    setPostRequestVisible(!postRequestVisible)
  }


  
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


  return (
    <div className='min-h-[100vh]'>
      <div>
        <div className='w-[100%] mt-12 bg-white rounded-lg min-h-[100vh] pb-4'>
          <div className="flex">
            <div className='w-[98%] h-[60px] mx-auto bg-gradient-to-tr from-purple-500 to-purple-300  rounded-md flex  my-6 -mt-7 shadow-lg ]' >
              
              <ul className='flex justify-between w-full'>
                <li><span className='w-full inline-flex  text-xl text-white font-semibold py-3 px-3 capitalize'>{ createPost ? "Create New Post" : postRequestVisible  ?"jobs Post" : "New Post Request" }</span></li>
                <li  className='flex justify-between'>
                <li>
                  <span className='w-auto inline-flex text-xl text-white font-semibold py-3 px-3 cursor-pointer'>
                 { postRequestVisible ? <BiNotification onClick={RequestPostVisble}  size={29} className='hover:text-purple-800' /> : createPost ? "" :<FaRegWindowClose onClick={RequestPostVisble}  size={29} className='hover:text-purple-800' />     } 
                  </span>
                  </li>
                <li>
                  <span className='w-auto inline-flex text-xl text-white font-semibold py-3 px-3 cursor-pointer'>
                 {
                  createPost ? <FaRegWindowClose onClick={CreatePostVisble}  size={29} className='hover:text-purple-800' /> :
                  <MdPostAdd onClick={CreatePostVisble}  size={30} className='hover:text-purple-800' />
                 } 
                  </span>
                  </li>
                </li>
              </ul>
            </div>
          </div>
          
         {createPost ? <div className='w-[80%] h-auto bg-gray-200 rounded-lg mx-auto my-10 bg-blur flex  flex-wrap '>
         <CreatePost hide={setCreatePost} />

         </div>
          : <div>
           <div className=' font-helvetica flex flex-col w-[97%]  mt-6 mx-auto'>
                        <table>
                            <tr className=' flex justify-between '>
                                <tc className='w-[30%]' >
                                    <th className='text-gray-400 text-sm'>
                                        Company
                                    </th>
                                </tc>
                               
                                <tc>
                                    <th className='text-gray-400 text-sm'>
                                        Posted By
                                    </th>
                                </tc>
                                <tc>
                                    <th className='text-gray-400 text-sm'>
                                        Date
                                    </th>
                                </tc>
                                <tc>
                                    <th className='text-gray-400 text-sm '>
                                        Action
                                    </th>
                                </tc>
                            </tr>
                            {
                               postRequestVisible && users &&  users.filter(user => user.role === "Student").map((user) => (
                                    <div key={user.id}>
                                        <hr className='w-full h-[0.03rem] m bg-gray-200' />
                                        <tr className='flex justify-between '>
                                            <tc className='w-[37%]'>
                                                <td className='flex'>
                                                    <td className='my-auto'><img className='h-9 w-9 rounded-full' src={user.avatar} alt="" /></td>
                                                    <td className='grid'>
                                                        {console.log(user)}
                                                        <td className='p-2 text-gray-800 text-md font-semibold '>{user.full_name}</td>
                                                        <td className='p-2 text-gray-600 text-sm -mt-5 '>{user.email}</td>
                                                    </td>
                                                </td>
                                            </tc>
                                            <tc className='my-auto'>
                                                <td className='text-gray-500 text-sm font-bold mx-auto '>
                                                    {user.role}
                                                </td>
                                            </tc>
                                            <tc className='my-auto '>
                                                <td className='text-gray-500 text-sm font-bold '>
                                                    {/* {activeStatus(user.last_active)
                                                    } */}
                                                </td>
                                            </tc>
                                            <tc className='my-auto '>
                                                <td className='text-gray-500 text-sm font-bold '>
                                                    {/* {formatDate(user.createdAt)} */}
                                                </td>
                                            </tc>
                                            <tc className='my-auto '>
                                                <td className='text-gray-500 space-x-3 font-bold flex text-2xl  p-3'>
                                                    <TbEdit  className='hover:border hover:bg-yellow-500 hover:text-white hover:text-2xl hover:p-[2px] hover:rounded-md active:text-2xl ' />
                                                    <RiDeleteBin6Line className='hover:border hover:bg-red-500 hover:text-white hover:text-2xl hover:p-[2px] hover:rounded-md active:text-2xl ' />

                                                </td>
                                            </tc>

                                        </tr>
                                    </div>

                                ))
                            }

                        </table>
                    </div>
          </div>
          }
          
        </div>
      </div>
    </div>

  )
}

export default JobPost