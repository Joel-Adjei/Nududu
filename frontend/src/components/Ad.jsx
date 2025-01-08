import React from 'react'
import './Hero.css'
import Adrice from '../assets/imgs/Adrice.png'

const Ad = () => {
  return (
    <section className='ad-section h-[400px] w-[100vw] relative flex items-center'>
      {/*Overlay BG */}
        <div className="Bg_Overlay absolute h-[100%] w-[100%] bg-[rgba(63, 21, 2, 0.546)] top-0"></div>

        <div className='flex justify-between w-full'>
          {/*image */}
          <img src={Adrice} width={320} alt="" className="object-contain" />

          {/*Text */}
          <div className="Ad-text  flex flex-col items-center  w-[55%]">
            <h4 className='font-[Montserrat] font-extrabold text-[40px] text-[#ffbf00] '>Choose The Best</h4>
            <p className='w-[400px] text-[19px] font-[Montserrat] text-white tracking-[3px] '>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, itaque reprehenderit, facere molestias 
              accusamus quidem tenetur ex nesciunt esse laudantium eius rem odit eum alias eaque quod! Cumque, quos consequuntur.</p>
          </div>
        </div>
        
    </section>
  )
}

export default Ad