import React from 'react'
import { useSelector } from 'react-redux'


const Cart = () => {
  const items = useSelector(state => state);
  const total = items.cart.reduce((a, b) => a + b.price, 0)
  return (
    <div className='w-full sm:w-[calc(100%-60%)] h-auto sm:h-[400px]'>
      <div className='flex justify-center flex-col'>
      <h1 className='w-[200px] text-center mt-8 m-auto'>Cart</h1>
      <span className='text-center mt-6 mb-2 bg-green-500'>Total: ₹{total.toFixed(2)}</span>
      </div>
      <div className='mt-10 w-[90%] m-auto'>
        {
          items && items.cart.map(item => <div className='text-base list-none py-4 my-4 border-b-2 border-black' key={item.id}>
            <span>{item.name} - </span>
            <span className='font-bold'>₹{item.price}</span>
          </div>
          )
        }
      </div>
    </div>
  )
}

export default Cart
