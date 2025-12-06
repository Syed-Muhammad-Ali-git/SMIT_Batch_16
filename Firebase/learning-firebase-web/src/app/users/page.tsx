"use client";

import React, { useEffect, useState } from "react";
import {
  fetchAllUsers,
  deleteUser,
} from "@/redux/actions/user-actions/user-actions";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "@/lib/firebase";

const Users = () => {
  const [loader, setLoader] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  const getAllUsers = useSelector((reduxData) => {
    return reduxData?.userStates?.usersList;
  });
  //   console.log(getAllUsers);

  useEffect(() => {
    setLoader(true);
    dispatch(fetchAllUsers()).finally(() => {
      setLoader(false);
    });
  }, []);

  //   Handle delete user...!
  const handleDel = async (user: any) => {
    if (user) {
      console.log("User: ", user);
      dispatch(deleteUser(user?.docId)).finally(() => {
        alert("User deleted");
        dispatch(fetchAllUsers());
      });
    }
  };

  return (
    <div>
      <h1> Users List </h1>

      {loader && <h1> Loading... </h1>}

      <ul>
        {getAllUsers?.map((user: any) => {
          return (
            <li key={user?.uid}>
              {user?.name}
              <button onClick={() => handleDel(user)}> Delete </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Users;
