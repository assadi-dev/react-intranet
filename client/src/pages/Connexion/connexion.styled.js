import styled from "styled-components";

export const ConnexionContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;

  align-items: center;
  background-color: var(--bs-gray-300);
  flex-direction: column;
`;

export const ConnexionContentContainer = styled.div`
  min-height: 100px;
  min-width: 250px;
  padding: 10px;
  margin-top: 1rem;
  @media (min-width: 992px) {
    margin-top: 5rem;
  }
`;

export const HeaderPresentation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  .icone {
    width: 35px;
    height: 35px;
    padding: 0;
    margin: 0;
    svg {
      width: 35px;
      height: 35px;
      padding: 0;
      margin: 0;
    }
  }
  .title {
    font-weight: 500;
    font-size: 18px;
  }
`;

export const LogoPresentation = styled.div`
  display: grid;
  place-items: center;
  border: 3px solid var(--bs-primary);
  background-color: var(--bs-primary);
  width: 75px;
  height: 75px;
  position: relative;
  color: #0dcaf0;
  border-radius: 100%;
`;

export const Cardheader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 5px;
  .title {
    font-weight: bold;
    font-size: 18px;
    text-align: center;
  }
  .subtitle {
    opacity: 0.5;
    font-size: 14px;
    text-align: center;
  }
`;

export const FormBody = styled.div`
  width: 100%;
  padding: 18px;
  @media screen and (min-width: 992px) {
    width: 480px;
  }
`;

export const FormControl = styled.div`
  margin-bottom: 1.2rem;
  color: var(--bs-primary);
`;
