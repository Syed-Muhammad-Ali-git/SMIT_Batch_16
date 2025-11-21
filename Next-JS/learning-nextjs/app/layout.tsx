import React, { ReactNode } from "react";
import Navbar from "./src/components/navbar/navbar";

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  // console.log('Children: ', children);

  return (
    <html lang="en">
      <body>
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  );
};

export default RootLayout;