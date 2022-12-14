import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAllCollaborateurs } from "../../features/collaborateurs/collaborateurSlice";
import useFetchData from "../../hooks/useFetch";
import useStorage from "../../hooks/useStorage";
import { STORAGE_NAME } from "../../services/const";

const Acceuil = () => {
  const dispatch = useDispatch();
  const storage = useStorage(STORAGE_NAME);
  const [token, setToken] = useState("");
  const fetchRandomUser = useFetchData("GET", "/api/collaborateurs/random", {
    headers: {
      "Content-Type": "application/",
      authorization: `Bearer ${token}`,
    },
  });
  if (storage.data) {
  }

  useEffect(() => {
    setToken(storage.data.token);
  }, [fetchRandomUser.isReady, storage.data]);

  return <div>Acceuil</div>;
};

export default Acceuil;
