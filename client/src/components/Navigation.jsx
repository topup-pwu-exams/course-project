import React from 'react';
import { Link, NavLink } from "react-router-dom";
import logo from '../assets/Images/logo_darker.png';

const Navigation = () => {
    const pages = [
        { name: 'Explore', url: 'explore', id: 1 },
        { name: 'About', url: 'about', id: 2 },
        { name: 'Blog Posts', url: 'blog', id: 3 },
        { name: 'Contact Us', url: 'contact', id: 4 },
    ]

    const isActiveStyle = 'text-purple-500' 

    return (
        <header className='flex justify-between p-5 max-w-7xl mx-auto'>
            <div className='flex items-center space-x-5'>
                <Link to='/'>
                    <img src={logo} alt="logo" className='w-16 object-contain cursor-pointer' />
                </Link>

                <div className='hidden md:inline-flex items-center space-x-5 text-gray-500'>
                    {pages.map(page => {
                        return (
                            <NavLink to={page.url} key={page.id} className={({isActive}) => isActive ? isActiveStyle : ''}>
                                <h3 className='hover:text-purple-500 hover:cursor-pointer'>{page.name}</h3>
                            </NavLink>
                        )
                    })}
                </div>
            </div>

            <div className='flex items-center space-x-8 border-l-2 border-gray-300 m-2 text-gray-500'>
                <h3 className='ml-8 hover:border-purple-500 hover:rounded-full border-2 border-transparent px-3 py-1 hover:cursor-pointer'>Log in</h3>
                <h3 className='border px-4 py-1 rounded-full text-white bg-purple-500 hover:bg-purple-600 hover:cursor-pointer'>Sign up</h3>
            </div>
        </header>
    )
}

export default Navigation