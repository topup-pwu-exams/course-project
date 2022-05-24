import React from 'react'
import Review from './Review'

const CourseOverviewReviews = ({ reviews }) => {
    return (
        <div className='mx-10'>
            <div className='mx-10 mt-8'>
                <h2 className='mb-4 lg:text-left'>Reviews</h2>
                {reviews.length && reviews.map(review => {
                    console.log(review)
                    return (
                        <Review
                            key={review._id}
                            createdAt={review._createdAt}
                            author={review.postedBy}
                            rating={review.rating}
                            review={review.review}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default CourseOverviewReviews