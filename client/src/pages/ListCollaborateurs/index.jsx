import React from "react";
import ListCollaborateursCard from "../../components/Cards/ListCollaborateursCard";
import {
  ListCollaborateursCardContainer,
  RowActionsFilter,
  RowlistCollabContainer,
} from "./ListCollaborateur.styled";

const ListCollaborateurs = () => {
  return (
    <ListCollaborateursCardContainer>
      <RowActionsFilter></RowActionsFilter>
      <RowlistCollabContainer>
        <ListCollaborateursCard /> <ListCollaborateursCard />{" "}
        <ListCollaborateursCard /> <ListCollaborateursCard />{" "}
        <ListCollaborateursCard /> <ListCollaborateursCard />
      </RowlistCollabContainer>
    </ListCollaborateursCardContainer>
  );
};

export default ListCollaborateurs;
