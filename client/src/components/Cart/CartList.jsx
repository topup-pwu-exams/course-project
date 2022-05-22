import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { Store } from '../../utils/Store';
import BaseButton from '../common/BaseButton/BaseButton';
import empty_cart from '../../assets/Images/empty_cart.svg'

const CartList = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(Store);

  // const { userInfo } = state;
  const { cart } = state;

  const handleClick = () => {
    navigate('/')
  }

  return (
    <div>
      <p className='text-lg mt-10'>{cart.cartItems.length} Courses in Cart</p>
      <div className='flex mx-auto flex-col justify-center items-center border-4 border-primary-500 p-5 mt-2'>
        <img src={empty_cart} alt="Course App" className='w-1/4 mb-5' />
        <p className='mb-5'>Your cart is empty. Explore the shop to find a course and add it to cart! </p>
        <div className='w-max'>
          <BaseButton
            text='Explore'
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  )
}

export default CartList