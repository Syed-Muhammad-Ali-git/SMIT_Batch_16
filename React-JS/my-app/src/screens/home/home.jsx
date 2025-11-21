// Note: Home page...!

import React, { useState } from 'react';
// import classes from "./home-style.css";
import Header from '../../components/header/header';

const Home = () => {

    const [count, setCount] = useState(0);
    const [userName, setUserName] = useState('');

    // Note: Function to increment count...
    const handleCount = () => {
        setCount(count + 1);
    };

    // Note: Function to update user name...
    const updateUserName = () => {
        setUserName('Ahmed');
    };

    return (
        <div>
            <Header
                title='home'
                color='blue'
            />

            <h2
                style={{ color: count % 2 == 0 ? 'blue' : 'orange' }}
            >
                Count: {count} {(count % 2 == 0) ? ('Even') : ('Odd')}
            </h2>
            <h2> User: {userName} </h2>

            <button
                onClick={handleCount}
                disabled={count >= 20}
            >
                Click Me
            </button>
            <button onClick={updateUserName}>Update user name</button>
        </div>
    )
}

export default Home;