import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import CartItem from '../components/CartItem.jsx';

const Cartpage = () => {
  const {cart}=useSelector((state)=>state)
  const[TotalAmount,setTotalAmount]=useState(0);
  useEffect(()=>{
    const total = cart.reduce((acc, item) => acc + item.price, 0);
    setTotalAmount(total);
  },[cart])
  console.log(cart)
  return (
   <div className=''>
    {
      cart&& cart.length>0?
      (<div className='w-[70%] ml-40 mr-40 flex justify-between items-center '>
        <div>
        {
          cart.map((item)=>{
            return <CartItem key={item.id} item={item}/>
          })
        }
        </div>
        <div className='border-2 w-[370px] h-[500px] shadow-2xl flex-col justify-between '>
          <div className='pb-48 pt-6'>
          <div className='font-bold pl-7 text-4xl'>Cart</div>
          <span className='font-extrabold pl-7 text-4xl text-blue-900'>Summary</span>
          <div className='font-semibold pl-7 text-2xl'>Total Item: {cart.length}</div>
          </div>
          <div className='font-semibold pl-7 text-2xl text-green-900'>Total amount: ${TotalAmount}</div>
          <button className='px-24 py-3 ml-10 mt-7 border border-black rounded-md bg-blue-400 shadow-2xl shadow-black-300 text-white'>CheckOut</button>
          </div>
      </div>):
      (<div className='flex-col gap-5 justify-center items-center mt-60 text-center'>
        <h1 className='text-4xl text-black mb-6'>Cart is Empty</h1>
        <NavLink to="/">
        <button className='px-16 py-3 border border-black rounded-md bg-blue-400 shadow-2xl shadow-black-300 text-white'>Show Now</button>
        </NavLink>
      </div>)
    }
   </div>
  )
}

export default Cartpage