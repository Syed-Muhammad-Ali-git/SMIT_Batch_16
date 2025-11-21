// All protected routes are defined here...

import React from "react";
import { Routes, Route } from "react-router";
import Home from "../pages/home/home";

const ProtectedRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    );
};

export default ProtectedRoutes;