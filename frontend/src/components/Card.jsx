import React from 'react'
import { AiFillShopping, AiOutlineShoppingCart } from 'react-icons/ai'

const Card = ({foodName,price,image}) => {
  return (
    <div className='flex  flex-col h-[300px] hover:bg-gray-100 p-[15px] justify-between rounded-[10px]'>
        <div className='h-[70%] rounded-[10px] w-full bg-white-400 flex justify-center items-center'>
          <img className='h-[90%]' src={image}/>
        </div>
        
        <div className='flex justify-between items-end'>
            <div className='font-[Monterrat]'>
                <p className='text-xl'>{foodName}</p>
                <p className='p-[10px] bg-yellow-200'>{price}</p>
            </div>
            <button className='p-[7px] bg-gray-200'><AiOutlineShoppingCart className='w-[25px] h-[25px]' color='brown' /></button>
        </div>
    </div>
  )
}

export default Card