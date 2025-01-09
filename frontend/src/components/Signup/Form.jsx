import React from 'react'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaEye, FaEyeSlash, FaPhone, FaUser, FaVoicemail } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'

const Form = () => {
    const [userName , setuserName] = useState('')
      const [email , setemail] = useState('')
      const [password , setpassword] = useState('')
      const [confrimPassword , setconfrimPassword] = useState('')

      const [theType, setTheType] = useState('password')

  const viewPassword = (e) => {
    e.preventDefault()
    theType == 'text' ? setTheType('password') : setTheType('text')
    
  }

  const inputStyle = `mt-[13px] w-full outline-0 border-b-[2px] border-yellow-300 text-[17px]
                    py-[7px] pl-[15px] placeholder:text-gray-600 placeholder:text-[16px] focus:border-yellow-500 focus:shadow-lg`

  const iconStyle = 'absolute top-1/2 right-0 mr-[20px] '



  const navigate = useNavigate()

  useEffect(() => {
    setuserName()
  })

  const submit = (e) => {
    e.preventDefault()
    {<div className='absolute top-0 size-full bg-brown'> <p>{userName}</p> </div>}
    setuserName('dfffdfd')
    console.log(useDetails)
    
  }
  const useDetails = {
    name : userName
  }
  return (
    <form onSubmit={submit} className='w-[95%] flex flex-col items-center z-50' >
    
          <div className='w-[85%] font-[Montserrat] flex flex-col items-center  mt-[15px]'>
            {/** UserName */}
            <div className='w-full relative'>
                <input className={inputStyle} 
                    type='text' value={userName} onChange={(e) => e.target.value} placeholder= 'Name'  />
    
                <div className={iconStyle}>
                    <FaUser className='text-yellowLike' />
                </div>
            </div>
            {/** email */}
            <div className='w-full relative'>
                <input className={inputStyle} 
                    type='email' value={userName} onChange={(e) => e.target.value} placeholder= 'Email'  />
    
                <div className={iconStyle}>
                    <AiOutlineMail className='text-yellowLike' />
                </div>
            </div>
            {/** Phone Number */}
            <div className='w-full relative'>
                <input className={inputStyle} 
                    type='number' value={userName} onChange={(e) => e.target.value} placeholder= 'Phone Number'  />
    
                <div className={iconStyle}>
                    <FaPhone className='text-yellowLike' />
                </div>
            </div>
            
                <div className="flex flex-col w-[90%] mt-[20px]">
                    <p className='text-[12px] text-white lg:text-gray-500'>Create password</p>
                    <div className='h-[2px] w-full bg-gray-300 w-full '></div>
                </div>
            
            {/** Password */}
            <div className='w-full relative'>
                <input className={inputStyle} 
                    type={theType} value={userName} onChange={(e) => e.target.value} placeholder= 'Password'  />
    
                <div onClick={viewPassword} className={`${iconStyle} cursor-pointer`}>
                    {theType == 'password' ?  <FaEyeSlash className='text-yellowLike' />  : <FaEye className='text-yellowLike' />}
                </div>
            </div>
            {/** Repeat Password */}
            <div className='w-full relative'>
                <input className={inputStyle} 
                    type={theType} value={userName} onChange={(e) => e.target.value} placeholder= 'Repeat Password'  />
    
                <div onClick={viewPassword} className={`${iconStyle} cursor-pointer`}>
                    {theType == 'password' ?  <FaEyeSlash className='text-yellowLike' />  : <FaEye className='text-yellowLike' />}
                </div>
            </div>
        
          </div>
            
           

            
    
            <div className="w-[85%] mt-[15px] flex flex-row-reverse justify-between items-center">

                <button onClick={ submit} className='py-[10px] px-[25px] bg-yellowLike font-bold text-brown hover:bg-yellow-400' type='submit'>
                    Signup
                </button>
                <p className='mt-[10px] text-white lg:text-gray-700'>Already Have and account <span className='italic font-bold cursor-pointer hover:text-brown hover:underline ' onClick={() => navigate('/login')}>Login</span></p>
            </div>
          </form>
  )
}

export default Form