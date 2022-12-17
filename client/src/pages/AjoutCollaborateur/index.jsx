import { useFormik } from "formik";
import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useDispatch } from "react-redux";
import { fetchAddCollaborateurAsync } from "../../features/collaborateurs/collaborateurAsyncAction";
import { getError } from "../../features/collaborateurs/collaborateurSlice";
import {
  FormBody,
  FormHeaderSection,
  FormUserContainer,
  PreviewPhoto,
} from "./FormCollaborateur.styled";
import { Helmet } from "react-helmet";

const AjoutCollaborateur = () => {
  const dispatch = useDispatch();

  //Validation des donné avant le submit des données

  const validate = (values) => {
    const errors = {};
    if (!values.firstname) {
      errors.firstname = "Le prénom est obligatoire";
    }

    if (!values.lastname) {
      errors.lastname = "Le nom est obligatoire";
    }

    if (!values.email) {
      errors.email = "Email est obligatoire";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Email invalide";
    }
    if (!values.password) {
      errors.password = "le mot de passe est obligatoire";
    }
    if (values.password.length < 8) {
      errors.password = "Le mot de passe doit être aux minimum 8 caractère";
    }

    if (!values.phone) {
      errors.phone = "Le téléphone est obligatoire";
    }
    if (!values.birthdate) {
      errors.birthdate = "La date de naissance est obligatoire";
    }
    if (!values.city) {
      errors.city = "La ville est obligatoire";
    }
    if (!values.country) {
      errors.country = "Le Pays est obligatoire";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      gender: "male",
      firstname: "",
      lastname: "",
      password: "",
      email: "",
      phone: "",
      birthdate: "",
      city: "",
      country: "",
      photo: "",
      service: "Client",
    },
    validate,
    onSubmit: (values) => {
      dispatch(fetchAddCollaborateurAsync(values))
        .unwrap()
        .then(() => {
          formik.handleReset();
          alert("Collaborateur Ajouté");
        })
        .catch((error) => {
          console.log(error);
          let errormessage = "";
          if (error.response) {
            errormessage = error.response.data.errors;
          } else {
            errormessage = error.message;
          }
          dispatch(getError(errormessage));
        });
    },
  });

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Ajouter - React-Intranet</title>
      </Helmet>

      <FormUserContainer>
        <FormHeaderSection className="mb-5">
          <h2>Ajouter un utilisateur</h2>
        </FormHeaderSection>
        <Form onSubmit={formik.handleSubmit}>
          <FormBody>
            <div>
              {/* Prévisualisation de l'image à l'aut de l'url dans le champs photo */}
              <PreviewPhoto
                className="mb-3"
                img={formik.values.photo}
              ></PreviewPhoto>
              <Form.Group className="mb-3" controlId="formBasicphoto">
                <Form.Control
                  type="text"
                  placeholder="URL de la photo"
                  name="photo"
                  onChange={formik.handleChange}
                  value={formik.values.photo}
                />
              </Form.Group>
            </div>

            <div>
              {/**Nom et Prénom section */}
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formBasicLastname">
                  <Form.Label>Nom</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Nom"
                    name="lastname"
                    onChange={formik.handleChange}
                    value={formik.values.lastname}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.lastname && formik.errors.lastname ? (
                    <Form.Text style={{ color: "var(--bs-danger)" }}>
                      {formik.errors.lastname}
                    </Form.Text>
                  ) : (
                    <Form.Text className="text-muted">
                      *champs obligatoire
                    </Form.Text>
                  )}
                </Form.Group>

                <Form.Group as={Col} controlId="formBasicFirstname">
                  <Form.Label>Prénom</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Prénom"
                    name="firstname"
                    onChange={formik.handleChange}
                    value={formik.values.firstname}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.firstname && formik.errors.firstname ? (
                    <Form.Text style={{ color: "var(--bs-danger)" }}>
                      {formik.errors.firstname}
                    </Form.Text>
                  ) : (
                    <Form.Text className="text-muted">
                      *champs obligatoire
                    </Form.Text>
                  )}
                </Form.Group>
              </Row>
              {/** Civilité et Date de naissance */}
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formBasicGender">
                  <Form.Label>Civilité</Form.Label>
                  <Form.Select
                    name="gender"
                    onChange={formik.handleChange}
                    value={formik.values.gender}
                  >
                    <option value="male">Homme</option>
                    <option value="female">Femme</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formBasicBithdate">
                  <Form.Label>Date de naissance</Form.Label>
                  <Form.Control
                    type="date"
                    placeholder="Prénom"
                    name="birthdate"
                    onChange={formik.handleChange}
                    value={formik.values.birthdate}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.birthdate && formik.errors.birthdate ? (
                    <Form.Text style={{ color: "var(--bs-danger)" }}>
                      {formik.errors.birthdate}
                    </Form.Text>
                  ) : (
                    <Form.Text className="text-muted">
                      *champs obligatoire
                    </Form.Text>
                  )}
                </Form.Group>
              </Row>

              {/**ville et Pays */}
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formBasicCity">
                  <Form.Label>Ville</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ville"
                    name="city"
                    onChange={formik.handleChange}
                    value={formik.values.city}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.city && formik.errors.city ? (
                    <Form.Text style={{ color: "var(--bs-danger)" }}>
                      {formik.errors.city}
                    </Form.Text>
                  ) : (
                    <Form.Text className="text-muted">
                      *champs obligatoire
                    </Form.Text>
                  )}
                </Form.Group>

                <Form.Group as={Col} controlId="formBasicCountry">
                  <Form.Label>Pays</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Pays"
                    name="country"
                    onChange={formik.handleChange}
                    value={formik.values.country}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.country && formik.errors.country ? (
                    <Form.Text style={{ color: "var(--bs-danger)" }}>
                      {formik.errors.country}
                    </Form.Text>
                  ) : (
                    <Form.Text className="text-muted">
                      *champs obligatoire
                    </Form.Text>
                  )}
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="formBasicService">
                <Form.Label>Catégorie</Form.Label>
                <Form.Select
                  name="service"
                  onChange={formik.handleChange}
                  value={formik.values.service}
                >
                  <option value="Client">Client</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Technique">Technique</option>
                </Form.Select>
              </Form.Group>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="abcdef@abcdef.com"
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <Form.Text style={{ color: "var(--bs-danger)" }}>
                      {formik.errors.email}
                    </Form.Text>
                  ) : (
                    <Form.Text className="text-muted">
                      *champs obligatoire
                    </Form.Text>
                  )}
                </Form.Group>
                <Form.Group as={Col} controlId="formBasicPassword">
                  <Form.Label>Mot de passe</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Mot de passe"
                    name="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <Form.Text style={{ color: "var(--bs-danger)" }}>
                      {formik.errors.password}
                    </Form.Text>
                  ) : (
                    <Form.Text className="text-muted">
                      *champs obligatoire
                    </Form.Text>
                  )}
                </Form.Group>
              </Row>
              <Form.Group className="mb-3" controlId="formBasicPhone">
                <Form.Label>Téléphone</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="07-89-01-23-45"
                  name="phone"
                  onChange={formik.handleChange}
                  value={formik.values.phone}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.phone && formik.errors.phone ? (
                  <Form.Text style={{ color: "var(--bs-danger)" }}>
                    {formik.errors.phone}
                  </Form.Text>
                ) : (
                  <Form.Text className="text-muted">
                    *champs obligatoire
                  </Form.Text>
                )}
              </Form.Group>
              <div className="d-flex justify-content-center">
                <Button variant="primary" type="submit">
                  Ajouter
                </Button>
              </div>
            </div>
          </FormBody>
        </Form>
      </FormUserContainer>
    </>
  );
};

export default AjoutCollaborateur;
