import React, { useEffect, useState } from "react";
import {
  AvatarSideBar,
  Backdrop,
  BrandItem,
  MenuList,
  NavbarContainer,
  SidebarContainer,
  ToogleMenuBtn,
} from "./Navbar.styled";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { STORAGE_NAME } from "../../services/const";
import useStorage from "../../hooks/useStorage";
import { ToogleMenu } from "../../assets/svg/global";
import AvatarDropDown from "./AvatarDropDown";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const toogleShowMenu = () => {
    setShow((prevState) => (prevState = !show));
  };

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

  useEffect(() => {
    let linksNav = document.querySelectorAll(".nav-items-responsive");
    linksNav;
  }, []);

  const handleLogout = (e) => {
    e.preventDefault();
    storage.clear();
    navigate("/connexion", { replace: true });
  };

  return (
    <>
      <NavbarContainer>
        <ToogleMenuBtn onClick={toogleShowMenu}>
          <ToogleMenu />
        </ToogleMenuBtn>
        <BrandItem>
          <Link className="logo-intranet" to="/">
            REACT-INTRANET
          </Link>
        </BrandItem>
        <Offcanvas show={show} onHide={toogleShowMenu} responsive={"lg"}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <MenuList>
              <li>
                <AvatarSideBar img={userData.photo}></AvatarSideBar>
              </li>

              <li>
                <AvatarDropDown img={userData.photo} onLogout={handleLogout} />
              </li>

              <li className="nav-items-responsive">
                <NavLink to="/ajouter-collaborateurs">Ajouter</NavLink>
              </li>
              <li className="nav-items-responsive">
                <NavLink to="/listes-collaborateurs">Listes</NavLink>
              </li>
              <li className="nav-items-responsive showSideBar ">
                <NavLink to="/profil">Mon Compte</NavLink>
              </li>
              <li
                className="nav-items-responsive showSideBar "
                onClick={handleLogout}
              >
                Déconnexion
              </li>
            </MenuList>
          </Offcanvas.Body>
        </Offcanvas>
      </NavbarContainer>
      {/* Menue Responsive */}
    </>
  );
};

export default Navbar;
