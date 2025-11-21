import React from "react";

const Header = (props) => {
    const { title, color } = props;
    // console.log('Props of header component: ', props);

    return (
        <h1 style={{ textTransform: "capitalize", color: color }}>
            {title} Screen!
        </h1>
    );
};

export default Header;