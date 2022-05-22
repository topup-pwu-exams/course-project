import React from 'react'
import { useNavigate } from 'react-router-dom'
import BaseButton from '../common/BaseButton/BaseButton'

const CheckoutBox = () => {
    const navigate = useNavigate()

    const goToCheckout = () => {
        navigate('/checkout')
    }

    return (
        <div className='border-2 border-primary-500 p-5 w-full md:mt-3 mt-10 flex flex-col justify-between h-fit '>
            <div>
                <p className='text-xl'>Total:</p>
                <p className='text-3xl text-accent-500 font-bold'>$12.99</p>
            </div>
            {/* TODO: list items */}
            <div className='w-fit mx-auto mt-10'>
                <BaseButton text="Checkout" onClick={goToCheckout} />
            </div>
        </div>
    )
}

export default CheckoutBox