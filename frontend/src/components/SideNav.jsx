import React from 'react'
import './Hero.css'
import { NavLink } from 'react-router-dom'
import { BiFoodMenu } from 'react-icons/bi'
import { AiOutlineLogout, AiOutlineMenu, AiOutlineMessage, AiOutlineSearch, AiOutlineSetting, AiOutlineShoppingCart } from 'react-icons/ai'

const SideNav = () => {
  return (
    <>
        <nav className='side-nav flex flex-col justify-between z-20 fixed top-[50px] left-0 pt-[10px]' >
          <ul className='flex flex-col font-[Montserrat]'>
            <NavLink>
              <li className='flex gap-x-[7px] items-center p-[10px] hover:bg-yellow-500'>
                <AiOutlineSearch />
                <p>Search</p>
                
              </li>
            </NavLink>
            <NavLink to='/cart'>
              <li className='flex gap-x-[7px] items-center p-[10px] hover:bg-yellow-500' >
                <AiOutlineShoppingCart />
                <p>Cart</p>
                
              </li>
            </NavLink>
            <NavLink>
              <li className='flex gap-x-[7px] items-center p-[10px] hover:bg-yellow-500'>
                <AiOutlineMessage />
                <p>Message</p>
              </li>
            </NavLink>
            <NavLink to='/menu'>
              <li className='flex gap-x-[7px] items-center p-[10px] hover:bg-yellow-500'>
                <BiFoodMenu /><p>Menu</p>
              </li>
            </NavLink>
          </ul>

          <ul>
            <NavLink to='/menu'>
              <li className='flex gap-x-[7px] items-center p-[10px] hover:bg-yellow-500'>
                <AiOutlineLogout />
                <p>Logout</p>
              </li>
            </NavLink>
            <NavLink to='/menu'>
              <li className='flex gap-x-[7px] items-center p-[10px] hover:bg-yellow-500'>
                <AiOutlineSetting />
                <p>Settings</p>
              </li>
            </NavLink>

          </ul>
        </nav>
    </>
  )
}

export default SideNav