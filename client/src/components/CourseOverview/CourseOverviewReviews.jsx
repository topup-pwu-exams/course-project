import { CheckIcon } from '@heroicons/react/outline'
import React from 'react'

const CourseOverviewReviews = ({title, description, authorFirstName, authorLastName, createdAt, updatedAt, tags}) => {
    return (
        
            <div>
                <div className='mx-10 mt-8'>
                    <h2 className='mb-4 lg:text-left'>Reviews</h2>
                    <div className='flex flex-row mb-4'>
                        <p className='mr-2'>Description that breaks card on right side if there is too much text</p> 
                    </div>
                </div>
                
            </div>
    )
}

export default CourseOverviewReviews