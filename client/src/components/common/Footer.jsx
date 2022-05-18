import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/Images/logo.png';


function Footer() {
  return (
    
    <footer class="p-4 pbg-color rounded-lg shadow md:px-6 md:py-8 ">
    <div class="sm:flex sm:items-center sm:justify-between">
        <a href={logo} class="flex items-center mb-4 sm:mb-0">
            <Link to='/'>
                    <img src={logo} alt="logo" className='w-16 object-contain cursor-pointer' />
                </Link>
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Lrner</span>
        </a>
        <ul class="flex flex-wrap items-center mb-6 text-sm text-white sm:mb-0 dark:text-white">
            <li>
                <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
            </li>
            <li>
                <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
            </li>
            <li>
                <a href="#" class="mr-4 hover:underline md:mr-6 ">Licensing</a>
            </li>
            <li>
                <a href="#" class="hover:underline">Contact</a>
            </li>
        </ul>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-white lg:my-8" />
    <span class="block text-sm text-white sm:text-center dark:text-white">© 2022 <a href="/" class="hover:underline">Lrner</a>. All Rights Reserved.
    </span>
</footer>
        
  )
}

export default Footer