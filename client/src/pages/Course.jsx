import { ChevronRightIcon } from '@heroicons/react/outline';
import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import capitalize from '../utils/capitalize';
import { client } from '../utils/client';
import dayjs from 'dayjs'

const Course = () => {
    const { slug } = useParams();
    const [state, setState] = useState({ course: [], error: '', loading: true });

    const { loading, error, course } = state;
    const query = `*[_type == "course" && slug.current == "${slug}" ]{
        _id,
        title,
        price,
        slug, 
        mainImage,
        description,
        _updatedAt,
        _createdAt,
        author -> {
          firstName,
          lastName,
          avatar,
       },
       tags[]->{
        _id,
        name
        },
        category->{
            title,
            slug
        }
    }`

    useEffect(() => {
        const fetchCourse = async () => {
            try {
                const course = await client.fetch(query);
                console.log('Course', course)

                setState({ course: course[0], loading: false });
            } catch (err) {
                setState({ loading: false, error: err.message });
                console.log(err);
            }
        };
        fetchCourse();
    }, []);

    return (
        <div>
            {loading ? (<div>Loading ...</div>) : error ? (<div>error...</div>) : (
                <div className='bg-gray-400 custom-layout'>
                {/* {course && */}
                        <div className='font-medium text-white flex'>
                            <NavLink to={-1} className='hover:text-black'> </NavLink>
                            <ChevronRightIcon className='w-5 mx-1' />
                            <span className='text-black'> {course.title}</span>
                        </div>
                    {/* Details */}
                    <div className='mt-10'>
                        <h1 className='mb-3'>{course.title}</h1>
                        <p>{course?.description}</p>
                        <p>Created by: {course.author.firstName} {course.author.lastName}</p>
                        <p>Created at: {dayjs(course._createdAt).format('MMM D, YYYY')}</p> 
                        <p>Last updated at: {dayjs(course._updatedAt).format('MMM D, YYYY')}</p> 
                        <p>Tags: {}</p>
                    </div>
            {/* } */}
                </div>
            )}
        </div>
    )
}
export default Course