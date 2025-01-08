import React from 'react'
import TopNav from '../components/TopNav'
import SideNav from '../components/SideNav'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import rice from '../assets/imgs/rice-2.png'

const Menu = ({islogin}) => {
  return (
    <>
      <Navbar islogin={islogin}/>
      {islogin && <SideNav />}
      <div className= {`${islogin && "ml-[45px]"} grid grid-cols-menu gap-[10px] h-[300%] w-[95%]justify-self-center justify-center p-[10px] `}>
        <Card image={rice} foodName={'Gobe'} price={'GH300.00'}/>
        <Card foodName={'Fried Rice'} price={'GH30.00'}/>
        <Card foodName={'Waakye'} price={'GH20.00 - GH130.00'}/>
        <Card foodName={'Banku'} price={'GH10.00 - GH140.00'}/>
      </div>
    </>
    
  )
}

export default Menu