import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useApi } from "../hooks/useApi";

const Profile = () => {
    const { user, isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();
    // const [userMetadata, setUserMetadata] = useState(null);

    console.log('user', user);

    const domain = process.env.REACT_APP_AUTH0_DOMAIN;
    const options = {
        audience: `https://${domain}/api/v2/`,
        scope: "read:current_user",
    }

    const { login, getAccessTokenWithPopup } = useAuth0();

    const { loading, error, refresh, data: userMetadata, } = useApi(`https://${domain}/api/v2/users/${user.sub}`, options);

    const getTokenAndTryAgain = async () => {
        await getAccessTokenWithPopup(options);
        refresh();
    };

    console.log(userMetadata);

    // useEffect(() => {
    //     const getUserMetadata = async () => {
    //         const domain = process.env.REACT_APP_AUTH0_DOMAIN;

    //         try {
    //             const accessToken = await getAccessTokenSilently({
    //             });

    //             const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;

    //             const metadataResponse = await fetch(userDetailsByIdUrl, {
    //                 headers: {
    //                     Authorization: `Bearer ${accessToken}`,
    //                 },
    //             });

    //             const { user_metadata } = await metadataResponse.json();
    //             console.log('metadata', user_metadata);

    //             setUserMetadata(user_metadata);
    //         } catch (e) {
    //             console.log(e.message);
    //         }
    //     };

    //     getUserMetadata();
    // }, [getAccessTokenSilently, user?.sub]);

    if (isLoading || loading) {
        return <div>Loading ...</div>;
    }
    if (error) {
        if (error.error === 'login_required') {
            return <button onClick={() => login(options)}>Login</button>;
        }
        if (error.error === 'consent_required') {
            return (
                <button onClick={getTokenAndTryAgain}>Consent to reading users</button>
            );
        }
        return <div>Oops {error.message}</div>;
    }
    return (
        isAuthenticated && (
            <div className="min-h-full flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <h1 className='text-3xl mb-4'>Profile page</h1>
                <img src={user.picture} alt={user.name} />
                <h2>{user.name}</h2>
                <p>{user.email}</p>
                {userMetadata ? (
                    <pre>{JSON.stringify(userMetadata, null, 2)}</pre>
                ) : (
                    "No user metadata defined"
                )}
            </div>
        )
    );
};

export default Profile