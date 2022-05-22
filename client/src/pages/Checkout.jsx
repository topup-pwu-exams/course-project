import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Store } from '../utils/Store';

const Checkout = () => {
    const navigate = useNavigate()
    const { state, dispatch } = useContext(Store);
    const { userInfo, cart } = state;

    useEffect(() => {
        if (!userInfo) {
            navigate('/login?redirect=/checkout');
        }
        // console.log(userInfo);
        // setUser(userInfo)
    }, [navigate, userInfo]);

    return (
        <div className='custom-layout'>Checkout</div>
    )
}

export default Checkout