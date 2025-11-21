import React from "react";
import { BrowserRouter } from "react-router";
import RoutesComponent from "./utils/routes";
import Navbar from "./components/navbar/navbar";

const App = () => {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <RoutesComponent />
    </BrowserRouter>
  );
};

export default App;