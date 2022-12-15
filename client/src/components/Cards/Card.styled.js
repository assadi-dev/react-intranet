import styled from "styled-components";
import userimg from "../../assets/img/user_default.jpg";
import { isEmpty } from "../../services/utils";
import AvatarCard from "./CollaborateursCard/AvatarCard";

export const CardBodyContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px 15px 15px;
  width: 240px;
  position: relative;
  @media (min-width: 550px) {
    width: 420px;
  }
  @media (min-width: 990px) {
    width: 550px;
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

export const ListCardContainer = styled.div`
  width: 100%;
  height: 150px;
  border: 1px solid var(--bs-gray-600);
  border-radius: 8px;
  background-color: #fff;
  justify-self: center;
  padding: 10px;
  position: relative;
  .avatarlistContainer {
    width: 100%;
    height: 45px;
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
`;

export const ListCardContainerBody = styled.div`
  width: 100%;
  position: relative;
`;

export const ListCardHeaderRow = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr;
  grid-gap: 1rem;
  margin-bottom: 10px;
  align-items: center;
`;

export const UsernameText = styled.div`
  & p {
    margin: 0 !important;
    font-size: 10px;
    width: 40%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    @media (min-width: 550px) {
      width: 100%;
    }
  }

  & .name {
    font-weight: bold;
    font-size: 14px;
  }
  & .age {
    opacity: 0.6;
  }
`;

export const RowInfoContacts = styled.div`
  display: flex;

  .icon {
    width: 15px;
    height: 15px;
    margin-right: 10px;
    svg {
      width: 15px;
      height: 15px;
    }
    p {
      flex: 1;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;
