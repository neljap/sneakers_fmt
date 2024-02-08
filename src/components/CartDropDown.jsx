import React, { useContext } from 'react'
import CartContext from './CartContext'
import Thumb from "../assets/image-product-1-thumbnail.jpg"
import {FaShoppingBasket} from "react-icons/fa"

const CartDropDown = () => {
  const {count, amount, setCount, setIsOpen} = useContext(CartContext);

  const removeCart = () => {

  }
  return (
    <div className='w-72 h-48 shadow-2xl rounded-lg'>
        <div className='ps-4 py-2'>
            <p className='font-[500] text-lg'>Cart</p>
        </div>
        <hr />
        {count <= 0 ? (
           <p className='text-center m-auto py-6 text-md font-[500]'>Your Cart is empty</p>
        ): (
          <div className='p-4'>
            <div className='flex justify-between items-center gap-2'>
              <img src={Thumb} alt="" className='w-12 h-12 rounded-lg' />
              <div>
                <p className='text-md'>Fall Limited Edition Sneakers</p>
                <p>${amount}.00 x {count} <span className='font-[700] ps-2'>${amount * count}.00</span></p>
              </div>
              <div onClick={() => setCount(0)}>
                <FaShoppingBasket size={15}/>
              </div>
            </div>
            <button className='w-full bg-primary py-2 rounded-lg'>Checkout</button>
          </div>
        )}
       
    </div>
  )
}

export default CartDropDown