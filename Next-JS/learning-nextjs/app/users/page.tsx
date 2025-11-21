"use client";

import React, { useEffect, useState } from 'react';
import { fetchAllUsers } from '../actions';

const Users = () => {

    const [data, setData] = useState<{}[]>([]);

    useEffect(() => {
        const fetchUsersData = async () => {
            const users = await fetchAllUsers();
            console.log('Users: ', users);
            users && setData(users);
        };

        fetchUsersData();
    }, []);

    if (data.length < 1) {
        return <h1> Data is loading </h1>
    }

    return (
        <ul>
            {
                data?.map((item: any) => {
                    return (
                        <li key={item?.id}> {item?.name} </li>
                    )
                })
            }
        </ul>
    )
}

export default Users;