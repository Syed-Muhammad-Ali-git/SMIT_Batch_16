// Note: App component...

import React from 'react';
import { BrowserRouter } from "react-router";
import AppRoutes from "../src/routes/routes";

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;