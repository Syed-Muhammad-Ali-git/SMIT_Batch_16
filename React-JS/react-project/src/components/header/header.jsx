// Header Screen...!

import React from 'react';

const Header = (props) => {
    const { title } = props;
    // console.log('Header props: ', props);

    return (
        <h1> {title?.charAt(0).toUpperCase() + title?.slice(1).toLowerCase()} </h1>
    )
}

export default Header;