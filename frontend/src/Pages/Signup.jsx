import React, { useEffect, useState } from 'react'
import Form from '../components/Signup/Form'
import TopNav from '../components/TopNav'
import { AiFillEye, AiOutlineGoogle, AiTwotoneEyeInvisible } from 'react-icons/ai'

const Signup = () => {
  


  return ( <>
    <TopNav />
    <section className='flex pt-[50px] bg-brown h-screen w-screen'>
      {/* illustration and form for tablet and phones*/}
      <div className="flex justify-center h-full w-full lg:w-1/2 bg-BG bg-cover">

        {/** form for phone and tablet */}
        <div className='w-full h-full flex flex-col items-center justify-center overflow-scroll lg:hidden'>
          
          <div className="z-50 flex flex-col font-[Montserrat] items-center ">
            <h2 className='text-[50px] font-extrabold text-yellow-500'>Signup</h2>
            <div className="h-[3px] w-[100px] bg-yellowLike"></div>
          </div>
          <Form />
            
         {/** Sign-up with google */}
          <div className='z-50 mt-[30px] mb-[10px] w-[80%] bg-white lg:bg-gray-500 w-full py-[0.5px]'></div>

          <div className='z-50 mb-[10px] bg-white flex justify-center items-center gap-x-[12px] h-[40px] w-[55%] p-[7px] rounded-[20px] border-2 border-yellowLike'>
            <div className="icon ">
              <AiOutlineGoogle size={'30px'} />
            </div>
            <p>Signin using g-mail</p>
          </div>
        </div>
    

      </div>

       {/** form for PC */}
      <div className=" hidden lg:flex z-50 flex-col overflow-scroll  items-center relative  h-full w-1/2">

      <div className="z-50 flex flex-col font-[Montserrat] items-center ">
        <h2 className='text-[50px] font-extrabold text-yellow-500'>Signup</h2>
        <div className="h-[3px] w-[100px] bg-yellowLike"></div>
      </div>

      <Form />

      {/** Sign-up with google */}
      <div className='z-50 mt-[30px] mb-[10px] w-[80%] bg-gray-500 w-full py-[0.5px]'></div>

      <div className='z-50 bg-white flex justify-center items-center gap-x-[12px] h-[40px] w-[55%] p-[7px] rounded-[20px] border-2 border-yellowLike'>
        <div className="icon ">
          <AiOutlineGoogle size={'30px'} />
        </div>
        <p>Signin using g-mail</p>
      </div>

      
        
      </div>
      {/** Bg design */}
      <div style={{zIndex:10}} className='z-10 hidden lg:block fixed overflow-hidden absolute top-0 right-0 bg-gray-100 h-full w-1/2'>
        <div style={{zIndex:20}} className="z-10 fixed absolute size-[450px] top-0 border-[100px] rounded-[50%] border-gray-200 top-[-220px] ml-[320px]"></div>
        <div style={{zIndex:20}} className="z-10 fixed absolute size-[500px] top-0 border-[90px] rounded-[50%] border-gray-200 left-[-140px] mt-[290px]"></div>
      </div>
    </section>
    </>
  )
}

export default Signup