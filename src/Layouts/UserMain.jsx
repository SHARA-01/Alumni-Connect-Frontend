import React from 'react'
import {UserFooter, Usernavbar} from '../Components/index'
import { Outlet } from 'react-router-dom'

function UserMain() {

  const localStorageData = JSON.parse(localStorage.getItem('user'))

  return (
    <div className='m-0   bg-[#EEEEEE]'>
        <Usernavbar role={`${localStorageData.user.role}`} />
        <div className='rounded-lg shadow-lg  z-30 -pb-10 '>
        <Outlet />
        </div>
        <div className="absolute w-full -z-[10]">
        <UserFooter  />
        </div>
    </div>
  )
}

export default UserMain