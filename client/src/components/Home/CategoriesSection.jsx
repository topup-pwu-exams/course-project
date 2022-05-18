import React, { useEffect, useState } from 'react'
import { client } from '../../utils/client';
import Carousel from '../Carousel';
import CategoryCard from '../common/CategoryCard'

function CategoriesSection() {
  const [state, setState] = useState({ categories: [], error: '', loading: true });

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

  return (
    // TODO: create skeleton loader
    <div className='custom-layout mb-10'>
      <h2 className=''>Categories</h2>
      {/* <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-10 p-2 md:p-6 mt-5'> */}
        {/* {categories.length && categories.map(category => {
          // console.log('category', category);
          return (
            <CategoryCard
              key={category._id}
              title={category.title}
            />
          )
        })} */}
        <div className="2xl:container 2xl:mx-auto 2xl:px-0 py-3 px-10">
          <Carousel />
        </div>
        {/* <CategoryCard /> */}
      {/* </div> */}
    </div>
  )
}

export default CategoriesSection