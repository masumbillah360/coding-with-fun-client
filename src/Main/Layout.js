import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

const Layout = () => {
  return (
    <div className="container mx-auto dark">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Layout;
