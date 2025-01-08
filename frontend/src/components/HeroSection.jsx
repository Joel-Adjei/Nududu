import React, { useState } from 'react'
import rice from '../assets/imgs/rice-2.png'
import rice3 from '../assets/imgs/rice-3-crop.png'
import './Hero.css'
import HeroText from './HeroText'
import heroImg from '../assets/imgs/heroImg.png'
import TopNav from './TopNav'


const HeroSection = () => {
  return (
    <section className='Hero-page h-screen relative flex justify-center pt-[50px] pr[10px]'>
        <TopNav />

        {/** Rice img for bg */}
        <div  className = 'absolute overflow-hidden w-[300px] h-[300px] ' style={{right:0,bottom: 0}}>
            <img className='' style={{margin: "150px 0 0 80px"}} src={rice}alt="food" />
        </div>
        <div  className = 'absolute overflow-hidden w-[180px] h-[260px] top-[65] left-0'>
            <img className='top-food lg:hidden h-[220px] mr-[20px]' src={rice3}alt="food" />
        </div>

        {/** Main content */}
        <div className='h-screen w-[100%] lg:px-[25px] flex lg:justify-between  justify-center items-center '>
            <HeroText />
            <img className='h-[450px] hidden lg:block lg:h-[400px]' src={heroImg} alt="" />
        </div>
    </section>
  )
}

export default HeroSection