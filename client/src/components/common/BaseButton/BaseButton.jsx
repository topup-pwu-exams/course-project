import React from 'react'

function BaseButton({text}) {
  return (
    <div className='bg-purple-500 rounded-full px-8 py-2 text-white w-full text-center h-max hover:cursor-pointer hover:bg-purple-600'>
      {text}
    </div>
  )
}

export default BaseButton