import React, { useState, useEffect } from "react";
import { Api } from "../../services/Api";
import axios from "axios";

/**
 * Effectuer une appel api aux serveur
 * @param {String} method Method Https à indinqué Ex: "GET","POST","PUT","DELETE"
 * @param {String} endpoint Url de point d'entrée Ex: /api/collaborateurs
 * @param {Object} headers transmission des les donnée dans l'entete de la requete sous forme d'objet {"content-type": "application/json"},"authorization":"Bearer xyz"}
 * @param {Object} body Donnée à envoyé dans le corp de la requete sous forme d'objet {}
 * @param {Object} params Pramettre de la requete sous forme d'objet {}
 * @returns
 */
const useFetchData = (method, endpoint, headers, body, params) => {
  const [state, setState] = useState({
    isReady: false,
    data: null,
    errors: null,
    fetch: () => {},
    cancel: () => {},
  });

  useEffect(() => {
    const controller = new AbortController();
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const config = {
      method,
      url: endpoint,
      data: body,
      headers,
      params,
      cancelToken: source.token,
      signal: controller.signal,
    };

    const fetchData = async (body) => {
      setState((prevState) => ({
        ...prevState,
        data: null,
        isReady: false,
        errors: null,
      }));

      try {
        const result = await Api.request({ ...config, data: body });

        setState((prevState) => ({
          ...prevState,
          data: result.data,
          isReady: true,
          errors: null,
        }));
      } catch (error) {
        if (error.response) {
          setState((prevState) => ({
            ...prevState,
            data: null,
            errors: error.response.data,
            isReady: true,
          }));
        } else {
          setState((prevState) => ({
            ...prevState,
            data: null,
            errors: error.message,
            isReady: true,
          }));
        }
      }
    };

    setState((prevState) => ({
      ...prevState,
      fetch: fetchData,
      cancel: () => source.cancel("la requete à été annuler par l'utilisateur"),
    }));

    return () => {
      controller.abort();
    };
  }, []);

  return {
    data: state.data,
    isReady: state.isReady,
    errors: state.errors,
    fetch: (body) => state.fetch(body),
    cancel: state.cancel,
  };
};

export default useFetchData;
