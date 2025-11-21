import React, { useEffect, useState } from 'react';

const ServicesScreen = () => {

    const [counter, setCounter] = useState(0);
    const [userName, setUserName] = useState('');

    // Note: Greeting handler...
    const greeting = () => {
        console.log("Hello from Services Screen");
    };

    // Note: Greeting handler...
    const targetCounterState = () => {
        console.log("Counter state is updating.");
    };

    // We will not use this
    useEffect(() => {
        console.log('I will run every time');
    });

    // Note: THis hook will run when this component nounts...
    useEffect(() => {
        greeting();
    }, []);

    // This hook will run when counter state will update.
    useEffect(() => {
        console.log("Counter state is updating.");
    }, [counter]);

    // This hook will run when user name state will update.
    useEffect(() => {
        console.log("User name state is updating.");
    }, [userName]);

    useEffect(() => {
        console.log('Both states are working');
    }, [counter, userName]);

    return (
        <div>
            <h1> Services Screen </h1>
            <h2> Count: {counter} </h2>
            <h3> User: {userName ? userName : 'NA'} </h3>
            <button onClick={() => setCounter(counter + 1)}> Increment Count </button>
            <button onClick={() => setUserName('AHmed')}> Update User </button>
        </div>
    );
};

export default ServicesScreen;