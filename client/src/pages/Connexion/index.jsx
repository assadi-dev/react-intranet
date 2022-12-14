import React from "react";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import {
  EmailEnveloppeIcon,
  LockIcon,
  NetworkWired,
} from "../../assets/svg/connexion";
import useFetchData from "../../hooks/useFetch";
import {
  Cardheader,
  ConnexionContainer,
  ConnexionContentContainer,
  FormBody,
  FormControl,
  HeaderPresentation,
  LogoPresentation,
} from "./connexion.styled";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import InputIIcon from "../../components/form/InputIIcon";
import { useFormik } from "formik";
import AlertDismissible from "../../components/Alert";
import Spinner from "react-bootstrap/Spinner";
import { sleep } from "../../services/utils";
import { useNavigate } from "react-router-dom";
import useStorage from "../../hooks/useStorage";
import { STORAGE_NAME } from "../../services/const";

const Connexion = () => {
  const [isLoading, setLoading] = useState(false);

  const collaborateurs = useFetchData("POST", "/api/Login");
  const storage = useStorage(STORAGE_NAME);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      setLoading(true);
      sleep(2000).then((res) => {
        collaborateurs.fetch({
          email: formik.values.email,
          password: formik.values.password,
        });
      });
    },
  });

  useEffect(() => {
    if (collaborateurs.isReady) setLoading((current) => (current = false));
    if (collaborateurs.data) {
      const { token } = collaborateurs.data;
      const { id, isAdmin, firstname, lastname, photo } =
        collaborateurs.data.user;
      storage.setItem({ token, id, isAdmin, firstname, lastname, photo });

      sleep(2000).then(() => navigate("/", { replace: true }));
    }
  }, [collaborateurs.isReady]);

  return (
    <ConnexionContainer>
      <ConnexionContentContainer>
        <HeaderPresentation className="mb-3">
          <LogoPresentation>
            <span className="icone">
              <NetworkWired />{" "}
            </span>
          </LogoPresentation>
        </HeaderPresentation>
        <Card>
          <Card.Body>
            <Cardheader>
              <h2 className="title">CONNEXION</h2>
              <p className="subtitle ">
                Entrer vos identifiants et mot de passe pour accéder à votre
                compte
              </p>
            </Cardheader>
            <FormBody>
              <form className="mt-3" onSubmit={formik.handleSubmit}>
                <FormControl>
                  <InputIIcon
                    focusBorderColor={"#0d6efd"}
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  >
                    <span>
                      <EmailEnveloppeIcon />
                    </span>
                  </InputIIcon>
                </FormControl>
                <FormControl>
                  <InputIIcon
                    focusBorderColor={"#0d6efd"}
                    name={"password"}
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    type="password"
                  >
                    <span>
                      <LockIcon />
                    </span>
                  </InputIIcon>
                </FormControl>

                <div className="my-3">
                  {/* Message d'alerte en cas d'erreur */}

                  {collaborateurs.errors ? (
                    <AlertDismissible
                      title={"Erreur connexion !"}
                      message={collaborateurs.errors.error}
                      showAlert={collaborateurs.errors ? true : false}
                      variant="danger"
                    />
                  ) : null}

                  {/* Message en cas de success */}
                  {collaborateurs.data ? (
                    <AlertDismissible
                      title={"Connexion Reussi !"}
                      message={collaborateurs.data.success}
                      showAlert={collaborateurs.data ? true : false}
                      variant="success"
                    />
                  ) : null}
                </div>

                <div className="my-3 d-flex justify-content-center">
                  {!collaborateurs.data ? (
                    <Button variant="primary" type="submit">
                      <span className="me-1">
                        {isLoading ? "Connexion en cours" : "Se connecter"}{" "}
                      </span>{" "}
                      {isLoading ? (
                        <Spinner
                          as="span"
                          animation="border"
                          size="sm"
                          role="status"
                          aria-hidden="true"
                        />
                      ) : null}
                    </Button>
                  ) : null}
                </div>
              </form>
            </FormBody>
          </Card.Body>
        </Card>
      </ConnexionContentContainer>
    </ConnexionContainer>
  );
};

export default Connexion;
