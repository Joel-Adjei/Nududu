import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TopNav from '../components/TopNav'
import BG from '../assets/imgs/BG.jpg'
import Input from '../components/Signup/Input'
import { AiFillEye, AiOutlineGoogle, AiTwotoneEyeInvisible } from 'react-icons/ai'
import { FaUser } from 'react-icons/fa'

const Signup = () => {
  const [userName , setuserName] = useState('')
  const [email , setemail] = useState('')
  const [password , setpassword] = useState('')
  const [confrimPassword , setconfrimPassword] = useState('')

  const [theType, setTheType] = useState('password')

  const viewPassword = (e) => {
    e.preventDefault()
    theType == 'text' ? setTheType('password') : setTheType('text')
    
  }

  const inputStyle = 'w-full outline-0 border-b-1 border-brown text-[18px] py-[7px] pl-[15px] placeholder:text-gray-600'



  const navigate = useNavigate()

  useEffect(() => {
    setuserName()
  })

  const submit = (e) => {
    e.preventDefault()
    {<div className='absolute top-0 size-full bg-brown'> <p>rrrr{userName}</p> </div>}
    setuserName('dfffdfd')
    console.log(useDetails)
    
  }
  const useDetails = {
    name : userName
  }

  return ( <>
    <TopNav />
    <section className='flex pt-[50px] bg-brown h-screen w-screen'>
      {/* illustration and form for tablet and phones*/}
      <div className="flex h-full w-full lg:w-1/2 bg-BG bg-cover">
        {/** form for phone and tablet */}
        <div className=' lg:hidden'>
          <Input />
        </div>
    

      </div>

       {/** form for PC */}
      <div style={{zIndex:50}} className="hidden lg:flex z-50 flex-col overflow-scroll  items-center relative bg-gray-100 h-full w-1/2">

      <div className="z-50 flex flex-col font-[Montserrat] items-center ">
        <h2 className='text-[50px] font-extrabold text-yellow-700'>Signup</h2>
        <div className="h-[3px] w-[100px] bg-yellowLike"></div>
      </div>

      <form onSubmit={submit} className='w-[95%] flex flex-col items-center z-50' >

      <div className='w-[85%] font-[Montserrat] mt-[15px] '>
        <input className={inputStyle} 
        type='text' value={userName} onChange={(e) => e.target.value} placeholder= 'Name'  />

        <div>
          <FaUser />
        </div>
      </div>
        
        <div className="flex flex-col w-[90%] mt-[20px]">
          <p className='text-[12px]'>Create password</p>
          <div className='h-[2px] w-full bg-gray-300 w-full '></div>
        </div>

        <button onClick={ submit} className='py-[10px] px-[20px] bg-yellowLike font-bold text-brown mt-[20px]' type='submit'>
          Signup
        </button>

        <p className='mt-[10px]'>Already Have and account <span className='italic font-bold cursor-pointer ' onClick={() => navigate('/login')}>Login</span></p>

      </form>

      {/** Sign-up with google */}
      <div className='z-50 mt-[30px] mb-[10px] w-[290px] bg-gray-300 w-full p-[1px]'></div>
      <div className='z-50 bg-white flex items-center h-[40px] w-[70%] p-[7px] rounded-[20px] border-2 border-yellowLike'>
        <div className="icon ">
          <AiOutlineGoogle size={'35px'} />
        </div>
        <p>Signin using g-mail</p>
        
      </div>

      {/** Bg design */}
      <div style={{zIndex:10}} className='z-10 overflow-hidden absolute  h-full w-[100%]'>
        <div style={{zIndex:20}} className="z-10 fixed top-0 absolute size-[450px] top-0 border-[100px] rounded-[50%] border-gray-200 top-[-220px] ml-[320px]"></div>
        <div style={{zIndex:20}} className="z-10 fixed top-0 absolute size-[500px] top-0 border-[90px] rounded-[50%] border-gray-200 left-[-140px] mt-[290px]"></div>
      </div>
        
      </div>
    </section>
    </>
  )
}

export default Signup