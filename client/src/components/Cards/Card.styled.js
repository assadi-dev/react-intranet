import styled from "styled-components";
import userimg from "../../assets/img/user_default.jpg";
import { isEmpty } from "../../services/utils";
import AvatarCard from "./CollaborateursCard/AvatarCard";

export const CardBodyContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px 15px 15px;
  width: 250px;
  position: relative;
  @media (min-width: 550px) {
    width: 420px;
  }
  @media (min-width: 990px) {
    width: 550px;
  }
  .technique {
    background-color: var(--bs-primary);
  }
  .client {
    background-color: var(--bs-teal);
  }
  .marketing {
    background-color: var(--bs-danger);
  }
`;

//photo de profile
export const AvatarContainer = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-image: ${({ img }) =>
    !isEmpty(img) ? `url(${img})` : `url(${userimg})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
  @media (min-width: 992px) {
    width: 100px;
    height: 100px;
  }
`;

//Coordonnée des utilisateur

export const Username = styled.div`
  text-align: center;
  margin-bottom: 1rem;
  p {
    margin-bottom: 0;
  }
  & .name {
    font-weight: bold;
    font-size: 12px;
    @media (min-width: 550px) {
      font-size: 14px;
    }
    @media (min-width: 992px) {
      font-size: 16px;
    }
  }
  & .country {
    font-size: 10px;
    opacity: 0.6;
    @media (min-width: 550px) {
      font-size: 12px;
    }
    @media (min-width: 992px) {
      font-size: 14px;
    }
  }

  .age {
    opacity: 0.6;
    font-weight: initial;
    margin-left: 2px;
    font-size: 10px;
    @media (min-width: 550px) {
      font-size: 12px;
    }
    @media (min-width: 992px) {
      font-size: 14px;
    }
  }
`;

export const FooterCard = styled.div`
  width: 100%;
  margin-top: 1rem;
  padding-bottom: 0.5rem;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: nowrap;
  flex-shrink: 0;
  align-items: center;
`;

//Icon Button styled

export const IconButtonContainer = styled.div`
  display: grid;
  place-items: center;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  border: 1px solid ${({ color }) => (color ? color : "var(--bs-gray-600)")};
  color: ${({ color }) => (color ? color : "--bs-gray-600")};
  background-color: ${({ bgColor }) =>
    bgColor ? bgColor : "var(--bs-gray-200)"};
  cursor: pointer;
  :hover {
    background-color: ${({ color }) => (color ? color : "var(--bs-gray-200)")};

    color: #fff;
  }
`;

export const IconWrapper = styled.svg`
  width: 25px;
  height: 25px;
`;

export const MoreBtnWrapper = styled.span`
  position: absolute;
  width: 35px;
  height: 35px;
  display: grid;
  place-items: center;
  cursor: pointer;
  z-index: 15;
  :hover {
    opacity: 0.6;
  }
  :active {
    opacity: 1;
  }
  right: 0;
  svg {
    width: 25px;
    height: 25px;
  }
`;

//Style card pour la listes des colaborateurs

export const ListCardContainer = styled.div`
  width: 100%;
  height: 200px;
  border: 1px solid var(--bs-gray-500);
  border-radius: 8px;
  background-color: #fff;
  justify-self: center;
  padding: 10px;
  position: relative;
  overflow: hidden;
  box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.15);
  .avatarlistContainer {
    width: 45px;
    height: 45px;
    @media (min-width: 992px) {
      width: 100%;
    }
  }
  .morebtn-listContainer {
    width: 20px;
    height: 20px;
    margin-right: 10px;
    color: var(--bs-gray-600);
    svg {
      width: 20px;
      height: 20px;
    }
  }

  .technique {
    background-color: var(--bs-primary);
  }
  .client {
    background-color: var(--bs-teal);
  }
  .marketing {
    background-color: var(--bs-danger);
  }
`;

export const ListCardContainerBody = styled.div`
  width: 100%;
  position: relative;
`;

export const ListCardHeaderRow = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 50px 1fr;
  grid-gap: 0.2rem;
  align-items: center;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: 50px 1fr;
    grid-gap: 1rem;
  }
`;

export const UsernameText = styled.div`
  margin-bottom: 8px;
  & p {
    margin: 0 !important;
    font-size: 10px;
    width: 135px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    @media (min-width: 480px) {
      width: 145px;
    }

    @media (min-width: 992px) {
      width: 180px;
    }
  }

  & .name {
    font-weight: bold;
    font-size: 12px;
    @media (min-width: 992px) {
      font-size: 14px;
    }
  }
  & .age {
    opacity: 0.6;
    margin-left: 5px;
    font-size: 10px;
    @media (min-width: 992px) {
      font-size: 12px;
    }
  }
`;

export const RowInfoContacts = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: fit-content;
  a {
    text-decoration: none;
    cursor: pointer !important;
  }
  .email {
    color: var(--bs-primary) !important;
  }
  .phone {
    color: var(--bs-teal) !important;
  }
  .birthdate {
    color: var(--bs-warning) !important;
    cursor: context-menu;
  }

  a,
  p {
    font-size: 12px;
    margin-bottom: 5px;
    width: 120px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    @media (min-width: 480px) {
      width: 140px;
    }
    @media (min-width: 992px) {
      width: 240px;
    }
  }

  .icon {
    width: 15px;
    height: 15px;
    margin-right: 5px;
    svg {
      width: 15px;
      height: 15px;
    }
  }
`;

export const ModalConfirmHeader = styled.div`
  padding: 18px;
  .header-text {
    margin-bottom: 1rem;
    margin-bottom: 1rem;
    p {
      margin: 0;
    }
  }
  .row-btn {
    display: flex;
  }
`;

export const ServiceTag = styled.span`
  padding: 2px 8px;
  border-radius: 2px;
  width: 100px;
  font-size: 8px;
  font-weight: bold;
  position: absolute;
  right: 0;
  color: #fff;
  bottom: 0;
  background-color: var(--bs-gray-500);
  @media (min-width: 992px) {
    font-size: 12px;
  }
`;

export const ServiceTagRandom = styled.span`
  position: absolute;
  padding: 2px 8px;
  border-radius: 2px;
  text-align: center;
  width: 80px;
  font-size: 8px;
  font-weight: bold;
  position: absolute;
  right: 0;
  color: #fff;
  top: 0;
  background-color: var(--bs-gray-500);
  @media (min-width: 992px) {
    padding: 8px 12px;
    font-size: 14px;
    width: 120px;
  }
`;
