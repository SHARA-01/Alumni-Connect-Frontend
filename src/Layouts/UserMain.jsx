import React from 'react'
import {UserFooter, Usernavbar} from '../Components/index'
import { Outlet } from 'react-router-dom'

function UserMain() {
  return (
    <div className='m-0 '>
        <Usernavbar />
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