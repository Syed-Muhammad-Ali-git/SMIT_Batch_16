// Navbar component...!

import React from 'react';
import { Link, useLocation } from "react-router";

const Navbar = () => {

    // console.log('Path: ', window.location.pathname);

    const { pathname } = useLocation();
    // console.log('Path: ' , pathname);

    return (
        <nav>
            <ul>
                <li> <Link to={'/'}> Home </Link> </li>
                <li> <Link to={'/about'}> About </Link> </li>
                <li> <Link to={'/contact'}> Contact </Link> </li>
                <li> <Link to={'/services'}> Services </Link> </li>
                <li> <Link to={'/todo'}> Todo </Link> </li>
                <li> <Link to={'/users'}> Users </Link> </li>
                <li> <Link to={'/performance-optimization'}> Performance Optimization </Link> </li>
                <li> <Link to={'/animation'}> Animation </Link> </li>
            </ul>
        </nav>
    )
}

export default Navbar;