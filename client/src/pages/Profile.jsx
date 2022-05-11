import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import { LoginIcon } from '@heroicons/react/outline'

const Profile = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const user = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();

        if (!user) navigate('/login'); //TODO: add an alert?
    }, []);
    // if (isLoading || loading) {
    //     return <div>Loading ...</div>;
    // }
    return (
        // isAuthenticated && (
        <div className="min-h-full flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <h1 className='text-3xl mb-4'>Profile page</h1>
            {/* <img src={user.picture} alt={user.name} /> 
                <h2>{user.name}</h2>
                <p>{user.email}</p>
                {userMetadata ? (
                    <pre>{JSON.stringify(userMetadata, null, 2)}</pre>
                ) : (
                    "No user metadata defined"
                )} */}
        </div>
    )
    // );
};

export default Profile