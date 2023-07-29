import React from "react";
import Header from "../header/Header";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const RootLayout = ({ children,category }) => {
  console.log(category,"category form root layout");
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default RootLayout;
export const getStaticProps = async () => {
  const res = await fetch('http://localhost:4000/category')
  const repo = await res.json()
  return { props: { category:repo } }
}
