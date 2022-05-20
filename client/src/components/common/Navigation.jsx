import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from '../../assets/Images/logo_darker.png';
import { HeartIcon, LoginIcon, LogoutIcon } from '@heroicons/react/outline'
import jsCookie from 'js-cookie'
import { Store } from '../../utils/Store';

const Navigation = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useContext(Store);

    const { userInfo } = state;

    const pages = [
        // { name: 'Explore', url: 'explore', id: 1 },
        { name: 'About', url: 'about', id: 2 },
        { name: 'Blog Posts', url: 'blog', id: 3 },
        { name: 'Contact Us', url: 'contact', id: 4 },
    ]

    const activeLink = 'text-navy-500'
    const profileActive = 'border-navy-500 rounded-full border-2'

    const logoutClickHandler = () => {
        dispatch({ type: 'USER_LOGOUT' });
        jsCookie.remove('userInfo');
        jsCookie.remove('cartItems');
        navigate('/');
    };

    return (
        <header className='custom-layout flex justify-between bg-pale-500 border-b-2 border-navy-500 '>
            <div className='flex items-center space-x-5'>
                <Link to='/'>
                    <img src={logo} alt="logo" className='w-16 object-contain cursor-pointer' />
                </Link>

                <div className='hidden md:inline-flex items-center space-x-5 text-gray-500'>
                    {pages.map(page => {
                        return (
                            <NavLink to={page.url} key={page.id} className={({ isActive }) => isActive ? activeLink : ''}>
                                <p className='hover:text-navy-500 hover:cursor-pointer'>{page.name}</p>
                            </NavLink>
                        )
                    })}
                </div>
            </div>

            <div className='flex items-center justify-around border-l-2 border-gray-300 m-2 text-gray-500'>

                {!userInfo ?
                    <NavLink to='/login'>
                        <div className='ml-8 flex flex-row hover:border-aqua-500 rounded-full border-2 border-transparent bg-navy-500 text-white hover:text-navy-500 hover:bg-white px-3 py-1 hover:cursor-pointer'>
                            <p >Log in </p> <LoginIcon className='h-5 w-auto ml-2 mt-0.5' />
                        </div>
                    </NavLink> :
                    <>
                        <NavLink to='/my-courses' className='mx-2'>
                            <HeartIcon className='w-10 hover:text-navy-500 cursor-pointer mx-4 ' />
                        </NavLink>

                        <NavLink to='/profile' className={({ isActive }) => isActive ? profileActive : 'rounded-full border-2 hover:border-navy-500'}>
                            <img src={userInfo.picture} alt={userInfo.given_name} className='h-9 w-auto object-fill rounded-full' />
                        </NavLink>

                        <div onClick={logoutClickHandler} className='ml-8 flex flex-row hover:border-transparent rounded-full border-2 border-navy-500 bg-white text-navy-500 hover:text-white hover:bg-navy-500 px-3 py-1 hover:cursor-pointer'>
                            <p >Log out </p> <LogoutIcon className='h-5 w-auto ml-2 mt-0.5' />
                        </div>
                    </>
                }
            </div>
        </header>
    )
}

export default Navigation