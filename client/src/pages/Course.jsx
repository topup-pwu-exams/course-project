import React from 'react'
import { useParams } from 'react-router-dom';

const Course = () => {
    const { slug } = useParams();
  return (
    <div>Course - {slug}</div>
  )
}
export default Course