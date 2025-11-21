import React, { useEffect, useState, Fragment } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

const UsersScreen = () => {

    const [usersList, setUsersList] = useState([]);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const viewUser = (userData) => {
        // console.log('User ID: ', userData?.id);
        navigate(`/user/${userData?.id}`);
    };

    useEffect(() => {
        const apiCall = async () => {
            setLoading(true);
            const apiUrl = "https://jsonplaceholder.typicode.com/users";

            try {
                const res = await axios.get(apiUrl);
                // console.log(res);
                // res && setUsersList(res?.data);

                if (res) {
                    setUsersList(res?.data);
                    setLoading(false);
                }
            }

            catch (error) {
                console.log('Something went wrong while calling api: ', error);
            };
        };

        apiCall();
    }, []);

    return (
        <>
            <h1> Users api call </h1>

            {/* Loading section */}
            {
                loading && <h3> Data is loading </h3>
            }

            {/* Mapping users list data */}
            <ul>
                {
                    usersList.map((item, index) => {
                        return (
                            <li key={item?.id}>
                                {item?.name} {' '}
                                <button onClick={() => viewUser(item)}> View User </button>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    );
};

export default UsersScreen;



















// Using oop / class
// import React , { Component } from "react";

// class UsersScreen extends Component {
//     render() {
//         return(
//             <div>
//                 <h1> Oop in React </h1>
//             </div>
//         );
//     }
// }

// export default UsersScreen;