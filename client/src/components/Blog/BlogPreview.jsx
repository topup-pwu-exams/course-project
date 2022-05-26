import React from 'react'
import { Link } from 'react-router-dom'


function BlogPreview({ mainImage, title, author, description, blogcategory, date }) {


	return (

		<div className="flex flex-wrap justify-between rounded-sm border-2">

			<div className="w-full md:w-1/3 flex flex-col flex-grow flex-shrink">
				<div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg py-5 ">
					<div className="flex flex-wrap no-underline hover:no-underline">
						{/* make dynamic id=..*/}
						<p id="development" className="w-full font-bold text-sm text-gray-900 px-6">{blogcategory?.title}</p>
						{/* make dynamic link to that article..*/}
						<Link to='article'>
							<p className="w-full font-bold hover:underline text-xl text-gray-900 px-6 pt-3 p-color min-h-20">{title}</p>
						</Link>
					</div>
				</div>
				<div className="flex-none mt-auto bg-white overflow-hidden shadow-lg p-6">
					<div className="flex items-center justify-between">
						<img className="w-8 h-8 rounded-full mr-4" data-tippy-content="Author Name" src={author?.avatar} alt="Avatar" />
						<p className=" text-sm md:text-sm font-normal">{author?.firstName} {author?.lastName}</p>

					</div>
				</div>
			</div>
		</div>

	)
}

export default BlogPreview