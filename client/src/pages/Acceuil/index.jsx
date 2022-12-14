import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRandomCollaborateurAsync } from "../../features/collaborateurs/collaborateurAsyncAction";
import {
  getError,
  randomCollaborateurs,
  errorsCollaborateurs,
} from "../../features/collaborateurs/collaborateurSlice";

const Acceuil = () => {
  const dispatch = useDispatch();
  const random = useSelector((state) => randomCollaborateurs(state));
  const errors = useSelector((state) => errorsCollaborateurs(state));

  useEffect(() => {
    dispatch(fetchRandomCollaborateurAsync())
      .unwrap()
      .catch((error) => dispatch(getError(error.message)));
  }, []);

  return <div>Acceuil {random.firstname} </div>;
};

export default Acceuil;
