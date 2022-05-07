import React from 'react';
import { Link, NavLink } from "react-router-dom";
import logo from '../assets/Images/logo_darker.png';
import { useAuth0 } from "@auth0/auth0-react";

const Navigation = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();

    const pages = [
        { name: 'Explore', url: 'explore', id: 1 },
        { name: 'About', url: 'about', id: 2 },
        { name: 'Blog Posts', url: 'blog', id: 3 },
        { name: 'Contact Us', url: 'contact', id: 4 },
    ]

    const activeLink = 'text-purple-500'
    const profileActive = 'border-purple-500 rounded-full border-2'

    return (
        <header className='flex justify-between p-5 max-w-7xl mx-auto'>
            <div className='flex items-center space-x-5'>
                <Link to='/'>
                    <img src={logo} alt="logo" className='w-16 object-contain cursor-pointer' />
                </Link>

                <div className='hidden md:inline-flex items-center space-x-5 text-gray-500'>
                    {pages.map(page => {
                        return (
                            <NavLink to={page.url} key={page.id} className={({ isActive }) => isActive ? activeLink : ''}>
                                <h3 className='hover:text-purple-500 hover:cursor-pointer'>{page.name}</h3>
                            </NavLink>
                        )
                    })}
                </div>
            </div>

            <div className='flex items-center space-x-8 border-l-2 border-gray-300 m-2 text-gray-500'>
                
                {!isAuthenticated && (
                    <h3 onClick={() => loginWithRedirect()} className='ml-8 hover:border-purple-500 hover:rounded-full border-2 border-transparent px-3 py-1 hover:cursor-pointer'>Log in</h3>
                )}
                {isAuthenticated && (
                    <>
                        <NavLink to='/profile' className={({ isActive }) => isActive ? profileActive : 'rounded-full border-2'} style={{marginLeft: '2rem'}}>
                            {/* <h3 className='rounded-full border-2 border-purple-500 px-3 py-1 hover:text-white hover:bg-purple-500 hover:border-transparent hover:cursor-pointer'>Profile</h3> */}
                            {/* <div className='rounded-full border-2 hover:border-purple-500'> */}
                                <img src={user.picture} alt={user.name} className='h-9 w-auto object-fill rounded-full'/>
                            {/* </div> */}
                        </NavLink>
                        <h3 onClick={() => logout({ returnTo: window.location.origin })} className='ml-8 hover:border-purple-500 hover:rounded-full border-2 border-transparent px-3 py-1 hover:cursor-pointer'>Log out</h3>
                    </>
                )}
            </div>
        </header>
    )
}

export default Navigation