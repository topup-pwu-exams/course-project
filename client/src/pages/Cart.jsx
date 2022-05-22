import React from 'react'
import CartList from '../components/Cart/CartList'
import LikedCourseList from '../components/Cart/LikedCourseList'
import RelevantCourseList from '../components/Cart/RelevantCourseList'

const Cart = () => {
  return (
    <div className='custom-layout'>
      <h1>Your Shopping Cart</h1>
      <div className='space-y-10'>
        <CartList />
        <LikedCourseList />
        <RelevantCourseList />
      </div>
    </div>
  )
}

export default Cart