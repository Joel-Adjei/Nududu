import React from 'react'
import { useState, useEffect } from 'react'
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai'
import pepper from '../assets/imgs/pepper.png'
import heroImg from '../assets/imgs/heroImg.png'
import bowlFood from '../assets/imgs/bowl-of-food.png'

const TheBest = () => {
  const buttonStyle = 'p-[20px] rounded-[30px] bg-gray-200 cursor-pointer'
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [bowlFood,heroImg,pepper]


  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Use useEffect to create an automatic slider
  useEffect(() => {
    const interval = setInterval(nextSlide, 15000); // 15 seconds
    return () => clearInterval(interval); // Clear the interval on unmount
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    
    <section className="relative bg-whiteImg  bg-center bg-cover h-full w-screen px-[30px]">
      
      <div className="Position-well flex flex-col md:flex-row justify-between w-full items-center z-50">
        
        <div className='font-[Montserrat] flex flex-col items-center md:items-start md:w-[60%] text-center md:text-left '>  
          <h6 className="title text-[35px] md:text-[50px] font-black underline text-orange-900">
            We Are The Best
          </h6>

          <p className="w-[90%] text-[23px] text-gray-800 shrink">
            <span className='text-brown font-extrabold'>Nududu</span> <span className='text-yellowLike font-light'>Restaurant</span> invites you to savour a taste of Luxury
            Your unforgettable Culinary Journey awaits
          </p>
          
          <span className='underline italic pt-[5px] text-[20px] text-orange-400'>Reserve Your Table Today</span>

          <button className="z-50 button mt-[25px] h-[45px] w-[100px] bg-yellowLike text-brown font-extrabold cursor-pointer ">
            More...
          </button>
        </div>

            <div className="imageSlider z-40 md:w-[40%] h-full flex flex-col justify-center items-center py-[15px] ">
              <div className='md:h-[60%] flex justify-center items-center p-[15px]'>
                <img className='h-[330px] object-contain' src={images[currentIndex]} alt="bowl" />
              </div>
                
                <div className="sliderControl flex justify-between w-[70%] ">
                  <button onClick={prevSlide} className= {buttonStyle}> <AiOutlineArrowLeft /> </button>

                  <div className="dots flex justify-center mt-[10px]">
                    {images.map((images,index) => (
                      <span
                        key={index}
                        className={`dot size-[10px] mx-[5px] cursor-pointer bg-gray-400 rounded-[50%] inline-block ${index === currentIndex ? "bg-brown" : ""}`}
                        onClick={() => setCurrentIndex(index)}
                      >

                      </span>
                    ))}
                  </div>

                  <button onClick={nextSlide} className={buttonStyle}> <AiOutlineArrowRight /> </button>
                </div>

                { 
                
                 }
            </div>
      </div>


      <div className="pic-1 absolute overflow-hidden top-0 left-0 size-[70px] md:size-[100px]">
        <img className="absolute top-[-19px] left-[-22px]" src="./src/assets/imgs/tomato.png" />
      </div>
      <div  className="pic-2 absolute top-[15px] md:top-0 right-[1px] md:left-1/2 overflow-hidden w-[100px] h-[100px]">
        <img src="./src/assets/imgs/bg-2.png" alt="chicken" className='md:absolute md:top-[-22px]' />
      </div>
      <div className="pic-4 absolute bottom-0 left-0 size-[150px] overflow-hidden">
        <img className='absolute bottom-[-13px] left-[-49px]' src="./src/assets/imgs/Onion.png" alt="spring-onion" />
      </div>
      <div className="z-0 pic-5 absolute top-[50%] md:top-[9%] right-[90px] md:right-[70px] size-[60px] md:size-[90px]">
        <img className=' ' src="./src/assets/imgs/pepper.png" alt="pepper" />
      </div>
      <div className=" absolute pic-6 w-[20px]">
        <img src="./src/assets/imgs/plate-of-food.png" alt="yam" />
      </div>
      <div className="z-10 pic-7 absolute bottom-0 right-0 size-[100px] size-[150px] overflow-hidden">
        <img className='ml-[35px] mt-[50px]' src="./src/assets/imgs/plate.png" alt="plate" />
      </div>
    </section>
  )
}

export default TheBest