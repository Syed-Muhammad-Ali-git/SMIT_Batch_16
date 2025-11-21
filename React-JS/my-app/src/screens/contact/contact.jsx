// Note: Contact page...!

import React, { useState, useEffect } from 'react';
import Header from '../../components/header/header';

const Contact = () => {

    const [date, setDate] = useState("");
    let handleTimer;

    useEffect(() => {
        handleTimer = setInterval(() => {
            const rightNow = new Date().toLocaleTimeString();
            setDate(rightNow);
        }, 1000);

        // Note: When unmount...
        return () => {
            console.log('Clock stopped successfully');
            clearInterval(handleTimer);
        }
    }, []);

    return (
        <div>
            <Header title="contact" color='orange' />
            <h2> {date} </h2>
        </div>
    )
}

export default Contact;