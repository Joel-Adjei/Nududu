import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import {AiOutlineMenu} from 'react-icons/ai'
import { RxCross1 } from 'react-icons/rx'


const TopNav = () => {
    const [ulhidden, setulhidden] = useState('hidden')
    const [iconHidden, seticonHidden] = useState('hidden')

    const displayOnSide = () =>{
        if(ulhidden == 'hidden'){
            setulhidden('flex')
            seticonHidden('block')
        }else{
            setulhidden('hidden')
            seticonHidden('hidden')
        }
    }

    const liStyle = 'border-b-2 border-yellow-600 px-[20px] py-[10px] h-[100%] md:hover:bg-[#320f01] hover:bg-[#ffcd2b] md:text-white text-[#712200]'

    const navigate = useNavigate()
    return (
        <>
            <nav className='top-nav font-[Montserrat] fixed top-0 w-screen h-[50px] backdrop-blur-md bg-topNavBg px-[15px]' style={{zIndex:900,display:'flex',justifyContent: "space-between",alignItems: "center",}}>
                <div className='flex gap-x-[15px]'>
                    <button onClick={displayOnSide} className='toggle_nav md:hidden'>
                        <AiOutlineMenu size={20} color='white' className= {`${iconHidden == 'block' ? 'hidden' : 'block'}`} />
                        <RxCross1 size={20} color='white' className={`${iconHidden}`} />
                    </button>
                    <p onClick={()=>navigate('/')} className='text-white text-[20px] font-bold'>Nududu <span className='text-yellowLike font-extralight'>Resturant</span></p>
                </div>
                <ul className={`${ulhidden}  md:flex gap-x-10px flex-col uppercase md:text-white md:w-fit md:h-fit bg-yellowLike md:bg-transparent h-screen md:h-full
                    w-[170px] absolute top-[50px] left-0 md:flex-row md:static '}`}>
                    <NavLink to='/'><li className={liStyle}>Home</li></NavLink>
                    <NavLink to= '/about'><li className={liStyle}>About</li></NavLink>
                    <NavLink to= '/about'><li className={liStyle}>Services</li></NavLink>
                    <NavLink to='/help'><li className={liStyle}>Help</li></NavLink>
                </ul>
                <button onClick={()=> navigate('/login')}  className='h-[80%] w-[80px] bg-yellowLike mr-[25px] text-deepBrown font-bold'>
                    Login
                </button>
            </nav>

            <div style={{zIndex:70,opacity: 0.7}} className= {`h-screen w-full fixed bottom-0 top-0 bg-brown backdrop-blur-md  ${iconHidden == 'block' ? '' : 'hidden'}`} >

            </div>
        </>
    )
}


export default TopNav