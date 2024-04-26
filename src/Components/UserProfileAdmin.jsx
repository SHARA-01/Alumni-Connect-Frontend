import React, { useState } from 'react'
import {FaRegWindowClose} from './ReactIconsIndex'

function UserProfileAdmin({imgurl, setState}) {
    const name = "User"
    
  




    return (
        <div className='bg-gray-200 rounded-md p-5 flex space-x-10 shadow-md shadow-black/30  border-gray-300'>
            <div className='w-1/4 mx-auto my-auto '>
                {
                    imgurl ?
                        <img src={imgurl} alt="" className='w-[130px] h-[130px] border-2 bg-img border-blue-500 rounded-md justify-center text-center mx-auto    my-auto text-[5rem] capitalize bg-blue-400'/>
                        :
                        <div className='flex mx-auto'>
                            {name ? <span className='w-[130px] h-[130px] border-4 border-blue-500 rounded-full justify-center text-center mx-auto    my-auto text-[5rem] capitalize bg-blue-400' > {name.charAt(0)} </span> : "#"}
                        </div>


                }

            </div>
            <table className='w-3/4 flex justify-around  border-2 px-3 py-4 border-gray-400 rounded-md'>
                <tr className='flex space-x-2'>
                    <td className='flex flex-col capitalize  text-gray-800 font-semibold'>
                        <td>username</td>
                        <td>Full Name</td>
                        <td>Email</td>
                        <td>Mob.</td>

                    </td>
                    <td className='flex flex-col capitalize  text-gray-600 font-semibold  '>
                        <td>: username</td>
                        <td>: Full Name</td>
                        <td>: Email</td>
                        <td>: Mob.</td>

                    </td>
                </tr>
                   <tr className='flex  space-x-4 capitalize'>
                    <td className='flex flex-col  text-gray-800 font-semibold'>
                        <td>Degree</td>
                        <td>Specilaztion</td>
                        <td>start Year</td>
                        <td>End Year</td>

                    </td>
                    <td className='flex flex-col   text-gray-600 font-semibold '>
                        <td>: Btech</td>
                        <td>: cs</td>
                        <td>: 2020</td>
                        <td>: 2024</td>

                    </td>
                </tr> <tr className='flex  space-x-4'>
                <td className='flex flex-col text-gray-800 font-semibold'>
                    <td>Company Name</td>
                    <td>Desination</td>
                    <td>Start date</td>
                    <td>End date</td>

                </td>
                <td className='flex flex-col  text-gray-600 font-semibold '>
                    <td>: Google</td>
                    <td>: SDE</td>
                    <td>: 12/12/3233</td>
                    <td>: 21/32/5463</td>

                </td>
            </tr>

            </table>
            <FaRegWindowClose onClick={() => setState(false)}  size={20} className=' bg-gray-300 rounded-md hover:bg-red-300 hover:rounded-md  font-semibold  cursor-pointer'  />

        </div>
    )
}

export default UserProfileAdmin