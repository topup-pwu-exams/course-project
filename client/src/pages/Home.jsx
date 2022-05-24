import React from 'react'
import BlogSection from '../components/Home/BlogSection'
import CategoriesSection from '../components/Home/CategoriesSection'
import CourseSection from '../components/Home/CourseSection'
import Header from '../components/Home/Header'
import InfoSection from '../components/Home/InfoSection'
import InstructorSection from '../components/Home/InstructorSection'

const Home = () => {
  return (
    <div>
      <Header/>
      <InfoSection/>
      <CategoriesSection/>
      <CourseSection/>
      <InstructorSection/>
      <BlogSection/>
    </div>
  )
}

export default Home