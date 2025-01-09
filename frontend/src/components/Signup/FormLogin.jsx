import React from 'react'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaEye, FaEyeSlash, FaPhone, FaUser, FaVoicemail } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'

const FormLogin = () => {

    const [userName , setuserName] = useState('')
      const [password , setpassword] = useState('')

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
                    type='text' value={userName} onChange={(e) => e.target.value} placeholder= 'Email/User name'  />
    
                <div className={iconStyle}>
                    <FaUser className='text-yellowLike' />
                </div>
            </div>
            
            
            {/** Password */}
            <div className='w-full relative'>
                <input className={inputStyle} 
                    type={theType} value={password} onChange={(e) => e.target.value} placeholder= 'Password'  />
    
                <div onClick={viewPassword} className={`${iconStyle} cursor-pointer`}>
                    {theType == 'password' ?  <FaEyeSlash className='text-yellowLike' />  : <FaEye className='text-yellowLike' />}
                </div>
            </div>
        
          </div>
            
           

            
    
            <div className="w-[85%] mt-[15px] flex flex-row-reverse justify-between items-center">

                <button onClick={ submit} className='py-[10px] px-[25px] bg-yellowLike font-bold text-brown hover:bg-yellow-400' type='submit'>
                    Login
                </button>
                <p className='mt-[10px] text-white lg:text-gray-700'>Don't have an account <span className='italic font-bold cursor-pointer hover:text-brown hover:underline ' onClick={() => navigate('/signup')}>Signup</span></p>
            </div>
          </form>
  )
}

export default FormLogin