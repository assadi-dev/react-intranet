import styled from "styled-components";
import userimg from "../../assets/img/user_default.jpg";
import { isEmpty } from "../../services/utils";

export const FormUserContainer = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 2rem;
  @media (min-width: 768px) {
    width: 90%;
  }
  @media (min-width: 1200px) {
    width: 1200px;
  }
`;

export const FormBody = styled.div`
  width: 100%;
  grid-gap: 15px;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 240px 1fr;
  }
  @media (min-width: 1200px) {
    display: grid;
    grid-template-columns: 340px 1fr;
  }
`;

export const FormHeaderSection = styled.div`
   {
    & h2 {
      font-size: 22px;
      font-weight: bold;
      @media (min-width: 550px) {
        font-size: 26px;
      }
    }
  }
`;

export const PreviewPhoto = styled.div`
  border-radius: 3px;
  border: solid 1px var(--bs-gray-500);
  width: 80%;
  height: 280px;
  background-image: ${({ img }) =>
    !isEmpty(img) ? `url(${img})` : `url(${userimg})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin: 0 auto;
`;
