// All public routes are defined here...

import React from "react";
import { Routes, Route } from "react-router";

import SignUp from "../pages/signup/signup";
import Login from "../pages/login/login";

const PublicRoutes = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
        </Routes>
    );
};

export default PublicRoutes;