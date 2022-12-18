import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import AlertDismissible from "../../components/Alert";
import { fetchOneCollaborateurAsync } from "../../features/collaborateurs/collaborateurAsyncAction";
import {
  errorsCollaborateurs,
  getError,
  statusCollaborateurs,
} from "../../features/collaborateurs/collaborateurSlice";
import { extractIduser, isEmpty } from "../../services/utils";
import {
  FormHeaderSection,
  FormUserContainer,
} from "../AjoutCollaborateur/FormCollaborateur.styled";
import FormUpdate from "../ModifierCollaborateur/FormUpdate";
import { motion } from "framer-motion";

const Profile = () => {
  const dispatch = useDispatch();

  const status = useSelector((state) => statusCollaborateurs(state));
  const errorContent = useSelector((state) => errorsCollaborateurs(state));

  useEffect(() => {
    let id = extractIduser();
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
  }, []);

  //Action à effectuer dans le cas ou il ny'a pas d'erreurs'
  const RenderView = () => {
    return <>{status == "completed" ? <FormUpdate /> : <></>}</>;
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Mon profil - React-Intranet</title>
      </Helmet>
      {/* Formulaire Modification de Profile */}

      <FormUserContainer>
        <FormHeaderSection className="mb-5">
          <motion.h2
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25 }}
            exit={{ opacity: 0, x: -25 }}
          >
            Mon Profil
          </motion.h2>
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

export default Profile;
