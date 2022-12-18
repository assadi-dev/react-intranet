import { AnimatePresence, motion } from "framer-motion";
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
        <AnimatePresence>
          {getAllCollaborateurs ? (
            getAllCollaborateurs.map((collaborateur, i) => (
              <motion.div
                key={collaborateur.id}
                initial={{ opacity: 0, x: -25, y: -5 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
              >
                {" "}
                <ListCollaborateursCard
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
              </motion.div>
            ))
          ) : (
            <div>Collaborateurs introuvable</div>
          )}
        </AnimatePresence>
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
