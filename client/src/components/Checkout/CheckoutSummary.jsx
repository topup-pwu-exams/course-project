import React from 'react'
import BaseButton from '../common/BaseButton/BaseButton'

const CheckoutSummary = () => {
    const finishOrder = () => {
        console.log('object');
    }

    return (
        <div className='border-2 border-primary-500 p-5 max-w-md md:mt-3 mt-10 flex flex-col justify-between h-fit '>
            <h2 className='mb-2'>Summary</h2>
            <div className='flex flex-col'>
                <div className='flex justify-between space-x-10'>
                    <div>Item 1 price:</div>
                    <div>$13.99</div>
                </div>
                <div className='flex justify-between space-x-10'>
                    <div>Item 2 price:</div>
                    <div>$11.99</div>
                </div>
            </div>
            <hr className='my-5 border border-gray-300' />
            <div className='flex justify-between space-x-10'>
                <h4>Total:</h4>
                <p className='text-2xl font-bold'>$12.99</p>
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