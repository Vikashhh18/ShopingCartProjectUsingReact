import React from 'react'
import { MdShoppingCart } from "react-icons/md";
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const {cart}=useSelector((state)=>state)
  return (
    <div className='flex justify-around items-center shadow-lg fixed overflow-auto w-full bg-white'>
        <div>
            <NavLink to={"/"}>
            <img className='w-36 rounded-3xl bg-black' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn7-ZdKnl8b8jD3OvlBQfTphHU6AqEkGedxg&s" alt="" />
            </NavLink>
        </div>
        <div className="relative">
      <NavLink to="/Cartpage">
        <MdShoppingCart className="text-6xl" />
        {/* Show cart count if greater than 0 */}
        {cart.length > 0 && (
          <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            {cart.length}
          </div>
        )}
      </NavLink>
    </div>

    </div>
  )
}

export default Navbar