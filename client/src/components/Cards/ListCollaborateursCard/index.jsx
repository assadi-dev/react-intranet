import React from "react";
import { MoreIcon, SettingsIcon } from "../../../assets/svg/global";
import {
  AvatarContainer,
  ListCardContainer,
  ListCardContainerBody,
  ListCardHeaderRow,
  MoreBtnWrapper,
  UsernameText,
} from "../Card.styled";

const ListCollaborateursCard = () => {
  return (
    <ListCardContainer>
      <MoreBtnWrapper className="morebtn-listContainer">
        <SettingsIcon />{" "}
      </MoreBtnWrapper>
      <ListCardContainerBody>
        <ListCardHeaderRow>
          <AvatarContainer className="avatarlistContainer"></AvatarContainer>
          <UsernameText>
            <p className="name">
              Assadi Halifa<span className="age">(29 ans)</span>{" "}
            </p>
            <p>Saint-Paul, La Réunion</p>
          </UsernameText>
        </ListCardHeaderRow>
      </ListCardContainerBody>
    </ListCardContainer>
  );
};

export default ListCollaborateursCard;
