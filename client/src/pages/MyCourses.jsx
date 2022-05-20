import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const MyCourses = () => {
    return (
        <div className='bg-gray-400 custom-layout'>
            <h1>MyCourses Page</h1>
            <div className='flex space-x-10 mt-10'>
                <Link to='owned'>
                    <p>Owned courses</p>
                </Link>

                <Link to='liked'>
                    <p>Liked courses</p>
                </Link>
            </div>

            {/* Rendering children routes */}
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default MyCourses