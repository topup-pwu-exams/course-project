import React, { useEffect, useState } from 'react'
import BlogPreview from '../common/BlogPreview'
import { client } from '../../utils/client';




function BlogSection() {

  const [state, setState] = useState({ blogs: [], error: '', loading: true });

  const { loading, error, blogs } = state;
  const query = `*[_type == "blog"]{
      _id,
      title,
      slug, 
      mainImage,
      description,
      author -> {
        firstName,
        lastName,
        avatar,
     },

  }`

  useEffect(() => {
      const fetchCourses = async () => {
          try {
              const blogs = await client.fetch(query); // TODO: change to small portion of blogs, like "TOP" courses
              //console.log(blogs)

              setState({ blogs, loading: false });
          } catch (err) {
              setState({ loading: false, error: err.message });
          }
      };
      fetchCourses();
  }, []);

  return (
    <div>
    {loading ? (<div>Loading ...</div>) : error ? (<div>error...</div>) : (
        <section>
            <section className='custom-layout mb-10'>
                <h2>Read our blogs</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 p-2 md:p-6 ">
                    {blogs.length && blogs.map(blog => {
                        // console.log('Course', course);
                        return (
                            <BlogPreview
                                key={blog._id}
                                title={blog.title}
                                mainImage={blog.mainImage}
                                description={(blog.description).slice(0,100)}
                                author={blog.author}
                                date='unknown'
                            />
                        )
                    })}
                </div>
            </section>
            </section>
            )}
        </div>
  )
}

export default BlogSection