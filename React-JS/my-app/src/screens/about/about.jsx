// Note: About page...!

import React from 'react';
import Header from '../../components/header/header';
import fruits from '../../utils/data';

const About = () => {
    return (
        <div>
            <Header title='about' />

            <ul>
                {
                    fruits.map((item, index) => {
                        return (
                            <li key={index}> {`${index + 1} - ${item}`} </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default About;