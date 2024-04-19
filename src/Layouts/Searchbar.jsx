import React, { useState, useEffect } from 'react'

function Searchbar({ value, onChange }) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 768); // Adjust the width as needed for your definition of mobile
        };
        checkScreenSize();     // Initial check
        window.addEventListener("resize", checkScreenSize);    // Event listener for screen size change
        return () => window.removeEventListener("resize", checkScreenSize);   // Clean up event listener
    }, []);

    return (

        <div>

            {
                isMobile ? <div className='w-auto lg:w-[70%] flex mx-auto justify-center min-h-[10vh]'>
                    <div className='w-full flex justify-center '>
                        <input type='text' className='py-2 my-5 h-[3rem]  w-[70%] lg:w-[75%] px-8 rounded-full bg-blur outline-none border border-blue-500' value={value} placeholder='Search ' onChange={(e) => onChange(e.target.value)} />
                        <button className=' w-[36%] lg:w-[13%] h-[3rem]  my-auto  bg-blue-500 rounded-full  -ml-[3rem] pr-4 lg:-ml-10  text-end lg:pr-4 lg:px-5 text-white font-semibold active:bg-blue-600 '>Search</button>
                    </div>
                    </div>
                    :
                    <div className='w-auto lg:w-[70%] flex mx-auto justify-center h-auto sticky top-2'>
                        <div className='w-full flex justify-center auto'>
                            <input type='text' className='py-2 my-5 h-12 w-[75%] lg:w-[70%] px-8 rounded-full bg-blur outline-none border border-blue-500' value={value} placeholder='Search anyone within your college ' onChange={(e) => onChange(e.target.value)} />
                            <button className='lg:w-[13%] h-[3rem]  my-auto  bg-blue-500 rounded-full  lg:-ml-11  text-end lg:pr-4 lg:px-5 text-white font-semibold active:bg-blue-600 '>Search</button>
                        </div>

                    </div>
        }
                </div>
       
    )
}

            export default Searchbar