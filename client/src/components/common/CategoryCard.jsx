import { DesktopComputerIcon } from '@heroicons/react/outline'
import React from 'react'

const CategoryCard = ({title}) => {
  return (
    <div className='border-2 border-white shadow-md w-72 rounded-2xl'>
        <div className='p-10 '>
            <div className='flex flex-col justify-center items-center text-center my-5 mx-5'>
                <DesktopComputerIcon className='w-14'/>
                <p className='text-md font-medium mt-5'>{title}</p>
            </div>
        </div>
    </div>
  )
}

export default CategoryCard