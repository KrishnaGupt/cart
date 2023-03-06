import React from 'react'
import Products from './Products'
import Cart from './Cart'

const Home = () => {
  return (
    <div className='flex sm:flex-row flex-col-reverse'>
      <Products/>
      <Cart/>
    </div>
  )
}

export default Home
