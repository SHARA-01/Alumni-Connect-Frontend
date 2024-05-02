import React, { useState, useEffect } from 'react'
import { FetchAllUser } from '../hooks/useFetch';

function Searchbar({ value, onChange }) {
    const [isMobile, setIsMobile] = useState(false);
    const [query , setQuery] = useState('')

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 768); // Adjust the width as needed for your definition of mobile
        };
        checkScreenSize();     // Initial check
        window.addEventListener("resize", checkScreenSize);    // Event listener for screen size change
        return () => window.removeEventListener("resize", checkScreenSize);   // Clean up event listener
    }, []);
    
    useEffect(()=>{

    },[])

    return (
        <div>
            {
                isMobile ? <div className='w-auto lg:w-[70%] flex mx-auto justify-center min-h-[10vh]'>
                    <div className='w-full flex justify-center '>
                        <input type='text' className='py-2 my-5 h-[3rem]  w-[70%] lg:w-[75%] px-8 rounded-full bg-blur outline-none border border-blue-500' value={value} placeholder='Search ' onChange={(e) => setQuery(e.target.value)} />
                        <button className=' w-[36%] lg:w-[13%] h-[3rem]  my-auto  bg-blue-500 rounded-full  -ml-[3rem] pr-4 lg:-ml-10  text-end lg:pr-4 lg:px-5 text-white font-semibold active:bg-blue-600 '>Search</button>
                    </div>
                </div>
                    :
                    <div className='w-auto lg:w-[70%] flex mx-auto justify-center h-auto sticky top-2 '>
                        <div className='w-full flex justify-center'>
                            <input type='text' className='py-2 my-5 h-12 w-[75%] lg:w-[70%] px-8 rounded-full bg-blur outline-none border border-blue-500' value={value} placeholder='Search' onChange={(e) => setQuery(e.target.value)} />
                            <select
                            id="selectOption"
                            // value={selectedOption}
                            // onChange={handleOptionChange}
                            className=' lg:w-[12%] h-[3rem] flex  my-auto  bg-blue-500 rounded-full  lg:-ml-24  lg:pr-0 lg:text-center  text-white font-semibold active:bg-blue-600 outline-none z-10'
                        >
                            <option className=' bg-white text-gray-500  mx-auto'  value="">Select</option>
                            <option className=' bg-white text-gray-500   mx-auto' value="option1">Alumni</option>
                            <option className=' bg-white text-gray-500   mx-auto' value="option2">Students</option>
                        </select>
                        </div>
                    </div>
            }
        </div>

    )
}

export default Searchbar