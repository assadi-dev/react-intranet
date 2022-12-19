import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListCollaborateursCard from "../../components/Cards/ListCollaborateursCard";
import { fetchAllCollaborateurAsync } from "../../features/collaborateurs/collaborateurAsyncAction";
import {
  allCollaborateurs,
  errorsCollaborateurs,
  statusCollaborateurs,
} from "../../features/collaborateurs/collaborateurSlice";
import { isEmpty, sleep } from "../../services/utils";
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
  const [readyToshow, setReadyToshow] = useState(false);

  useEffect(() => {
    dispatch(fetchAllCollaborateurAsync())
      .unwrap()
      .then(() => {
        if (getStatus == "completed")
          sleep(3000).then(() => setReadyToshow(true));
      })
      .catch((error) => dispatch(getError(error.message)));
  }, []);

  /**Composant Qui consiste à Affiché la listes des composant  */
  const RenderList = () => {
    return (
      <>
        <AnimatePresence>
          {!isEmpty(getAllCollaborateurs) ? (
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
        {readyToshow ? <RenderList /> : <div>Chargement en cours</div>}
      </RowlistCollabContainer>
    </ListCollaborateursCardContainer>
  );
};

export default ListCollaborateurs;
