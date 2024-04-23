import React, { useState , useEffect} from 'react'
import { PiStudent, RxCrossCircled } from '../Components/ReactIconsIndex'
import { useNavigate , Link } from "react-router-dom";

 


function Navbar({ imgurl, logourl, role }) {
  const navigate = useNavigate();

  const [profileMenu, setProfileMenu] = useState(false)


const logout = () => {
  localStorage.clear();
  navigate('/')
}
const HandleProfile = () => {
  navigate('/user/profile')
}

console.log(role)


  return (
    <div className='shadow-md bg-white h-auto p-3 '>
      <nav className='flex justify-between sticky px-5 py-1'>
        <div>{logourl ? logourl : <span className='text-xl font-extrabold my-auto text-gradient-to-tr from-blue-500 to-blue-400'><Link to=''>{`Alumni</>Connect`}</Link></span>}</div>
       
          <ul className='flex '>

          
          {
             role === "Alumni" ?
              <span className='text-[1rem] my-auto text-gray-600 font-semibold cursor-pointer hover:border hover:rounded-md px-3 py-1 '><Link to='/New-Post'>Create Post</Link></span> : ""
            
          }
            <span className='text-[1rem] my-auto text-gray-600 font-semibold cursor-pointer hover:border hover:rounded-md px-3 py-1 mx-10'><Link to='jobs'>Job & Interships</Link></span>

          
          {
            imgurl ?
              <img src={imgurl} alt="" />
              :
              <li onMouseEnter={()=> setProfileMenu(true)} onMouseLeave={()=> setProfileMenu(false)} className={`mx-3 bg-yellow-400 rounded-full p-1 z-10 `}>
                {
                  profileMenu ?
                    <li>
                      <RxCrossCircled size={26}  />
                    </li>
                    :
                    <li>
                      <PiStudent size={26} />
                    </li>

                }


              </li>


          }
          {
            profileMenu ? <div onMouseEnter={()=> setProfileMenu(true)}  onMouseLeave={()=> setProfileMenu(false)} id='profile-menu'  className=' text-sm   px-1 py-1 z-[1]  cursor-pointer drop-shadow-md '>
              <ul className='absolute -ml-[7rem] h-auto py-5 px-3 bg-white rounded-md '>
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
          </ul>
      </nav>
    </div>
  )
}

export default Navbar