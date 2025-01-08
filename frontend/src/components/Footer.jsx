import React from 'react'

const Footer = () => {
  return (<>
    <footer className='relative footer-main h-[200px] w-[100%] flex items-center p-[10px] justify-between'>

        {/* lines between*/}
        <div className="left-side absolute h-[80%] w-[1px] bg-white left-[26%]"></div>
        <div className="right-side absolute h-[80%] w-[1px] bg-white right-[15%]"></div>

        <div className='nududu w-[25%]'>
            <img src="" alt="" />
            <h4 className='font-[Montserrat] text-[20px] text-[#ffbf00]'>Nududu <span className='text-white'>Restaurant</span></h4>
            <p className='font-[Montserrat] text-[12px] text-white'>Lorem ipsum dolor sit amet consectetur adipisicing</p>
        </div>


        <div className='contact h-[100%] w-[50%]  text-white flex items-center'>
          <div className="info flex flex-col gap-y-[9px]">
            <h4 className='font-[Montserrat] uppercase underline text-lg font-bold text-red-300'>Contact</h4>
            <p className=' font-[Montserrat] text-[14px]'>23 Nii Nortey Palm Cres, Haatso <br />
                <span className='mb-[12px] font-[Montserrat] font-bold'>050 889 6829</span><br />
                <span className='mb-[12px] font-[Montserrat] underline'>nududures12@gmail.com</span></p>
          </div>
          <div className="social-media"></div>
        </div>


        <div className='links w-[16%]  '>
            <ul className='flex flex-col font-[Montserrat] items-end text-white font-[Montserrat] gap-y-[5px] pr-[25px]'>
                <li><a className='font-[Montserrat]' href="#">Home</a></li>
                <li><a className='font-[Montserrat]' href="#">About</a></li>
                <li><a className='font-[Montserrat]' href="#">Help</a></li>
            </ul>
        </div>
    </footer>
    <footer className='flex justify-center text-[11px] p-[3px] bg-red-900 text-white'>Copyright</footer>
    </>
  )
}

export default Footer