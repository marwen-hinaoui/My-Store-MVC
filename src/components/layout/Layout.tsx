import React from "react";
import Footer from "./Footer/Footer";
import NavBar from "./Header/NavBar";
import { Outlet } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { useAppSelector } from "../../store";
import { Result } from "antd";

export default function Layout() {


    const error = useAppSelector((state) => state.app.error);
  
  if (error) {
    return (
      <div style={{
        height:'100vh',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
      }}>
        <Result
          status={"500"}
          title={error}
          // extra={<Button type="primary">Back Home</Button>}
        />
      </div>
    );
  }
  return (
    <div>
      <NavBar />
      <Fade triggerOnce cascade>
        <Outlet />
      </Fade>
      <Footer />
    </div>
  );
}
