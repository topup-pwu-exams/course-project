import React from 'react'
import BlogHeader from './Blog/BlogHeader'
import BlogArticles from '../pages/Blog/BlogArticles'


const Blog = () => {
  return (
    <div>
      <BlogHeader />
      <BlogArticles blogsection="Development articles" />
      <BlogArticles blogsection="IT &amp; software"/>
      <BlogArticles blogsection="Data Science"/>
      <BlogArticles blogsection="Business"/>
      <BlogArticles blogsection="Marketing"/>
      <BlogArticles blogsection="Design"/>
    </div>
  )
}

export default Blog