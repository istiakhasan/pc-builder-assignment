import React from "react";
import Header from "../header/Header";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const RootLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default RootLayout;
