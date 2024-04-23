import React, { useEffect, useState } from 'react'
// import { rendomColor } from '../functions'
import Modal from 'react-modal'

function Card({ imgurl, name, desination, Company, Email, workingStatus, mobile_Number, className }) {

    const [isModalOpen, setmodal] = useState(false)




    return (
        <div className={`flex w-full py-3  lg:max-w-[300px] ${className}`}>
            <div className="relative flex w-[100%] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative flex w-[90%] mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
                    {
                        imgurl ?
                            <img src={imgurl} alt="" className='w-1/2 rounded-full mx-auto my-auto  border-separate border-4 bg-red-300' />
                            :
                            <div className='flex mx-auto'>
                               { name ? <span className='w-[130px] h-[130px] border-4 rounded-full justify-center text-center my-auto text-[5rem] capitalize' > {name.charAt(0)} </span> : "#"}
                            </div>


                    }




                </div>
                <div className="p-6">
                    <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {name}
                    </h5>
                    <p className="block font-sans text-base  leading-relaxed text-inherit antialiased">
                        {desination}
                    </p>
                </div>
                <div className="p-4 pt-0">
                    <button data-ripple-light="true" type="button" className="select-none rounded-lg bg-blue-500 py-2 px-3 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                        Know More
                    </button>
                </div>
            </div>
            {/* <div className='flex shadow-md rounded-md w-full h-[100%] py-10 lg:pb-7 bg-white mx-auto flex-col border-t-2 border-gray-300 '>
                <div className='w-full '>
                    {imgurl ? <img src={imgurl} alt="" className='w-[90px] h-[90px]  lg:w-[90px] lg:h-[90px] lg:max-w-[400px] lg:max-h-[150px]  mx-auto  rounded-full text-center text-[60px]  lg:text-[60px]' /> :

                        <div className={`w-[90px] h-[90px]  lg:w-[90px] lg:h-[90px] lg:max-w-[400px] lg:max-h-[150px]  mx-auto  rounded-full text-center text-[60px]  lg:text-[60px] bg-gradient-to-br from-blue-400 to-sky-200`}>

                            {name ?
                                <div >
                                    <span > {name.charAt(0)} </span>
                                </div>

                                : "#"}
                        </div>

                    }
                </div>
                <ul className='w-[99%] mt-5 bg-white rounded-lg lg:md py-2 mx-auto px-2 text-center' >
                    <li>
                        {name}
                    </li>
                    <li>
                        {desination}
                    </li>
                    <li className='w-1/2 mx-auto mt-3'>
                        <button onClick={() => setmodal(true)} className=' w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-tr from-purple-600 to-purple-400 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-5"'>
                            Know more
                        </button>
                    </li>
                </ul>
            </div>
            <Modal isOpen={isModalOpen} onRequestClose={() => setmodal(false)} className="w-2/5 rounded-md h-auto mx-auto mt-[5rem] px-3 py-1 bg-gray-300" >
                <ul className='flex justify-between'>
                    <li></li>
                    <li><button onClick={() => setmodal(false)} className='w-auto text-[1.3rem] '>X</button></li>
                </ul>
                <ul className='flex justify-stretch  my-2 bg-gray-200'>
                    <li className='bg-red-200 w-1/2 text-center my-auto text-[8rem] rounded-md'>
                        {imgurl ? <img src={`${imgurl}`} alt="" /> :
                            <span > {name.charAt(0)} </span>}
                    </li>
                    <li className='bg-white w-1/2 px-5 space-y-4 rounded-md p-1'>
                        <li>{name}</li>
                        <li>{Email}</li>
                        <li>{mobile_Number}</li>
                        <li>{Company}</li>
                        <li>{workingStatus}</li>
                    </li>

                </ul>
            </Modal> */}
        </div>
    )
}

export default Card