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
import { motion } from "framer-motion";

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
    <motion.div
      initial={{ opacity: 0, x: 25 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
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
    </motion.div>
  );
};

export default CollaborateursCard;
