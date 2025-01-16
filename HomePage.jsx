import React, { useEffect, useState } from 'react'
import { Product } from '../components/Product';
import Spinner from '../components/Spinner';

const HomePage = () => {
    const Api_url="https://fakestoreapi.com/products";

    const [data,setData]=useState('');
    const [loader,setLoader]=useState(true);

    async function fetachApi(){
        
        try{
            setLoader(true);
            const res=await fetch(Api_url);
            const Data = await res.json();
            setLoader(false);
            setData(Data);
            console.log(Data);
        }
        catch(error){
            console.log("something went wrong");
        }
    }

    useEffect(()=>{
        fetachApi();
    },[])

  return (
    <div className='grid grid-cols-3 w-full overflow-hidden '>
        {loader===true&&<Spinner/>}
        {data.length>0 && data.map((post)=>{
            return <Product key={post.id} post={post}/>
        })}
    </div>
  )
}

export default HomePage