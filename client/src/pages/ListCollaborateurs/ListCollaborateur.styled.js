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

// Zone des filtre des filtres
export const RowActionsFilter = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 20px 100px;
  grid-gap: 8px;
  align-items: center;
  @media (min-width: 992px) {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: repeat(2, 1fr);
  }
  .focus {
    background-color: var(--bs-gray-400);
    font-weight: normal;
  }
`;

//Barre de Recherche
export const SearchBarContainer = styled.div`
  width: 100%;
  border: 1px solid var(--bs-gray-600);
  background-color: var(--bs-gray-100);
  padding: 4px 10px;
  border-radius: 6px;

  input {
    width: 100%;
    height: 100%;
    background-color: transparent !important;
    outline: none;
    font-weight: bold;
    ::placeholder {
      font-weight: normal;
    }
  }
`;

//Filtre Selecteur
export const SelectFilterContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  margin-bottom: 12px;

  .selectInput {
    margin-bottom: 2px;
    @media (min-width: 992px) {
      width: 300px;
      margin-bottom: 0;
    }
  }

  @media (min-width: 668px) {
    flex-direction: row;
    margin-bottom: 0;
    justify-content: space-evenly;
  }
`;
