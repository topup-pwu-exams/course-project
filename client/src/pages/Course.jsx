import { ChevronRightIcon } from '@heroicons/react/outline';
import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import CourseOverviewHeader from '../components/CourseOverview/CourseOverviewHeader';
import CourseOverviewCard from '../components/CourseOverview/CourseOverviewCard';
import capitalize from '../utils/capitalize';
import { client } from '../utils/client';
import { getCourse } from '../api/queries/course';
import CourseOverviewLearn from '../components/CourseOverview/CourseOverviewLearn';
import CourseOverviewReviews from '../components/CourseOverview/CourseOverviewReviews';
import { Store } from '../utils/Store';
import { toast, Zoom } from 'react-toastify';
import ClipLoader from "react-spinners/ClipLoader";

const Course = () => {
    const { slug } = useParams();
    const [state, setState] = useState({ course: [], error: '', loading: true });
    const { state: { cart }, dispatch } = useContext(Store);
    const navigate = useNavigate()

    const { loading, error, course } = state;
    const query = getCourse(slug)
    
    const existItem = cart.cartItems.find((x) => x._id === course._id);

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
    
    const addToCartHandler = () => {
        console.log(course._id);
        if (existItem) {
            // toast("Item already added!");
            navigate('/cart');
            return
        } else {
            dispatch({
                type: 'CART_ADD_ITEM',
                payload: {
                    _id: course._id,
                    title: course.title,
                    category: course.category.title,
                    slug: course.slug.current,
                    price: course.price,
                    mainImage: course.mainImage,
                    lessons: course.lessons,
                    duration: course.courseDuration,
                    author: course.author,
                    description: course.description
                },
            });
            toast("Added to cart!", {

                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                transition: Zoom,
                closeOnClick: true,
                pauseOnHover: false,
                progress: undefined,
            });
            
            
        }
    }

    return (
        <div>
            {loading ? ( 
            <div className='flex flex-col '>
            <h2>loading</h2>
            <ClipLoader 
            color={"#FFD803"} 
            loading={loading}
            timeout={3000}
            position = 'fixed'
            center
            size={50} />
            </div>
            ) 
            : 
            error 
            
            ?
            (<div>error...</div>) 
            :
            (
                <div className='bgcourse custom-layout'>
                    <div className='font-medium flex'>
                        <NavLink to={'/'} className='text-accent-500 hover:text-white'>{capitalize(course?.category.title)} </NavLink>
                        <ChevronRightIcon className='w-5 mx-1 text-white' />
                        <span className='text-white'> {capitalize(course?.title)}</span>
                    </div>

                    {/* <div className='grid grid-cols-3 sm:grid-cols-1 gap-3'> */}
                    <div className='flex flex-row justify-between'>
                        <div className='w-5/6'>
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

                            <CourseOverviewReviews title={course.title} />
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
                                duration={course.courseDuration}
                                id={course._id}
                                onClick={addToCartHandler}
                                buttonText={existItem ? 'Go to cart' : 'Add to cart'}
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