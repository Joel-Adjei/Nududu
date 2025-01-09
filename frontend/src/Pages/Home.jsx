import React from 'react'
import HeroSection from '../components/HeroSection'
import Ad from '../components/Ad'
import Footer from '../components/Footer'
import DeliverySection from '../components/DeliverySection'
import TheBest from '../components/TheBest'


const Home = () => {

  return (
    <><div className='w-[100%] overflow-x-hidden relative'>
        <HeroSection />
        <TheBest />
        <div className='hidden md:block'>
        <Ad />
        </div>

        <DeliverySection />
        <Footer />
    </div>
      
    </>
  )
}

export default Home