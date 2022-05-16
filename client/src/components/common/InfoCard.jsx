import React from 'react'
import { DesktopComputerIcon } from '@heroicons/react/outline'

function InfoCard() {
  return (
    <div className='border-2 border-white shadow-md w-1/4 rounded-2xl'>
        <div className='p-5'>
          <div className='flex flex-col justify-center items-center text-center my-10 mx-5'>
            <DesktopComputerIcon className='w-14'/>
            <p className='text-md font-bold mt-5'>14 online courses</p>
            <p className=''>Explore a variety of fresh courses</p>
          </div>
        </div>
    </div>
  )
}

export default InfoCard