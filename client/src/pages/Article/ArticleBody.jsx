import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ChevronRightIcon } from '@heroicons/react/outline'



export default function ArticleBody(slug) {
    return (
        <div className='custom-layout'>
            <div className='font-medium text-gray-400 flex mb-5'>
                        <NavLink to={-1} className='hover:text-black'>Categories </NavLink>
                        <ChevronRightIcon className='w-5 mx-1' />
                        <span className='text-black'> C# vs. C++: Which One Is Better for Your Project?</span>
                    </div>
            <div>tag, title, author, share article</div>
            <div className='flex flex-col text-left max-w-3xl mx-auto'>
                <h3 className='text-base'>Development</h3>
                <h3 className='text-5xl'>C# vs. C++: Which One Is Better for Your Project?</h3>
            </div>
            <div>body and picture</div>
            <div>about the author</div>
            <div>relevant blogs/courses</div>
        </div>
    )
}
