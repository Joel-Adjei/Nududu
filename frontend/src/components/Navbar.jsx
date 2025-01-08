import React from 'react'
import { AiFillBell } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'

const Navbar = ({islogin}) => {
  return (
    <nav className='sticky top-0 flex justify-between items-center h-[50px] w-screen bg-red-900 pr-[15px] pl-[15px]'>
        <div  className='flex justify-between'>
            <img src="" />
            <p>Nududu <span>Resturant</span></p>
        </div>

        <ul className="flex font-[Montserrat] text-white">
            <NavLink to='/'><li className='p-[3px] pr-[20px] pl-[20px]'>Home</li></NavLink>
            <NavLink to= '/about'><li className='p-[3px] pr-[20px] pl-[20px]'>About</li></NavLink>
            <NavLink to='/help'><li className='p-[3px] pr-[20px] pl-[20px]'>Help</li></NavLink>
        </ul>
       
        {islogin?<div className='flex gap-x-[10px] items-center'>
            <div className="notification">
                <AiFillBell className='w-[20px] h-[20px]' />
            </div>
            <div className="profile h-[35px] w-[35px] bg-white">
                <img src="" />
            </div>
        </div>: 
                <button className='h-[80%] w-[80px] bg-[rgb(219, 168, 0)]' style={{background:"rgb(219, 168, 0)",marginRight: "15px"}}>
                    Login
                </button>}
    </nav>
  )
}

export default Navbar