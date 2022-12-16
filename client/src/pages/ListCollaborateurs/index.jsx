import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListCollaborateursCard from "../../components/Cards/ListCollaborateursCard";
import { fetchAllCollaborateurAsync } from "../../features/collaborateurs/collaborateurAsyncAction";
import {
  allCollaborateurs,
  errorsCollaborateurs,
  statusCollaborateurs,
} from "../../features/collaborateurs/collaborateurSlice";
import FilterZone from "./FilterZone";
import {
  ListCollaborateursCardContainer,
  RowActionsFilter,
  RowlistCollabContainer,
} from "./ListCollaborateur.styled";

const ListCollaborateurs = () => {
  const dispatch = useDispatch();
  const error = useSelector((state) => errorsCollaborateurs(state));
  const getAllCollaborateurs = useSelector((state) => allCollaborateurs(state));
  const getStatus = useSelector((state) => statusCollaborateurs(state));

  useEffect(() => {
    dispatch(fetchAllCollaborateurAsync())
      .unwrap()
      .catch((error) => dispatch(getError(error.message)));
  }, []);

  const RenderList = () => {
    return (
      <>
        {getAllCollaborateurs ? (
          getAllCollaborateurs.map((collaborateur) => (
            <ListCollaborateursCard
              key={collaborateur.id}
              id={collaborateur.id}
              name={`${collaborateur.firstname} ${collaborateur.lastname}`}
              from={`${collaborateur.city}, ${collaborateur.country}`}
              email={collaborateur.email}
              phone={collaborateur.phone}
              birthdate={collaborateur.birthdate}
              age={`${32} ans`}
              photo={collaborateur.photo}
              service={collaborateur.service}
            />
          ))
        ) : (
          <div>Collaborateurs introuvable</div>
        )}
      </>
    );
  };

  return (
    <ListCollaborateursCardContainer>
      <FilterZone />

      <RowlistCollabContainer>
        {getStatus == "completed" ? (
          <RenderList />
        ) : (
          <div>Chargement en cours</div>
        )}
      </RowlistCollabContainer>
    </ListCollaborateursCardContainer>
  );
};

export default ListCollaborateurs;
