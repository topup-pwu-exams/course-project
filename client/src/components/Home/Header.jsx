import React from 'react'
import BaseButton from '../common/BaseButton/BaseButton'
import banner_image from '../../assets/Images/banner_image.svg'

export default function Header() {
    return (
        <>
            <div className='w-full flex flex-row bg-purple-100'>
                <div>
                    <div className='mt-20 mb-10'>
                    <h1 className='font-bold text-gray-700' style={{margin: '0 auto', fontSize: 36}}>Learn at your <span className='text-purple-500'> own </span> pace</h1>
                    <p>Study any topic, improve your skills - anytime, anywhere. Thousands of courses on demand!</p>
                    </div>
                    <BaseButton text='Get Started'/>
                </div>
                <div>
                    <img src={banner_image} alt="Course App" />
                </div>
            </div>
        </>
    )
}
