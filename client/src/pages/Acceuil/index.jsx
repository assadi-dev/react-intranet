import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  fetchAllCollaborateurAsync,
  getAllCollaborateurs,
  getError,
} from "../../features/collaborateurs/collaborateurSlice";
import useFetchData from "../../hooks/useFetch";
import useStorage from "../../hooks/useStorage";
import { STORAGE_NAME } from "../../services/const";

const Acceuil = () => {
  const dispatch = useDispatch();
  const storage = useStorage(STORAGE_NAME);

  useEffect(() => {
    dispatch(fetchAllCollaborateurAsync())
      .unwrap()
      .catch((rejectedValueOrSerializedError) => {
        dispatch(getError(rejectedValueOrSerializedError.message));
      });
  }, []);

  return <div>Acceuil</div>;
};

export default Acceuil;
