import React, { useEffect, useState } from 'react'
import { getData } from '../api/data'
import Product from './Product';

const Products = () => {
    const [data, setData] = useState([])
    // console.log(data);
    useEffect(() => {
        getData().then(response => setData(response))
    }, [])
  return (
    <div className='flex w-full flex-wrap border-r-[1px] border-black'>
      {
        data && data.map(item => <Product key={item.id} id={item.id} title={item.title} price={item.price} category={item.category} img={item.image} rating={item.rating}/>)
      }
    </div>
  )
}

export default Products
