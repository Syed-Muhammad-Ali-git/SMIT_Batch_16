// import React from 'react';

import { useState } from "react";
import H2Component from "./componnts/h2/h2";

const App = () => {
  const [authUser, setAuthUser] = useState<'admin' | 'customer'>('admin');

  const changeUser = () => {
    const changeAuth: 'admin' | 'customer' = (authUser == 'admin') ? ('customer') : ('admin');
    setAuthUser(changeAuth);
  };

  return (
    <div>
      <h1> Welcome to TS with React and Vite </h1>
      <H2Component userType="admin" />
      <button onClick={changeUser}> Change User </button>
    </div>
  )
}

export default App;