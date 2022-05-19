import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/Images/logo.png';


function Footer() {
  return (
    
    <footer className="p-4 pbg-color rounded-lg shadow md:px-6 md:py-8 ">
    <div className="sm:flex sm:items-center sm:justify-between">
        
            <Link to='/' className='flex flex-row'>
                    <img src={logo} alt="logo" className='w-16 object-contain cursor-pointer' />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Lrner</span>
            </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm text-white sm:mb-0 dark:text-white">
            <li>
            <Link to='/' href="#" className="mr-4 hover:underline md:mr-6 ">
                About
            </Link>
            </li>
            <li> <Link to='/' className="mr-4 hover:underline md:mr-6">
                Privacy Policy
                </Link>
            </li>
            <li>  <Link to='/' className="mr-4 hover:underline md:mr-6 ">
                     Licensing
                </Link>
            </li>
            <li> <Link to='/' className="hover:underline"> 
                 Contact
                </Link>
            </li>
        </ul>
    </div>
    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-white lg:my-8" />
    <span className="block text-sm text-white sm:text-center dark:text-white">© 2022 <a href="/" className="hover:underline">Lrner</a>. All Rights Reserved.
    </span>
</footer>
        
  )
}

export default Footer