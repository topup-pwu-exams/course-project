import React, { useEffect, useState } from 'react'
import Loader from 'react-spinners/ClipLoader';
import { getBlogs } from '../../api/queries/blog';
import { client } from '../../utils/client';
import BlogPreview from '../../components/Blog/BlogPreview';


export default function BlogArticles({blogsection}) {
    {

        const [state, setState] = useState({ blogs: [], error: '', loading: true });
      
        const { loading, error, blogs } = state;
        const query = getBlogs()
      
        useEffect(() => {
            const fetchBlogs = async () => {
                try {
                    const blogs = await client.fetch(query); // TODO: change to small portion of blogs, like "TOP" blogs
                    //console.log(blogs)
      
                    setState({ blogs, loading: false });
                } catch (err) {
                    setState({ loading: false, error: err.message });
                }
            };
            fetchBlogs();
        }, []);
      
        return (
          <div>
          {loading ? (<Loader loading={loading} />) : error ? (<div>error...</div>) : (
              <section>
                  <section className='custom-layout mb-10'>
                      <h2>{blogsection}</h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 p-2 md:p-6 ">
                          {blogs.length && blogs.map(blog => {
                              return (
                                  <BlogPreview
                                      key={blog._id}
                                      title={blog.title}
                                      mainImage={blog.mainImage}
                                      description={(blog.description).slice(0,100)}
                                      author={blog.author}
                                      blogcategory={blog.blogcategory}
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
}
