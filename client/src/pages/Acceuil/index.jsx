import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRandomCollaborateurAsync } from "../../features/collaborateurs/collaborateurAsyncAction";
import {
  getError,
  randomCollaborateurs,
  errorsCollaborateurs,
  statusCollaborateurs,
} from "../../features/collaborateurs/collaborateurSlice";
import {
  AccueilCollab,
  AccueilWrapper,
  AlertZone,
  FooterSections,
} from "./Accueil.styled";
import Alert from "../../components/Alert";
import { getAge, isEmpty } from "../../services/utils";
import CollaborateursCard from "../../components/Cards/CollaborateursCard";
import Button from "react-bootstrap/Button";

const Acceuil = () => {
  const dispatch = useDispatch();
  const random = useSelector((state) => randomCollaborateurs(state));
  const errors = useSelector((state) => errorsCollaborateurs(state));
  const statusState = useSelector((state) => statusCollaborateurs(state));
  const [state, setState] = useState({
    isLoading: true,
  });

  useEffect(() => {
    dispatch(fetchRandomCollaborateurAsync())
      .unwrap()
      .catch((error) => dispatch(getError(error.message)));
  }, []);

  const stateError = isEmpty(errors) ? false : true;
  const LoadAnotherCollab = () => {
    dispatch(fetchRandomCollaborateurAsync())
      .unwrap()
      .catch((error) => dispatch(getError(error.message)));
  };

  return (
    <AccueilWrapper>
      <AlertZone>
        {errors ? (
          <Alert variant="danger" message={errors} showAlert={stateError} />
        ) : null}
      </AlertZone>
      <AccueilCollab>
        {statusState == "completed" ? (
          <CollaborateursCard
            name={`${random.firstname} ${random.lastname}`}
            birthdate={random.birthdate}
            from={`${random.city}, ${random.country}`}
            photo={`${random.photo}`}
          />
        ) : null}
      </AccueilCollab>

      <FooterSections>
        <Button
          className="responsive-btn"
          variant="primary"
          onClick={LoadAnotherCollab}
        >
          DIRE BONJOUR A QUELQU'UN D'AUTRE
        </Button>
      </FooterSections>
    </AccueilWrapper>
  );
};

export default Acceuil;
