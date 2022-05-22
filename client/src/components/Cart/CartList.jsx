import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { Store } from '../../utils/Store';
import BaseButton from '../common/BaseButton/BaseButton';
import empty_cart from '../../assets/Images/empty_cart.svg'
import CartListItem from './CartListItem';

const CartList = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(Store);

  // const { userInfo } = state;
  const { cart } = state;
  const cartItems = cart.cartItems

  const handleClick = () => {
    navigate('/')
  }

  return (
    <div>
      <p className='text-lg mt-10 mb-2'>{cartItems.length} Courses in Cart</p>

      {!cartItems.length ? <div className='flex mx-auto flex-col justify-center items-center border-4 border-primary-500 p-5 mt-2'>
        <img src={empty_cart} alt="Course App" className='w-1/4 mb-5' />
        <p className='mb-5'>Your cart is empty. Explore the shop to find a course and add it to cart! </p>
        <div className='w-max'>
          <BaseButton
            text='Explore'
            onClick={handleClick}
          />
        </div>
      </div> :
        <div>
          {cartItems.map(item => {
            return (
              <CartListItem
                key={item.slug}
                title={item.title}
                mainImage={item.mainImage}
                author={item.author}
                hours={item.hours}
                lessons={item.lessons}
                price={item.price}
                likes={item.likes}
                // users={item.users}
                // tags={ }
                category={item.category}
                slug={item.slug}
              />
            )
          })

          }
        </div>
      }
    </div>
  )
}

export default CartList