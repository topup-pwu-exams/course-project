import React, { useContext } from 'react'
import { HeartIcon } from '@heroicons/react/outline'
import { HeartIcon as HeartIconSolid } from '@heroicons/react/solid'
import { VideoCameraIcon } from '@heroicons/react/outline'
import { DocumentDuplicateIcon } from '@heroicons/react/outline'
import { DownloadIcon } from '@heroicons/react/outline'
import { FolderRemoveIcon } from '@heroicons/react/outline'
import { AcademicCapIcon } from '@heroicons/react/outline'
import { ShoppingCartIcon } from '@heroicons/react/outline'
import { NavLink } from 'react-router-dom'
import dayjs from 'dayjs'
import capitalize from '../../utils/capitalize'
import { client, urlFor } from '../../utils/client'
import BaseButton from '../common/BaseButton/BaseButton'
import { FaTwitter } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { Store } from '../../utils/Store'
import { v4 as uuidv4 } from 'uuid';

const CourseOverviewCard = ({ title, price, likes, image, id, onClick, authorFirstName, authorLastName, createdAt, updatedAt }) => {
  const { state, dispatch } = useContext(Store);

  const { userInfo } = state;

  const alreadyLiked = !!(likes?.filter((like) => like?.postedBy?._id === userInfo?.sub))?.length;
  console.log(alreadyLiked);

  const likeCourse = (id) => {
    console.log(id);

    if (!alreadyLiked) {
      client.patch(id).setIfMissing({ likes: [] }).insert('after', 'likes[-1]', [{
        _key: uuidv4(),
        userId: userInfo?.sub,
        postedBy: {
          _type: 'postedBy',
          _ref: userInfo?.sub,
        },
      }])
        .commit()
        .then(() => {
          window.location.reload();
        });
    }
  };

  const unLikeCourse = () => {
    client.delete(id).then(() => {
      window.location.reload();
    });
  }

  return (
    <div className='bg-white h-max rounded-md '>
      <img src={urlFor(image).width(350).url()} alt="Post img" className='rounded-t-md object-cover w-full h-60 group-hover:scale-105 transition-transform duration-200 ease-in-out' />
      <div className='p-5'>

        <h3>{title}</h3>
        <h1 className='text-accent-500 mt-7'>{price}$</h1>
        <div className='flex mt-5 justify-center space-x-2'>
          {/* TODO: add icon */}
          <BaseButton text='Add to cart' onClick={onClick} />
          {alreadyLiked ? <HeartIconSolid className='w-11 mb-5 text-accent-500 cursor-pointer' onClick={(e) => { e.preventDefault(); unLikeCourse(id) }} /> : <HeartIcon className='w-11 mb-5 hover:text-accent-500 cursor-pointer' onClick={(e) => { e.preventDefault(); likeCourse(id) }} />}
        </div>
        <p className='text-center text-sm text-gray-500'>30 day money back guarantee </p>
        <div className='mt-4'>
          <h4>In this course you will get:</h4>
          <ul className='mt-4'>
            <li className='flex mb-2'> <span><VideoCameraIcon className='w-6 mr-2' /></span> 45 hours of content</li>
            <li className='flex mb-2'> <span><DocumentDuplicateIcon className='w-6 mr-2' /></span> Full access to course materials</li>
            <li className='flex mb-2'> <span><DownloadIcon className='w-6 mr-2' /></span> Downloadable resources</li>
            <li className='flex mb-2'> <span><FolderRemoveIcon className='w-6 mr-2' /></span> Lifetime access</li>
            <li className='flex mb-2'> <span><AcademicCapIcon className='w-6 mr-2' /></span> Certificate of completion</li>
          </ul>
        </div>
        <hr className='my-5 border border-gray-400' />
        <div className='mt-4'>
          <h4 >Share this course:</h4>
          <div className='flex justify-around mt-5 group'>
            <div className='rounded-full p-4 w-max bg-white border-2 border-gray-400 hover:scale-90 transition ease-in-out cursor-pointer'><FaTwitter className='text-xl' /></div>
            <div className='rounded-full p-4 w-max bg-white border-2 border-gray-400 hover:scale-90 transition ease-in-out cursor-pointer'><FaEnvelope className='text-xl' /></div>
            <div className='rounded-full p-4 w-max bg-white border-2 border-gray-400 hover:scale-90 transition ease-in-out cursor-pointer'><FaExternalLinkAlt className='text-xl' /></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseOverviewCard