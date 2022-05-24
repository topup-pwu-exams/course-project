import React from 'react'
import { useParams } from 'react-router-dom';

const Learn = () => {
    const { slug } = useParams();
    return (
        <div>Learn {slug}</div>
    )
}

export default Learn