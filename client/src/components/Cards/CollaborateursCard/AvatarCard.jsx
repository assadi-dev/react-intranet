import React from "react";
import { AvatarContainer } from "../Card.styled";

const AvatarCard = ({ img, ...props }) => {
  return <AvatarContainer {...props} img={img}></AvatarContainer>;
};

export default AvatarCard;
