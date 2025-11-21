import React, { useEffect } from 'react';
import { useNavigate } from "react-router";

const NotFound = () => {

    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate('/')
        }, 3000);
    }, []);

    return (
        <div>
            <h1> Page not found </h1>
            <button onClick={() => navigate('/')}> Go to main screen </button>
        </div>
    )
}

export default NotFound;