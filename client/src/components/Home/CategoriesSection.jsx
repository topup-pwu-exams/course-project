import React from 'react'
import CategoryCard from '../common/CategoryCard'

function CategoriesSection() {
  return (
    <div className='custom-layout mb-10'>
        <h2 className=''>Categories</h2>
        <div className='flex justify-center items-center space-x-10 mt-5'>
            <CategoryCard/>
            <CategoryCard/>
            <CategoryCard/>
            <CategoryCard/>
        </div>
    </div>
  )
}

export default CategoriesSection