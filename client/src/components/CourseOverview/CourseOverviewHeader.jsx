import dayjs from 'dayjs'
import React from 'react'

const CourseOverviewHeader = ({title, description, authorFirstName, authorLastName, createdAt, updatedAt, tags}) => {
    return (
        <div>
            <div className='mt-10'>
                <h1 className='mb-3'>{title}</h1>
                <p>{description}</p>
                <p>Created by: {authorFirstName} {authorLastName}</p>
                <p>Created at: {dayjs(createdAt).format('MMM D, YYYY')}</p>
                <p>Last updated at: {dayjs(updatedAt).format('MMM D, YYYY')}</p>
                <p>Tags: { }</p>
            </div>
        </div>
    )
}

export default CourseOverviewHeader