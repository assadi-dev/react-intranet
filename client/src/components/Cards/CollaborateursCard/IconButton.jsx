import React from "react";
import { IconButtonContainer, IconWrapper } from "../Card.styled";

const IconButton = ({ icon, text, redirect, color, bgColor }) => {
  return (
    <IconButtonContainer color={color} bgColor={bgColor}>
      <IconWrapper>{icon}</IconWrapper>
    </IconButtonContainer>
  );
};

export default IconButton;
