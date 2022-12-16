import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

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

  const handleLogout = (e) => {
    e.preventDefault();
    storage.clear();
    navigate("/connexion", { replace: true });
  };

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
              placeholder="start"
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
                    <Nav.Link as={Link} to="/ajouter-utilsateur">
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
                    <NavDropdown.Item as={Link} to="/profile">
                      Mon Compte
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={handleLogout}>
                      Deconnecter
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
