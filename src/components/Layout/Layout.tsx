import React from "react";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <Menu />
      {children}
    </>
  );
};

export default Layout;
