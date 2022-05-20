import { CheckIcon } from '@heroicons/react/outline'
import React from 'react'

const CourseOverviewLearn = ({title, description, authorFirstName, authorLastName, createdAt, updatedAt, tags}) => {
    return (
        
            <div>
                <div className='border-2 border-black p-3 px-10 mx-10'>
                            <h2 className='mb-4 text-center lg:text-left'>What you'll learn</h2>
                            <ul className=' flex flex-row flex-wrap  gap-4 justify-center lg:justify-between  '>
                                <li className='sm:max-w-xxs lg:max-w-xxs flex'> <span><CheckIcon className='w-6 mr-2' /></span> How to convert text into vectors using CountVectorizer, TF-IDF, word2vec, and GloVe</li>
                                <li className='sm:max-w-xxs lg:max-w-xxs flex'> <span><CheckIcon className='w-6 mr-2' /></span> How to convert text into vectors using CountVectorizer, TF-IDF, word2vec, and GloVe</li>
                                <li className='sm:max-w-xxs lg:max-w-xxs flex'> <span><CheckIcon className='w-6 mr-2' /></span> How to convert text into vectors using CountVectorizer, TF-IDF, word2vec, and GloVe</li>
                                <li className='sm:max-w-xxs lg:max-w-xxs flex'> <span><CheckIcon className='w-6 mr-2' /></span> How to convert text into vectors using CountVectorizer, TF-IDF, word2vec, and GloVe</li>
                                <li className='sm:max-w-xxs lg:max-w-xxs flex'> <span><CheckIcon className='w-6 mr-2' /></span> How to convert text into vectors using CountVectorizer, TF-IDF, word2vec, and GloVe</li>
                                <li className='sm:max-w-xxs lg:max-w-xxs flex'> <span><CheckIcon className='w-6 mr-2' /></span> How to convert text into vectors using CountVectorizer, TF-IDF, word2vec, and GloVe</li>            
                            </ul>
                        </div>
                <div className='mx-10 mt-8'>
                    <h2 className='mb-4 lg:text-left'>Course content</h2>
                    <div className='flex flex-row mb-4'>
                        <p className='mr-2'>22 chapters</p> <span className='mr-2'>-</span>
                        <p className='mr-2'>122 lectures</p> <span className='mr-2'>-</span>
                        <p className='mr-2'>22h length</p> 
                    </div>
                    <div>
                        <p className='border-2 border-black py-4 px-8 font-extrabold'>Introduction</p>
                        <p className='border-2 border-black py-4 px-8 font-extrabold'>Introduction</p>
                        <p className='border-2 border-black py-4 px-8 font-extrabold'>Introduction</p>
                        <p className='border-2 border-black py-4 px-8 font-extrabold'>Introduction</p>
                    </div>
                </div>
                <div className='mx-10 mt-8'>
                    <h2 className='mb-4 lg:text-left'>Description</h2>
                    <div className='flex flex-row mb-4'>
                        <p className='mr-2'>Description that breaks card on right side if there is too much text</p> 
                    </div>
                </div>
                <div className='mx-10 mt-8'>
                    <h2 className='mb-4 lg:text-left'>Similar courses</h2>
                    <div className='flex flex-row mb-4'>
                        <p className='mr-2'>Fetch rest of the courses</p> 
                    </div>
                </div>
                
            </div>
    )
}

export default CourseOverviewLearn