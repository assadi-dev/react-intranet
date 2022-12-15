import styled from "styled-components";

export const AccueilWrapper = styled.section`
  width: 100%;
  overflow: hidden;
`;

export const AlertZone = styled.div`
  max-height: 50px;
  width: 100%;
  padding: 0 25px;
  @media (min-width: 992px) {
    width: 80%;
    margin: 0 auto;
  }
`;

export const AccueilCollab = styled.main`
  margin-top: 10rem;
  width: 100%;
  min-height: 200px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const FooterSections = styled.div`
  margin-top: 1rem;
  min-height: 50px;
  display: flex;
  justify-content: center;
  padding: 10px;
  width: 100%;
  .responsive-btn {
    font-size: 12px;
    @media (min-width: 768px) {
      font-size: initial;
    }
  }
`;
