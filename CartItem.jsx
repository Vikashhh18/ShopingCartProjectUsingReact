import React from 'react'

const CartItem = ({item}) => {
  return (
    <div>

    <div className='flex justify-between items-center gap-7 w-128' >
        <div> <img width={'260px'} className='pl-28 pt-5 pb-7' src={item.image} alt="" /></div>
        <div className='w-[360px]'>
            <h1 className='font-bold p-2'>{item.title}</h1>
            <h1 className='font-semibold pl-5 pb-5'>{item.category}</h1>
            <h1>{item.description.split(" ").slice(0,10).join(" ")+" ..."}</h1>
            <h1 className='font-bold pl-5 pt-6 pb-5 text-2xl text-green-700'>Price :{item.price}</h1>
        </div>
    </div>
        <hr  className='h-2 text-black'/>
    </div>
  )
}

export default CartItem