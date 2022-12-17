import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
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
import { getAge, isAdmin } from "../../../services/utils";
import MoreOptionDropDown from "../../MoreOptionDropDown";
import {
  AvatarContainer,
  ListCardContainer,
  ListCardContainerBody,
  ListCardHeaderRow,
  MoreBtnWrapper,
  RowInfoContacts,
  UsernameText,
} from "../Card.styled";
import ConfirmDeleteModal from "./ConfirmDeleteModal";

const ListCollaborateursCard = ({
  id,
  name,
  from,
  email,
  phone,
  birthdate,
  photo,
  service,
}) => {
  const [showOption, setShowOption] = useState(false);
  const [modalConfirmShow, setModalConFirmShow] = React.useState(false);

  const handleClickOption = () => {
    setShowOption((prevState) => (prevState = !showOption));
  };

  const handleClickDelete = () => {
    setShowOption((prevState) => (prevState = false));
    setModalConFirmShow((prevState) => (prevState = !modalConfirmShow));
  };

  return (
    <ListCardContainer>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Listes des collaborateurs - React-Intranet</title>
      </Helmet>

      {isAdmin() && (
        <div className="pe-1">
          <MoreBtnWrapper
            className="morebtn-listContainer"
            onClick={handleClickOption}
          >
            <SettingsIcon />
          </MoreBtnWrapper>
          <MoreOptionDropDown
            id={id}
            show={showOption}
            style={{ marginRight: "5px", marginTop: "5px" }}
            openConfirm={handleClickDelete}
          />
        </div>
      )}

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
      {/*Affichage du modal de confirmation */}
      <ConfirmDeleteModal
        show={modalConfirmShow}
        onHide={handleClickDelete}
        textConfirm={"Voulez-vous suprimer l'utilisateur " + name + " ?"}
        id={id}
      />
    </ListCardContainer>
  );
};

export default ListCollaborateursCard;
