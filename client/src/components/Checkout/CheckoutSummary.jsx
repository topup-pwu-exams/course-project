import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Store } from '../../utils/Store';
import BaseButton from '../common/BaseButton/BaseButton'

const CheckoutSummary = () => {
    const { state, dispatch } = useContext(Store);
    const navigate = useNavigate()
    const { userInfo, cart: { cartItems, shippingAddress, paymentMethod }} = state;

    const itemsPrice = cartItems.reduce((a, b) => a + b.price, 0)

    useEffect(() => {
        if (cartItems.length === 0) {
          navigate('/cart');
        }
      }, [cartItems]);

    const finishOrder = () => {
        console.log('object');
    }

    return (
        <div className='border-2 border-primary-500 p-5 max-w-md md:mt-3 mt-10 flex flex-col justify-between h-fit '>
            <h2 className='mb-2'>Summary</h2>
            <div className='flex flex-col'>
                {cartItems.map(item => {
                    return (
                        <div key={item._id} className='flex justify-between space-x-10'>
                            <div className='truncate'>{item.title}</div>
                            <div>${(item.price).toFixed(2)}</div>
                        </div>
                    )
                })}
            </div>
            <hr className='my-5 border border-gray-300' />
            <div className='flex justify-between space-x-10'>
                <h4>Total:</h4>
                <p className='text-2xl font-bold'>${itemsPrice.toFixed(2)}</p>
            </div>
            <div className='mt-2'>
                <p>Lrnr is required by law to collect applicable transaction taxes for purchases made in certain tax jurisdictions.</p>
                <p className='mt-2'>By completing your purchase you agree to these <span className='cursor-pointer hover:underline text-accent-300'>Terms of Service.</span></p>
            </div>
            {/* TODO: list items */}
            <div className='w-fit mx-auto mt-10'>
                <BaseButton text="Checkout" onClick={finishOrder} />
            </div>
        </div>
    )
}

export default CheckoutSummary