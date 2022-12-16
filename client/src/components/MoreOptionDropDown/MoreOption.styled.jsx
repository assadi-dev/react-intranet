import styled from "styled-components";

export const MenuDropDown = styled.div`
  border: 1px solid var(--bs-gray-500);
  width: 150px;
  min-height: 50px;
  position: absolute;
  background-color: #fff;
  z-index: ${({ show }) => (show ? 20 : 0)};;
  border-radius: 5px;
  top:  ${({ show }) => (show ? "30px" : "10px")};
  right: 0px;
  padding: 8px 5px;
  opacity: ${({ show }) => (show ? 1 : 0)};
  visibility:  opacity: ${({ show }) => (show ? "visible" : "hidden")};
  transition: all 0.3s ease-in;
`;

export const DropDonwContent = styled.div`
  display: grid;
  align-items: center;
  width: 100%;
  overflow: hidden;

  a {
    text-decoration: none;
  }
  p {
    font-size: 10px;
    margin-bottom: 0;
    @media (min-width: 768px) {
      font-size: 12px;
    }
  }
  .dropdown-button {
    display: flex;
    width: 100%;
    align-items: center;
    cursor: pointer;
    :hover {
      opacity: 0.5;
    }
  }
  & svg {
    width: 12px !important;
    height: 12px !important;
    margin-right: 10px;
  }
`;

export const DeleteButton = styled.p`
  color: var(--bs-danger);
  font-weight: bold;
  font-size: 12;
`;

export const EditButton = styled.p`
  color: var(--bs-primary);
  font-weight: bold;
  font-size: 12;
`;
