'use client';

import React, { useEffect } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from '@/lib/firebase';

const Users = () => {

    const fetchAllUsers = async () => {
        const fetchUsersFromFB = await getDocs(collection(db, "Users"));
        // console.log('Users: ' , fetchUsersFromFB);
        const users: any[] = [];
        fetchUsersFromFB.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
            const obj = {
                ...doc.data(),
                docId: doc.id
            };
            users.push(obj);
        });
        console.log('Users: ', users);
    };

    useEffect(() => {
        fetchAllUsers();
    }, []);

    return (
        <div>
            <h1> Users List </h1>
        </div>
    )
}

export default Users