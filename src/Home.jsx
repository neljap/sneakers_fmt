import React, { useContext, useState } from 'react'
import CartContext from './components/CartContext';
import {FaShoppingCart} from "react-icons/fa"
import Avatarimg from "./assets/image-avatar.png";
import CartDropDown from './components/CartDropDown';
import LeftImg from "./assets/image-product-1.jpg"

const Home = () => {
    const {count, setCount, isOpen, setIsOpen} = useContext(CartContext)

    const [numCount, setNumCount] = useState(1)

    let amount = 125


  return (
    <div className="relative">
      <div className="container">
        <div className="flex justify-between items-center py-4">
          <div className="flex flex-row gap-4">
            <h1>Logo</h1>
            <ul className="flex flex-row gap-4">
              <li>Collections</li>
              <li>Men</li>
              <li>Women</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="flex flex-row gap-8 justify-center items-center">
            <div className='cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
              <div className={`bg-primary w-4 h-4 flex justify-center items-center rounded-full text-white ${count <= 0 ? "hidden" : "block"}`}><p className='text-sm font-[500]'>{count}</p></div>
              <FaShoppingCart size={20} />
            </div>
            <div>
              <img src={Avatarimg} alt="img" className="w-10" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 py-8">
            {/* <LeftSlide /> */}
            <div>
              <img src={LeftImg} className='rounded-xl w-full' alt="" />
            </div>
          <div className='pt-24 flex flex-col gap-2'>
            <p className='text-lg text-primary font-[500]'>Sneaker Company</p>
            <div className='w-64'>
              <p className='font-[700] text-3xl'>Fall Limited Edition Sneakers</p>
            </div>
            
            <p className='text-md'>
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they’ll withstand
              everything the weather can offer.
            </p>
            <div className='flex flex-row gap-2 justify-start items-center'>
              <p className='font-[600] text-lg'>$125.00</p>
              <div className='p-2 bg-primary bg-opacity-20 rounded-lg'>
                <p className='text-primary text-sm font-[700]'>50%</p>
              </div>
              
            </div>
            <p className='text-md font-[500 opacity-35]'>${amount * 2}.00</p>
            <div className='flex flex-row gap-8 justify-start items-center'>
              <div className='flex flex-row gap-4 bg'>
                <div className="cursor-pointer">
                  <p onClick={() => setNumCount(numCount - 1)}>-</p>
                </div>
                <div>
                  <p>{numCount}</p>
                </div>

                <div onClick={() => setNumCount(numCount + 1)} className="cursor-pointer">
                  <p>+</p>
                </div>
              </div>
              <div>
                <button className='bg-primary text-white px-6 py-3 rounded-lg' onClick={() => setCount(numCount)}>Add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute top-12 right-12 z-50">
          {" "}
          <CartDropDown />{" "}
        </div>
      )}
    </div>
  );
}

export default Home