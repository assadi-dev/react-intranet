import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import useStorage from "../../hooks/useStorage";
import { STORAGE_NAME } from "../../services/const";

const NavbarCustom = () => {
  const storage = useStorage(STORAGE_NAME);
  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    isAdmin: false,
    photo: "",
  });

  useEffect(() => {
    if (storage.data)
      setUserData((prevState) => ({
        ...prevState,
        firstname: storage.data.firstname,
        lastname: storage.data.lastname,
        isAdmin: storage.data.isAdmin,
        photo: storage.data.photo,
      }));
  }, [storage.data]);

  return (
    <>
      {["lg"].map((expand) => (
        <Navbar
          key={expand}
          bg="light"
          expand={expand}
          className="mb-3"
          sticky="top"
        >
          <Container>
            <Navbar.Brand as={Link} to="/">
              REACT INTRANET
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  {userData.isAdmin ? (
                    <Nav.Link as={Link} to="/">
                      Ajouter un collaborateur
                    </Nav.Link>
                  ) : null}

                  <Nav.Link as={Link} to="listes-collaborateurs">
                    Liste des collaborateurs
                  </Nav.Link>

                  <NavDropdown
                    title={`${userData.firstname} ${userData.lastname}`}
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default NavbarCustom;
