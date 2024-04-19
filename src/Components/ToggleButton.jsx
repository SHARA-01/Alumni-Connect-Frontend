import React, { useState } from 'react'

const ToggleButton = (...props) => {
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }
  console.log(props[0].size)

  return (
    <div>
      <label className='flex cursor-pointer select-none items-center'>
        <div className='relative'>
          <input
            type='checkbox'
            checked={isChecked}
            onChange={handleCheckboxChange}
            className='sr-only'
          />
          <div
            className={`box block h-3 w-8 rounded-full ${
              isChecked ? 'bg-gray-700' : 'bg-gray-400'
            }`}
          ></div>
          <div
            className={`absolute left-0 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-gray-800 border transition ${
              isChecked ? 'bg-white border-gray-800 translate-x-full' : ''
            }`}
          ></div>
        </div>
      </label>
    </div   >
  )
}

export default ToggleButton
