import React from 'react'

function BaseButton({text}) {
  return (
    <div className='bg-accent-500 rounded-full px-8 py-2 text-neutral w-full text-center h-max hover:cursor-pointer hover:bg-accent-300'>
      {text}
    </div>
  )
}

export default BaseButton