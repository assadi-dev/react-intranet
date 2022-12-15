import styled from "styled-components";

export const ListCollaborateursCardContainer = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  min-height: 50vh;
  padding: 18px;
  display: grid;
  grid-template-rows: 100px 1fr;
  grid-gap: 1rem;
  @media (min-width: 992px) {
    width: 80%;
    grid-template-rows: 80px 1fr;
  }
`;

export const RowActionsFilter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  .col-left {
    display: flex;
    justify-content: flex-start;
  }

  .col-right {
    display: flex;
    justify-content: flex-end;
  }
`;

export const SearchBar = styled.div``;

export const RowlistCollabContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 150px);
  justify-content: center;

  grid-gap: 1rem;
  @media (min-width: 480px) {
    grid-template-columns: repeat(3, 180px);
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(auto-fit, 280px);
  }
`;
