import React from 'react';
import { useParams } from "react-router";

const User = () => {
    const { id } = useParams();
    console.log('User ID: ', id);

    return (
        <div>
            <h1> User : {id} </h1>
        </div>
    )
}

export default User;