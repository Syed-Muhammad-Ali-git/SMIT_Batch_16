// Note: Navbar component...!

import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <ul>
        <li>
            <Link href={'/'}> Home </Link>
        </li>
        <li>
            <Link href={'/about'}> About </Link>
        </li>
        <li>
            <Link href={'/about/profile'}> Profile </Link>
        </li>
        <li>
            <Link href={'/contact'}> Contact </Link>
        </li>
        <li>
            <Link href={'/users'}> Users </Link>
        </li>
    </ul>
  );
};

export default Navbar;