import styled from "styled-components";
import { isEmpty } from "../../services/utils";
import userimg from "../../assets/img/user_default.jpg";

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  justify-content: space-between;
  background-color: #fff;
  box-shadow: 0 3px 18px -3px rgba(0, 0, 0, 0.15);
  margin-bottom: 1rem;
  position: sticky;
  top: 0;
  z-index: 50;
  padding: 12px 28px;
`;

export const Backdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  min-height: 100vh;
`;

export const SidebarContainer = styled.div`
  min-height: 100vh;
  width: 200px;
  background-color: #fff;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10;
`;

export const MenuList = styled.ul`
  margin-bottom: 0;
  padding-left: 0;
  margin-left: auto;
  margin-right: auto;
  width: fit-content;
  text-align: center;
  .showSideBar {
    @media (min-width: 992px) {
      display: none;
    }
  }
  @media (min-width: 576px) {
    margin-left: 42px;
    margin-right: 0;
    width: 100%;
    text-align: left;
  }

  a {
    text-decoration: none;
    color: inherit;

    @media (min-width: 992px) {
      margin-bottom: 0 !important;
    }
  }
  li {
    margin-bottom: 25px;
    color: var(--bs-secondary);
    font-weight: bold;
    @media (min-width: 992px) {
      margin-bottom: 0 !important;
      margin-left: 25px;
    }
  }
  @media (min-width: 992px) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
  }
`;

export const BrandItem = styled.div`
  width: fit-content;
  padding: 2px;
`;

export const ToogleMenuBtn = styled.div`
  width: 40px;
  height: 40px;
  background-color: #fff;
  position: absolute;
  right: 10px;
  top: 50%;
  z-index: 10;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  svg {
    width: 100%;
    height: 100%;
  }
  @media (min-width: 992px) {
    display: none;
  }
`;

export const AvatarSideBar = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-image: ${({ img }) =>
    !isEmpty(img) ? `url(${img})` : `url(${userimg})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin-bottom: 50px;
  @media (min-width: 992px) {
    display: none;
  }
`;

export const AvatarDropdowContainer = styled.div`
  position: relative;
  width: 80px;
  height: 50px;
  display: none;
  cursor: pointer;

  .arrow-bottom {
    width: 25px;
    height: 25px;
    svg {
      width: 100%;
      height: 100%;
    }
  }
  .avatar-btn {
    width: 45px;
    height: 45px;
    border-radius: 100%;
    background-image: ${({ img }) =>
      !isEmpty(img) ? `url(${img})` : `url(${userimg})`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    :active {
      opacity: 0.5;
    }
  }

  @media (min-width: 992px) {
    display: flex;
    justify-content: flex-end;
  }
`;

export const AvatarDropdowContent = styled.div`
  display: none;
  position: absolute;
  width: 200px;
  min-height: 40px;
  bottom: 0;
  padding: 12px 18px;
  left: 10px;
  background-color: #fff;
  border-radius: 6px;
  transform: translateY(115px);
  transition: all 0.35s ease-in-out;
  @media (min-width: 992px) {
    display: block;
    visibility: ${({ show }) => (show ? "visible" : "hidden")};
    opacity: ${({ show }) => (show ? 1 : 0)};
    transform: ${({ show }) =>
      show ? "translateY(115px)" : "translateY(100px)"};
  }
`;
