import React, { useState, useEffect } from 'react'
import { PiStudent, RxCrossCircled } from '../Components/ReactIconsIndex'
import { useNavigate, Link, useLocation } from "react-router-dom";
import { WhoAmI } from '../hooks/useFetch';
import { CgPathTrim } from 'react-icons/cg';

function Navbar({ logourl}) {
  const navigate = useNavigate()
  const [profileMenu, setProfileMenu] = useState(false)
  const [userinfo, setUserInfo] = useState('')
  const path =useLocation();

  console.log(path.path)
  
  useEffect(()=> {
    const fetch = async()=>{
    let response =  await WhoAmI()
    setUserInfo(response.data)
    } 
    if(userinfo ===''){
     fetch();
    }
 },[])
  
  const logout = () => {
    localStorage.clear();
    navigate('/')
  }
  const HandleProfile = () => {
    navigate('/user/profile')
  }


  return (
    <div className='shadow-md bg-white h-auto px-10 py-2 '>
      <nav className='flex justify-between '>
        <div className='my-auto'>{logourl ? logourl : <span className='text-xl  font-extrabold align-middle my-auto text-gradient-to-tr from-blue-500 to-blue-400'><Link to=''>{`Alumni🔗Connect`}</Link></span>}</div>
       {
        path?.pathname ? <span className='bg-white  px-3 py-1 align-middle rounded-2xl text-gray-700 border hover:-mt-1 hover:border-b-4 border-gray-700 text-md font-semibold hover:border hover:border-gray-700 hover:bg-white hover:text-gray-500'><Link to='/login'>Login</Link></span> : <ul className='flex '>
        {
          userinfo &&  userinfo.role === "Alumni" ?
            <div className='my-auto space-x-10'>
              <span className='text-[1rem] my-auto text-gray-600 font-semibold cursor-pointer hover:border hover:rounded-md px-3 py-1 '><Link to='job-posted'>Posted Jobs</Link></span>
              <span className='text-[1rem] my-auto text-gray-600 font-semibold cursor-pointer hover:border hover:rounded-md px-3 py-1 '><Link to='new-post'>Create Post</Link></span>
            </div>
            : ""
        }
       <li className='my-auto'> 
       <span className='text-[1rem] my-auto text-gray-600 font-semibold cursor-pointer hover:border hover:rounded-md px-3 py-1 mx-10'><Link to='jobs'>Job & Interships</Link></span>
        </li> 
        <li className='w-[57px] h-[40px] rounded-full'>
        {
          userinfo && userinfo.avatar ?
            <img onClick={()=> setProfileMenu(!profileMenu)}  src={userinfo.avatar} className='w-full h-full mx-auto my-auto rounded-full  object-cover align-middle cursor-pointer' alt="" />
            :
            <ul onMouseEnter={() => setProfileMenu(true)} onMouseLeave={() => setProfileMenu(false)} className={`mx-3 bg-yellow-400 rounded-full p-1 z-10 `}>
              {
                profileMenu ?
                  <li>
                    <RxCrossCircled size={26} />
                  </li>
                  :
                  <li>
                    <PiStudent size={26} />
                  </li>
              }
            </ul>
        }
        {
          profileMenu ? <div onMouseEnter={() => setProfileMenu(true)} onMouseLeave={() => setProfileMenu(false)} id='profile-menu' className=' text-sm bg-red-400 cursor-pointer drop-shadow-md '>
            <ul className='absolute -ml-[2.8rem] h-auto py-5 px-3 bg-white rounded-md '>
              <Link className='active:bg-blue-400'>
                <li onClick={HandleProfile} className='hover:text-blue-600 font-semibold w-full cursor-pointer rounded-md px-2 py-1'>
                  <Link to='/user/profile'> Profile</Link>
                </li>
              </Link>
              <Link className='active:bg-blue-400'>
                <li onClick={logout} className='hover:text-blue-600 font-semibold w-full cursor-pointer rounded-md px-2 py-1'>
                  Logout
                </li>
              </Link>
            </ul>
          </div> : ""
        }
        </li>
      </ul>
       }
      </nav>
    </div>
  )
}

export default Navbar