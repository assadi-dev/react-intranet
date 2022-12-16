import React, { useEffect, useState } from "react";
import { EmailEnveloppeIcon } from "../../../assets/svg/connexion";

import {
  BirthdayCakeIcone,
  EmailAtIcone,
  MoreIcon,
  PhoneIcone,
  SettingsIcon,
} from "../../../assets/svg/global";
import {
  allCollaborateurs,
  errorsCollaborateurs,
  statusCollaborateurs,
} from "../../../features/collaborateurs/collaborateurSlice";
import { getAge } from "../../../services/utils";
import {
  AvatarContainer,
  ListCardContainer,
  ListCardContainerBody,
  ListCardHeaderRow,
  MoreBtnWrapper,
  RowInfoContacts,
  UsernameText,
} from "../Card.styled";

const ListCollaborateursCard = ({
  name,
  from,
  email,
  phone,
  birthdate,
  photo,
  service,
}) => {
  return (
    <ListCardContainer>
      <MoreBtnWrapper className="morebtn-listContainer">
        <SettingsIcon />
      </MoreBtnWrapper>
      <ListCardContainerBody>
        <ListCardHeaderRow>
          <AvatarContainer
            img={photo}
            className="avatarlistContainer"
          ></AvatarContainer>
          <UsernameText>
            <p className="name">
              {name}
              <span className="age">
                {birthdate ? `(${getAge(birthdate)} ans)` : ""}
              </span>
            </p>
            <p>{from}</p>
          </UsernameText>
        </ListCardHeaderRow>
        <RowInfoContacts>
          <a
            className="email"
            href={`mailto:${email}`}
            rel="noopener noreferrer"
            title={email}
          >
            <span className="icon">
              <EmailEnveloppeIcon />
            </span>
            {email}
          </a>
        </RowInfoContacts>
        <RowInfoContacts>
          <a
            className="phone"
            href={`tel:${phone}`}
            rel="noopener noreferrer"
            title={phone}
          >
            <span className="icon">
              <PhoneIcone />
            </span>{" "}
            {phone}
          </a>
        </RowInfoContacts>
        <RowInfoContacts>
          <p className="birthdate">
            {" "}
            <span className="icon">
              <BirthdayCakeIcone />
            </span>{" "}
            {birthdate}
          </p>
        </RowInfoContacts>
      </ListCardContainerBody>
    </ListCardContainer>
  );
};

export default ListCollaborateursCard;
