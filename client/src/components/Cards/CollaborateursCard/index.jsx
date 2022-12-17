import React from "react";
import Card from "react-bootstrap/Card";
import {
  BirthdayCakeIcone,
  EmailAtIcone,
  MoreIcon,
  PhoneIcone,
} from "../../../assets/svg/global";
import { getAge } from "../../../services/utils";
import {
  CardBodyContent,
  FooterCard,
  MoreBtnWrapper,
  ServiceTagRandom,
  Username,
} from "../Card.styled";
import AvatarCard from "./AvatarCard";
import IconButton from "./IconButton";

const CollaborateursCard = ({
  name,
  age,
  from,
  photo,
  email,
  phone,
  birthdate,
  service,
}) => {
  const ShowServiceTag = () => {
    return (
      <ServiceTagRandom className={service.toLowerCase()}>
        {service}
      </ServiceTagRandom>
    );
  };

  return (
    <Card>
      <Card.Body>
        <CardBodyContent>
          <ShowServiceTag />
          <AvatarCard img={photo} />
          <Username>
            <p className="name">
              {name}{" "}
              {birthdate && (
                <span className="age">{` (${getAge(birthdate)} ans)`}</span>
              )}
            </p>

            <p className="country">{from}</p>
          </Username>
          <FooterCard>
            <IconButton
              icon={<PhoneIcone />}
              color={"var(--bs-teal)"}
              bgColor={"#20c99750"}
            />
            <IconButton
              icon={<EmailAtIcone />}
              color={"var(--bs-primary)"}
              bgColor={"#0d6efd50"}
            />
            <IconButton
              icon={<BirthdayCakeIcone />}
              color={"var(--bs-warning)"}
              bgColor={"#ffc10750"}
            />
          </FooterCard>
        </CardBodyContent>
      </Card.Body>
    </Card>
  );
};

export default CollaborateursCard;
