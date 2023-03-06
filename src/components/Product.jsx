import React from 'react'
import { useDispatch } from 'react-redux'
import { addItemsToCart } from '../redux/slices/cartSlice'

const Product = (props) => {
    const dispatch = useDispatch()
    return (
        <div className='w-full sm:w-[250px] mx-8 my-10'>
            <div className='h-[300px] flex justify-center items-center py-10'><img className='w-44' src={props.img} alt="" /></div>
            <div>
                <div><p className='text-base font-semibold'>{props.title}</p></div>
                <div><p className='text-sm'>{props.category}</p></div>
                <div>
                    <span className='bg-green-500 text-base font-semibold px-2 rounded-md'>{props.rating.rate}</span>
                    <span className='text-sm ml-2'>{props.rating.count}</span>
                </div>
                <div><span className='text-[18px] font-medium'>₹{props.price}</span></div>
                <div className='text-sm font-medium'>Free delivery</div>
                <button className='text-center text-2xl font-medium bg-yellow-400 px-10 py-4 rounded-lg mt-4' onClick={(e)=> dispatch(addItemsToCart({ id: props.id, name: props.title, price: props.price }))}>Add to Cart</button>
            </div>
        </div>
    )
}

export default Product
