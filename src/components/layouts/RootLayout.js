import React from "react";
import Header from "../header/Header";
import Navbar from "../Navbar/Navbar";

const RootLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default RootLayout;
