import React from 'react'
import { urlFor } from '../../utils/client'


function BlogPreview({mainImage, title, author, description, date}) {


  return (

         <div className="flex flex-wrap justify-between -mx-6">

					<div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
						<div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
							<div className="flex flex-wrap no-underline hover:no-underline">
								<img src={urlFor(mainImage).width(250).url()} alt="blog img" className="h-64 w-full rounded-t pb-6"/>
								<p className="w-full text-gray-600 text-xs md:text-sm px-6">add date</p>
								<a href='#' className="w-full font-bold text-xl text-gray-900 px-6 p-color">{title}</a>
								<p className="text-gray-800 font-serif text-base px-6 mb-5">
									{description} 
								</p>
							</div>
						</div>
						<div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
							<div className="flex items-center justify-between">
								<img className="w-8 h-8 rounded-full mr-4 avatar" data-tippy-content="Author Name" src={author?.avatar} alt="Avatar of Author"/>
								<p className="text-gray-600 text-xs md:text-sm p-color">{author?.firstName} {author?.lastName}</p>
							</div>
						</div>
					</div>
      </div> 

  )
}

export default BlogPreview