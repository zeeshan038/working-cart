import React from 'react'
import Products from './Products'
import '../styles/Home.css'
function Home() {
  return (
    <div>
      <h6>
        welcome to My store  <span className='home-shop'>  shop</span>  what you want
      </h6>
      <Products/>
    </div>
  )
}

export default Home
