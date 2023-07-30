import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const RootLayout = ({ children,category }) => {
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
  const res = await fetch('https://ir-telecom-server.vercel.app/category')
  const repo = await res.json()
  return { props: { category:repo } }
}
