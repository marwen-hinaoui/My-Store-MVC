import React from "react";
import Footer from "./Footer/Footer";
import NavBar from "./Header/NavBar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}
