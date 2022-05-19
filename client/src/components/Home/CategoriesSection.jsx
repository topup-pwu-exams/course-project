import React, { useEffect, useRef, useState } from 'react'
import { client } from '../../utils/client';
import CategoryCard from '../CategoryCard'
import { motion } from "framer-motion"
import { NavLink, useNavigate } from 'react-router-dom';

function CategoriesSection() {
  const [state, setState] = useState({ categories: [], error: '', loading: true });
  const [width, setWidth] = useState(0)
  // const navigate = useNavigate()

  const carousel = useRef()

  const { loading, error, categories } = state;
  const query = `*[_type == "category"]{
        _id,
        title,
        slug
    }`

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categories = await client.fetch(query);
        console.log(categories)

        setState({ categories, loading: false });
      } catch (err) {
        setState({ loading: false, error: err.message });
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    if (categories.length) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }
  }, [categories, window.innerWidth, window.innerHeight])

  return (
    // TODO: create skeleton loader
    <div className='custom-layout mb-10'>
      {loading ? (<div>Loading ...</div>) : error ? (<div>error...</div>) : (
        <div>
          <h2 className=''>Categories</h2>
          <motion.div ref={carousel} whileTap={{ cursor: 'grabbing' }} className='cursor-grab overflow-y-hidden'>
            <motion.div drag='x' dragConstraints={{ right: 0, left: -width }} className='flex'>
              {categories && categories.map(category => {
                return (
                  <NavLink to={`categories/${category?.slug.current}`} key={category._id}>
                    <motion.div className='max-h-max p-3' key={category._id}>
                      <CategoryCard
                        title={category.title}
                        key={category._id}
                      />
                    </motion.div>
                  </NavLink>
                )
              })}
            </motion.div>
          </motion.div>
        </div>
      )
      }
    </div >
  )
}

export default CategoriesSection