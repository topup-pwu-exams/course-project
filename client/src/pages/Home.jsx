import React from 'react'
import CategoriesSection from '../components/Home/CategoriesSection'
import CourseSection from '../components/Home/CourseSection'
import Header from '../components/Home/Header'
import Footer from '../components/common/Footer/Footer'
import InfoSection from '../components/Home/InfoSection'
import InstructorSection from '../components/Home/InstructorSection'
import BlogSection from '../components/Home/BlogSection'

const Home = () => {
  return (
    <div className=''>
      <Header/>
      <InfoSection/>
      <CategoriesSection/>
      <CourseSection/>
      <InstructorSection/>
      <BlogSection/>
      <Footer/>
    </div>
  )
}

export default Home