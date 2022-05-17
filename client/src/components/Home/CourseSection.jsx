import React from 'react'
import CourseCard from '../common/CourseCard'

function CourseSection() {
    return (
        <div className='custom-layout mb-10'>
            <section className='mb-5'>
                <h2>Explore Courses</h2>
                <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 p-2 md:p-6'>
                    <CourseCard />
                    <CourseCard />
                    <CourseCard />
                    <CourseCard />
                </div>
            </section>
            
            <section>
                <h2>Top 10 Latest Courses</h2>
                <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 p-2 md:p-6'>
                    <CourseCard />
                    <CourseCard />
                    <CourseCard />
                </div>
            </section>
        </div>
    )
}

export default CourseSection