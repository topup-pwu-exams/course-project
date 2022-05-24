import React from 'react'
import { Link } from 'react-router-dom'



const Article = () => {
  return (
    <div>
     <div className='bg-black min-h-12 max-h-12 flex flex-row gap-5 justify-around px-20'>
                    <Link to=':Development' className='text-white my-auto hover:underline font-semibold'>
                        Development 
                    </Link>
                    <Link to=':Development' className='text-white my-auto hover:underline font-semibold'>
                        Development 
                    </Link>
                    <Link to=':Development' className='text-white my-auto hover:underline font-semibold'>
                        Development 
                    </Link>
                    <Link to=':Development' className='text-white my-auto hover:underline font-semibold'>
                        Development 
                    </Link>
                    <Link to=':Development' className='text-white my-auto hover:underline font-semibold'>
                        Development 
                    </Link>
                    <Link to=':Development' className='text-white my-auto hover:underline font-semibold'>
                        Development 
                    </Link>
                    <Link to=':Development' className='text-white my-auto hover:underline font-semibold'>
                        Development 
                    </Link>
                </div>
      
    </div>
  )
}

export default Article