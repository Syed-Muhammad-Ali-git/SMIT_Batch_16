"use client";

import React from 'react';
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { logOutUser } from '@/redux/actions/auth-actions/auth-actions';

const Home = () => {
    const dispatch = useDispatch<AppDispatch>();

    const handleLogOut = () => {
        dispatch(logOutUser());
    }

    return (
        <div>
            <h1> Home </h1>
            <button onClick={handleLogOut}> Log Out </button>
        </div>
    )
}

export default Home;