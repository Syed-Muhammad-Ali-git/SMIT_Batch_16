import React, { useState, useEffect } from 'react';
import "./style.css";

const arr = ['S', 't', 'u', 'n', 'n', 'i', 'n', 'g'];

const TextAnimation = () => {
    const [animationText, setAnimationText] = useState(arr);
    const [count, setCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            const counter = count + 1;
            setCount(counter);
            console.log(count);

            if (count == animationText.length - 1) {
                setCount(0);
            }
        }, 1000)
    }, [count]);

    return (
        <div className='container'>
            {
                animationText?.map((item, index) => {
                    {/* console.log('Key: ', index); */ }
                    return (
                        <span
                            key={index}
                            style={{
                                color: (count == index) ? ('white') : ('darkslategrey')
                            }}
                        >
                            {item}
                        </span>
                    );
                })
            }
        </div>
    );
};

export default TextAnimation;