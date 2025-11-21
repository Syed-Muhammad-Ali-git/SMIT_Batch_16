// Note: All routes are defined here...!

import { Routes, Route } from "react-router";

import Home from "../screens/home/home";
import About from "../screens/about/about";
import Contact from "../screens/contact/contact";
import ServicesScreen from "../screens/services/services";
import TodoScreen from "../screens/todo/todo";
import UsersScreen from "../screens/users/users";
import NotFound from "../screens/not-found/not-found";
import User from "../screens/user/user";
import PerformanceOptimization from "../screens/performance-optimization/po";
import TextAnimation from "../screens/animation/animation";

const RoutesComponent = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<ServicesScreen />} />
            <Route path="/todo" element={<TodoScreen />} />
            <Route path="/users" element={<UsersScreen />} />
            <Route path="/user/:id" element={<User />} />
            <Route path="/performance-optimization" element={<PerformanceOptimization />} />
            <Route path="/animation" element={<TextAnimation />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default RoutesComponent;