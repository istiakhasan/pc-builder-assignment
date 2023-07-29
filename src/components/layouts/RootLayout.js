import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const RootLayout = ({ children,category }) => {
  console.log(category,"category form root layout");
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default RootLayout;
export const getStaticProps = async () => {
  const res = await fetch('http://localhost:4000/category')
  const repo = await res.json()
  return { props: { category:repo } }
}
