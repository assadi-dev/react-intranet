import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { fetchOneCollaborateurAsync } from "../../features/collaborateurs/collaborateurAsyncAction";
import {
  getError,
  errorsCollaborateurs,
  statusCollaborateurs,
  selectedCollaborateurs,
  resetSelected,
} from "../../features/collaborateurs/collaborateurSlice";
import {
  FormBody,
  FormHeaderSection,
  FormUserContainer,
  PreviewPhoto,
} from "../AjoutCollaborateur/FormCollaborateur.styled";
import { useParams } from "react-router-dom";
import FormUpdate from "./FormUpdate";
import AlertDismissible from "../../components/Alert";
import { isEmpty } from "../../services/utils";

const ModifierCollaborateur = () => {
  //Récuperation de l'id de l'utilisateurs
  const { id } = useParams();

  const dispatch = useDispatch();

  const status = useSelector((state) => statusCollaborateurs(state));
  const errorContent = useSelector((state) => errorsCollaborateurs(state));

  useEffect(() => {
    dispatch(fetchOneCollaborateurAsync(id))
      .unwrap()
      .catch((error) => {
        let errorMessage = "";
        if (error.response) {
          errorMessage = error.response.data.error;
        } else {
          errorMessage = error.message;
        }
        dispatch(getError(errorMessage));
      });

    //Action à effectuer au moment de l'unmout du composants
    return () => {
      dispatch(resetSelected());
    };
  }, []);

  //Action à effectuer dans le cas ou il ny'a pas d'erreurs'
  const RenderView = () => {
    return <>{status == "completed" ? <FormUpdate /> : <></>}</>;
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Modifier - React-Intranet</title>
      </Helmet>

      {/* Formulaire Admin */}

      <FormUserContainer>
        <FormHeaderSection className="mb-5">
          <h2>Modifier un utilisateur</h2>
        </FormHeaderSection>
        {/* Formulaire de modification */}

        {!isEmpty(errorContent) ? (
          <>
            <AlertDismissible
              message={errorContent}
              showAlert={true}
              variant="danger"
            />
          </>
        ) : (
          <RenderView />
        )}
      </FormUserContainer>
    </>
  );
};

export default ModifierCollaborateur;
