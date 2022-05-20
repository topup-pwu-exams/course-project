import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const MyCourses = () => {
    const tabActive = 'text-purple-500 font-bold border-b-4 border-purple-500'

    return (
        <div className='bg-gray-200 custom-layout'>
            <h1>My Courses</h1>
            <div className='flex space-x-10 my-10'>
                <NavLink to='owned' className={({ isActive }) => isActive ? tabActive : 'hover:text-purple-500'}>
                    <p className=''>Owned courses</p>
                </NavLink>

                <NavLink to='liked' className={({ isActive }) => isActive ? tabActive : 'hover:text-purple-500'}>
                    <p className=''>Liked courses</p>
                </NavLink>
            </div>

            {/* Rendering children routes */}
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default MyCourses