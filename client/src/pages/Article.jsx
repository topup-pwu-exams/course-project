import React from 'react'
import { Link } from 'react-router-dom'
import ArticleBody from './Article/ArticleBody'
import ArticleHeader from './Article/ArticleHeader'

const Article = () => {
    return (
        <div>
           <ArticleHeader/>
           <ArticleBody/>
        </div>
    )
}

export default Article