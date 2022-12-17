import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowBottomDropdown } from "../../assets/svg/global";
import { AvatarDropdowContainer, AvatarDropdowContent } from "./Navbar.styled";

const AvatarDropDown = ({ img, onLogout }) => {
  const [show, setShow] = useState(false);

  const toggleShowDropDown = () => {
    setShow((prevState) => (prevState = !show));
  };

  return (
    <AvatarDropdowContainer img={img} onClick={toggleShowDropDown}>
      <div className="avatar-btn"></div>
      {/* <span className="arrow-bottom">
        <ArrowBottomDropdown />
      </span> */}
      <AvatarDropdowContent show={show}>
        <p className="dropdown-avatar-items">
          {" "}
          <Link to="/profil">Mon compte</Link>
        </p>{" "}
        <p className="dropdown-avatar-items" onClick={onLogout}>
          {" "}
          Déconnexion
        </p>
      </AvatarDropdowContent>
    </AvatarDropdowContainer>
  );
};

export default AvatarDropDown;
