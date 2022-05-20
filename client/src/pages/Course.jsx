import { ChevronRightIcon } from '@heroicons/react/outline';
import React, { useEffect, useState } from 'react';
import { Link, NavLink, useParams } from 'react-router-dom';
import CourseOverviewHeader from '../components/CourseOverview/CourseOverviewHeader';
import CourseOverviewCard from '../components/CourseOverview/CourseOverviewCard';
import capitalize from '../utils/capitalize';
import { client } from '../utils/client';

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
                    <div className='font-medium p-color flex'>
                        <NavLink to={-1} className='hover:text-black'>{capitalize(course.category.title)} </NavLink>
                        <ChevronRightIcon className='w-5 mx-1 text-white' />
                        <span className='text-black'> {course.title}</span>
                    </div>

                    {/* <div className='grid grid-cols-3 sm:grid-cols-1 gap-3'> */}
                    <div className='flex flex-row justify-between'>
                        <div className='mx-10'>
                        <CourseOverviewHeader
                            title={course.title}
                            description={course.description}
                            authorFirstName={course.author.firstName}
                            authorLastName={course.author.lastName}
                            createdAt={course._createdAt}
                            updatedAt={course._updatedAt}
                            //tags={course.tags}
                            />
                        </div>
                        <div>
                        <CourseOverviewCard
                            title={course.title}
                            image={course.mainImage}
                            authorFirstName={course.author.firstName}
                            authorLastName={course.author.lastName}
                            createdAt={course._createdAt}
                            updatedAt={course._updatedAt}
                            price={'123'}
                            //tags={course.tags}
                            />
                            </div>
                    </div>
                </div>
            )}
        </div>
    )
}
export default Course