import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { getMyCourses } from '../../api/queries/user';
import { client } from '../../utils/client';
import { Store } from '../../utils/Store';

const OwnedCourses = () => {
    const navigate = useNavigate()
    const { state: { userInfo } } = useContext(Store);
    const userId = userInfo.sub
    const query = getMyCourses(userId)

    useEffect(() => {
        if (!userInfo) {
            navigate('/login?redirect=/my-courses/owned');
        }
    }, [navigate, userInfo]);


    useEffect(() => {
        console.log(userId);
        const fetchMyCourses = async () => {
            try {
                const course = await client.fetch(query);
                console.log('MY COURSES', course);
            } catch (error) {
                console.log(error)
            }
        }
        fetchMyCourses()
    }, [])
    

    return (
        <div>
            <h1>Owned</h1>
            <div>

            </div>
        </div>
    )
}

export default OwnedCourses