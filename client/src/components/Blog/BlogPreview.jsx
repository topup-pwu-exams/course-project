import React from 'react'


function BlogPreview({mainImage, title, author, description, category, date}) {


  return (

         <div className="flex flex-wrap justify-between">

					<div className="w-full md:w-1/3 flex flex-col flex-grow flex-shrink">
						<div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg py-5 ">
							<div className="flex flex-wrap no-underline hover:no-underline">
								
								<p href='#' className="w-full font-bold text-sm text-gray-900 px-6">Category here</p>
								<p href='#' className="w-full font-bold text-xl text-gray-900 px-6 pt-3 p-color min-h-20">{title}</p>
								
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