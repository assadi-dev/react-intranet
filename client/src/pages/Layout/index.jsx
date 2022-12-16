import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Container from "react-bootstrap/Container";
import NavbarCustom from "./NavbarCustom";

const Layout = () => {
  return (
    <Container fluid className="layoutContainer">
      <NavbarCustom />
      <Outlet />
    </Container>
  );
};

export default Layout;
