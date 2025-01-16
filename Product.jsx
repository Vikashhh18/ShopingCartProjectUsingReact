import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct, removeProduct } from '../redux/Slice/CartSlice';

export const Product = ({ post }) => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const handleRemove = (id) => {
        dispatch(removeProduct(id));  // Remove the item by id
    }

    const handleAdd = () => {
        dispatch(addProduct(post));  // Add the item to the cart
    }

    return (
        <div className='flex-col justify-between items-center p-5 w-[350px] m-12 ml-16 min-h-6 rounded-lg h-112  shadow-2xl shadow-blackstransition-all duration-300 hover:shadow-2xl hover:scale-110'>
            <div>
                <h1 className='font-bold p-2'>{post.title.split(' ').slice(0, 3).join(' ') + "..."}</h1>
            </div>
            <div>
                <h1 className='font-semibold pl-5 pb-5'>#{post.category}</h1>
            </div>
            <div>
                <h1 className='text-gray-600 text-sm'>{post.description.split(" ").slice(0, 10).join(" ") + " ..."}</h1>
            </div>
            <div>
                <img width={'260px'} className='pl-28 pt-5 pb-7' src={post.image} alt="" />
            </div>
            <div className='flex justify-between items-center'>  
                <span className='text-green-600 font-extrabold'>Price: ${post.price}</span>
                {
                    cart.some(cartItem => cartItem.id === post.id) ? (
                        <button 
                            className='px-7 py-3 bg-black text-white font-bold rounded-xl' 
                            onClick={() => handleRemove(post.id)}  // Pass the post.id to handleRemove
                        >
                            Remove-Item
                        </button>
                    ) : (
                        <button 
                            className='px-7 py-3 border-2 shadow-md hover:bg-slate-200 tra border-black bg-slate-100 font-bold rounded-2xl' 
                            onClick={()=>handleAdd(post)}  
                        >
                            Add-Item
                        </button>
                    )
                }
            </div>
        </div>
    )
}
