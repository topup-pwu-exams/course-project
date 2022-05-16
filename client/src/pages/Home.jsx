import React from 'react'
import CategoriesSection from '../components/Home/CategoriesSection'
import CourseSection from '../components/Home/CourseSection'
import Header from '../components/Home/Header'
import InfoSection from '../components/Home/InfoSection'
import InstructorSection from '../components/Home/InstructorSection'

const Home = () => {
  return (
    <div className=''>
      <Header/>
      <InfoSection/>
      <CategoriesSection/>
      <CourseSection/>
      <InstructorSection/>
    </div>
  )
}

export default Home