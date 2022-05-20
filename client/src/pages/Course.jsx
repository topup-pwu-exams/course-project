import { ChevronRightIcon } from '@heroicons/react/outline';
import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import CourseOverviewHeader from '../components/CourseOverview/CourseOverviewHeader';
import CourseOverviewCard from '../components/CourseOverview/CourseOverviewCard';
import capitalize from '../utils/capitalize';
import { client } from '../utils/client';
import { getCourse } from '../api/queries/course';
import CourseOverviewLearn from '../components/CourseOverview/CourseOverviewLearn';
import CourseOverviewReviews from '../components/CourseOverview/CourseOverviewReviews';

const Course = () => {
    const { slug } = useParams();
    const [state, setState] = useState({ course: [], error: '', loading: true });

    const { loading, error, course } = state;
    const query = getCourse(slug)

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
                <div className=' bgcourse custom-layout'>
                    <div className='font-medium p-color flex'>
                        <NavLink to={-1} className='hover:text-black'>{capitalize(course.category.title)} </NavLink>
                        <ChevronRightIcon className='w-5 mx-1 text-white' />
                        <NavLink to='/' className='hover:text-black'>{capitalize(course.title)} </NavLink>
                        
                    </div>

                    {/* <div className='grid grid-cols-3 sm:grid-cols-1 gap-3'> */}
                    <div className='flex flex-row justify-between'>
                        <div>

                        <div className='mx-10'>
                        <CourseOverviewHeader
                            title={course.title}
                            description={course.description}
                            authorFirstName={course.author.firstName}
                            authorLastName={course.author.lastName}
                            createdAt={course._createdAt}
                            updatedAt={course._updatedAt}
                            likes={course.likes}
                            //tags={course.tags}
                            />
                        </div>
                        <CourseOverviewLearn
                            title={course.title}
                            description={course.description}
                            authorFirstName={course.author.firstName}
                        />
                        <div>
                            <CourseOverviewReviews
                                title={course.title}
                            />
                        </div>
                        </div>
                        <div>
                        <CourseOverviewCard
                            title={course.title}
                            image={course.mainImage}
                            authorFirstName={course.author.firstName}
                            authorLastName={course.author.lastName}
                            createdAt={course._createdAt}
                            updatedAt={course._updatedAt}
                            price={course.price}
                            likes={course.likes}
                            id={course._id}
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