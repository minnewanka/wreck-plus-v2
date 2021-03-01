import React from "react";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import Footer from "../Footer/Footer";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <Menu />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
