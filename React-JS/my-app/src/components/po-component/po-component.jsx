import React, { memo } from 'react';

const POComponent = ({ title }) => {
    // console.log('Props: ', title);

    return (
        <div>
            <h1> {title} - Component </h1>
        </div>
    );
};

export default memo(POComponent);