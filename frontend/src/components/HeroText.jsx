import React from 'react'
import './Hero.css'
import { Link, NavLink, useNavigate } from 'react-router-dom';

const yellowlike = "#ffbf00";
const HeroText = () => {

  const navigate = useNavigate()

  return (
    <div className='hero-text-main items-center lg:items-start  h-[100%] gap-y-[10px] flex flex-col justify-center lg:pl-[20px]'>
        <div className="flex flex-col items-center lg:items-start main-text text-center lg:text-left gap-y-[20px] pt-[15px]">
          <div>
            <h3 className='font-[Montserrat] text-[80px] tracking-tighter text-yellowLike font-extrabold lg:text-[85px] lg:text-[120px]'>Nududu</h3>
            <span className='tracking-widest font-[Montserrat] font-light text-white leading-3 text-[70px]'>Restaurant</span>
          </div>
          <p className='lg:text-left w-[90%] text-center text-white'>Please let pray for our backend developers Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum sunt nulla soluta cupiditate vel cumque? Eligendi labore alias possimus corporis enim quae.
             Eaque illum vel, corrupti nemo rem quaerat in!
          </p>
        </div>

        <div className="buttons flex flex-col lg:flex-row gap-x-[20px] items-center font-[Montserrat]">
            <button onClick={()=> navigate('/menu')} className='text-[20px]  h-[50px] w-[140px] bg-yellowLike hover:bg-[#de9800] font-[Montserrat]
            font-extrabold italic text-brown rounded-[10px] shadow-lg hover:shadow-lg'>
              Order Now
            </button>

            <button onClick={()=>navigate('/signup')} className='relative text-white h-[60px] w-[100px] flex flex-col-reverse items-center justify-center'>
              <div className="h-[2px] w-[65px] bg-white"></div>
               <p className='font-light font-[Montserrat] text-[25px]'>Signup</p>
            </button>
            
        </div>
    </div>
  )
}

export default HeroText