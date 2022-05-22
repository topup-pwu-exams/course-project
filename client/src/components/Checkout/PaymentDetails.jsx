import React from 'react'

const PaymentDetails = () => {
    return (
        <div>
            <h4>Payment Details</h4>
            <div className='mt-5'>
                <p>Billing Address:</p>
                <div className='border-2 border-neutral-500 rounded-sm py-4 px-2'>
                    <p>Denmark</p>
                </div>
                <div className='mt-10'>
                    <div className='border-2 border-neutral-500 rounded-sm py-4 px-2 flex flex-col'>
                        <div className='flex justify-between space-x-20'>
                            <p className='font-bold text-md'>Credit Card</p>
                            <p>Image</p>
                        </div>
                        <div className='flex justify-between space-x-20'>
                            <p className='font-bold text-md'>PayPal</p>
                            <p>Image</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentDetails