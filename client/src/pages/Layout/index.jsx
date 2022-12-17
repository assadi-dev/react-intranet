import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "../../components/Navbar";

const Layout = () => {
  return (
    <Container fluid className="layoutContainer">
      <Navbar />
      <Outlet />
    </Container>
  );
};

export default Layout;
