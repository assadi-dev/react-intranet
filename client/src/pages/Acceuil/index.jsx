import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRandomCollaborateurAsync } from "../../features/collaborateurs/collaborateurAsyncAction";
import {
  getError,
  randomCollaborateurs,
  errorsCollaborateurs,
} from "../../features/collaborateurs/collaborateurSlice";
import {
  AccueilCollab,
  AccueilWrapper,
  AlertZone,
} from "../AjoutCollaborateur/Accueil.styled";
import Alert from "../../components/Alert";
import { isEmpty } from "../../services/utils";

const Acceuil = () => {
  const dispatch = useDispatch();
  const random = useSelector((state) => randomCollaborateurs(state));
  const errors = useSelector((state) => errorsCollaborateurs(state));
  const [state, setState] = useState({
    isLoading: true,
  });

  useEffect(() => {
    dispatch(fetchRandomCollaborateurAsync())
      .unwrap()
      .catch((error) => dispatch(getError(error.message)));
  }, []);

  const stateError = isEmpty(errors) ? false : true;

  return (
    <AccueilWrapper>
      <AlertZone>
        {errors ? (
          <Alert variant="danger" message={errors} showAlert={stateError} />
        ) : null}
      </AlertZone>
      <AccueilCollab>Acceuil {random.firstname} </AccueilCollab>
    </AccueilWrapper>
  );
};

export default Acceuil;
