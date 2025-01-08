import React from "react";
import Adrice from '../assets/imgs/Adrice.png'
import deliveryMan from '../assets/imgs/Delivery_man.png'

const DeliverySection = () => {
  return (
    <div className='relative bg-whiteImg bg-center bg-cover h-[750px] md:h-[420px] w-screen px-[10px] md:pr-[50px] 
      flex flex-col-reverse items-center md:flex-row md:items-center justify-between gap-y-[20px]'>
      <div style={{zIndex:5}}  className="h-1/2 md:h-full md:w-1/2 flex items-end justify-center">
        <img
          src={deliveryMan}
          alt="Delivery"
          className="w-[470px] md:w-[460px] object-contain"
        />
      </div>

      <div style={{zIndex:6}}  className="h-1/2 md:w-1/2 z-6 text-center md:text-right font-[Montserrat] flex flex-col md:items-end items-center justify-center">
        <h2 className="text-5xl font-extrabold text-yellowlike mb-4">Fast Delivery</h2>
        <p className=" text-gray-700 text-[22px] mb-4">
          Get your favorite meals delivered fast and fresh from
          <span className='text-brown font-extrabold'> Nududu</span> 
          <span className='text-yellowLike font-light'> Restaurant </span> 
          Indulge in gourmet flavors without the wait.
        </p>
        <p className="text-orange-600 font-semibold italic underline text-[20px]">
          Our speedy delivery brings luxury dining straight to your doorstep.
        </p>
        <p className="h-[30px] md:w-[75%] w-[57%] text-[90%] font-[Montserrat] mt-6 bg-yellow-500 hover:bg-yellow-600 
            text-white font-light tracking-widest py-2 px-6 rounded-lg flex justify-center items-center">
          Satisfy your cravings in no time!
        </p>
      </div>
      
      <div style={{zIndex:1, opacity: 0.5}} className="absolute right-0 left-0 z-1 h-full w-full bg-yellow-100"></div>
    </div>
  );
};

export default DeliverySection;
