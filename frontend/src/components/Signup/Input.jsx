import React from 'react'

const Input = ({placeholder, type, value}) => {
  return (
    <div className='w-[85%] font-[Montserrat] mt-[15px] '>
        <input className=' w-full outline-0 border-b-1 border-brown text-[18px] py-[7px] pl-[15px] placeholder:text-gray-600' 
        type={type} value={value} placeholder= {placeholder}  />

        <div>
          
        </div>
    </div>
  )
}

export default Input