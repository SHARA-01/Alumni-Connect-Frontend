import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-blur text-gray-400 flex justify-between  mt-4 px-12 rounded-md  ">
                        <p className="  lg:text-base">@2024, Made with ❤️ by <Link to='#'><span className='font-monotonic text-[#344767] font-semibold'>Gulab Chand Meena</span></Link> </p>
                        <p  className="lg:text-base space-x-5">
                            <Link className='active:text-[#344767]'>
                            Contact-us
                            </Link>

                            <Link className='active:text-[#344767]'>
                            About-us
                            </Link>

                        </p>
                    </footer>
  )
}

export default Footer