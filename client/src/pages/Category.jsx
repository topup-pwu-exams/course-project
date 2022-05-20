import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import capitalize from '../utils/capitalize'
import { ChevronRightIcon } from '@heroicons/react/outline'
import { client } from '../utils/client';
import CourseCard from '../components/CourseCard';
import { getCategory } from '../api/queries/categories';

const Category = () => {
    const { slug } = useParams();

    const [state, setState] = useState({ courses: [], error: '', loading: true });

    const { loading, error, courses } = state;
    // const query = `*[_type == "course" && "${slug}" in category->slug.current]{
    const query = getCategory(slug)

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const courses = await client.fetch(query); // TODO: change to small portion of courses, like "TOP" courses
                console.log(courses)

                setState({ courses, loading: false });
            } catch (err) {
                setState({ loading: false, error: err.message });
                console.log(err);
            }
        };
        fetchCourses();
    }, []);

    return (
        <div className='custom-layout'>
            {loading ? (<div>Loading ...</div>) : error ? (<div>error...</div>) : (
                <div>

                    <div className='font-medium text-gray-400 flex'>
                        <NavLink to={-1} className='hover:text-black'>Categories </NavLink>
                        <ChevronRightIcon className='w-5 mx-1' />
                        <span className='text-black'> {capitalize(slug)}</span>
                    </div>

                    {/* Intro */}
                    <div className='mt-10'>
                        <h1>{capitalize(slug)} Courses</h1>
                        {/* TODO: Add description */}
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At velit pariatur vero provident cupiditate, voluptas quaerat doloribus aliquam dolore optio harum ut illo, consequatur ab! Sapiente tempore, molestias ipsam, saepe, et quos ea ratione odio eum reprehenderit optio ex officiis corrupti beatae modi sunt excepturi.</p>
                    </div>

                    {/* Featured */}
                    <div className='mt-10'>
                        <h2>Featured courses</h2>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 p-2 md:p-6'>
                            {courses && courses.map(course => {
                                // console.log('Course', course);
                                return (
                                    <CourseCard
                                        key={course._id}
                                        title={course.title}
                                        mainImage={course.mainImage}
                                        price={course.price}
                                        author={course.author}
                                        hours='64'
                                        lessons='445'
                                        likes='423'
                                        users='3432'
                                        tags={course.tags}
                                        categories={course.categories}
                                        slug={course.slug.current}
                                    />
                                )
                            })}
                        </div>
                    </div>

                    {/* Other */}
                    <div className='mt-10'>
                        <h2>Courses to get your started</h2>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 p-2 md:p-6'>
                            {courses && courses.map(course => {
                                // console.log('Course', course);
                                return (
                                    <CourseCard
                                        key={course._id}
                                        title={course.title}
                                        mainImage={course.mainImage}
                                        price={course.price}
                                        author={course.author}
                                        hours='64'
                                        lessons='445'
                                        likes='423'
                                        users='3432'
                                        tags={course.tags}
                                        categories={course.categories}
                                        slug={course.slug.current}
                                    />
                                )
                            })}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Category