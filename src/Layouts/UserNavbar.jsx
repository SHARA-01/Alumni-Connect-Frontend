import React, { useState , useEffect} from 'react'
import { PiStudent, RxCrossCircled } from '../Components/ReactIconsIndex'
import { useNavigate , Link } from "react-router-dom";

 


function Navbar({ imgurl, logourl }) {
  const navigate = useNavigate();

  const [profileMenu, setProfileMenu] = useState(false)


const logout = () => {
  localStorage.clear();
  navigate('/')
}


  return (
    <div className='shadow-md bg-white h-auto p-3 '>
      <nav className='flex justify-between sticky px-5 py-1'>
        <div>{logourl ? logourl : <span className='text-xl font-extrabold my-auto text-gradient-to-tr from-blue-500 to-blue-400'>{`ACS`}</span>}</div>
        <div>
          {
            imgurl ?
              <img src={imgurl} alt="" />
              :
              <div className={`mx-3 bg-yellow-400 rounded-full p-1 `}>
                {
                  profileMenu ?
                    <div>
                      <RxCrossCircled size={26} onClick={() => setProfileMenu(!profileMenu)} />
                    </div>
                    :
                    <div>
                      <PiStudent onClick={() => setProfileMenu(!profileMenu)} size={26} />
                    </div>

                }


              </div>


          }
          {
            profileMenu ? <div id='profile-menu'  className='profile-menu text-sm absolute bg-white-blur px-1 py-1 z-[5] -ml-10 cursor-pointer drop-shadow-md'>
              <ul>
                <Link className='active:bg-blue-400'>
                  <li onClick={logout
                  } className='hover:text-blue-600 font-semibold w-full cursor-pointer rounded-md px-2 py-1'>
                    Profile
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
        </div>
      </nav>
    </div>
  )
}

export default Navbar