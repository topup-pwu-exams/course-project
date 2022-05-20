import React from 'react'

function BaseButton({text}) {
  return (
    <div className='bg-yellow-500 rounded-full px-8 py-2 text-navy w-full text-center h-max hover:cursor-pointer hover:bg-yellow-300'>
      {text}
    </div>
  )
}

export default BaseButton