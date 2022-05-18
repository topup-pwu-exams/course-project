import React, { useEffect, useState } from 'react'
import { client } from '../../utils/client';
import CourseCard from '../common/CourseCard'

function CourseSection() {

    const [state, setState] = useState({ courses: [], error: '', loading: true });

    const { loading, error, courses } = state;
    const query = `*[_type == "course"][0..5]{
        _id,
        title,
        price,
        slug, 
        mainImage,
        author -> {
          firstName,
          lastName,
          avatar,
       },
       tags[]->{
        _id,
        name
        },
        categories[]->{
        _id,
        title,
        }
    }`

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const courses = await client.fetch(query); // TODO: change to small portion of courses, like "TOP" courses
                console.log(courses)

                setState({ courses, loading: false });
            } catch (err) {
                setState({ loading: false, error: err.message });
            }
        };
        fetchCourses();
    }, []);

    // if (loading) {
    //     return <div>Loading ...</div>;
    // }

    return (
        <div className='custom-layout mb-10'>
            {loading ? (<div>Loading ...</div>) : error ? (<div>error...</div>) : (
                <section>
                    <section className='mb-5'>
                        <h2>Explore Courses</h2>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 p-2 md:p-6'>
                            {courses.length && courses.map(course => {
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
                                    />
                                )
                            })}
                        </div>
                    </section>

                    <section>
                        <h2>Top 10 Latest Courses</h2>
                        <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 p-2 md:p-6'>
                        {courses.length && courses.map(course => {
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
                                    />
                                )
                            })}
                        </div>
                    </section>
                </section>
            )}
        </div>
    )
}

export default CourseSection