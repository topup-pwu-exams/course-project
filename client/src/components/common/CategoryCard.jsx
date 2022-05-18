import { DesktopComputerIcon } from '@heroicons/react/outline'
import React from 'react'

const CategoryCard = ({ title }) => {
  return (
    <div className='content-around shadow-lg w-56 h-64 rounded-2xl bg-purple-50 p-5 flex flex-col justify-center items-center text-center my-5 mx-2 hover:cursor-pointer hover:scale-110 transition-transform duration-200 ease-in-out hover:bg-white' >
      <DesktopComputerIcon className='w-14 font-thin' />
      <p className='text-md font-normal mt-5'>{title}</p>
    </div>
  )
}

export default CategoryCard