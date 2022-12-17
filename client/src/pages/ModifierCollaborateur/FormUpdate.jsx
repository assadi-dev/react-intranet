import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import {
  FormBody,
  PreviewPhoto,
} from "../AjoutCollaborateur/FormCollaborateur.styled";
import {
  getError,
  selectedCollaborateurs,
} from "../../features/collaborateurs/collaborateurSlice";
import { fetchUpdateCollaborateurAsync } from "../../features/collaborateurs/collaborateurAsyncAction";

const FormUpdate = () => {
  const useSelected = useSelector((state) => selectedCollaborateurs(state));
  const {
    id,
    gender,
    firstname,
    lastname,
    email,
    phone,
    birthdate,
    city,
    country,
    photo,
    service,
  } = useSelected;

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

    if (values.password.length > 0 && values.password.length < 8) {
      errors.password = "Le mot de passe doit être aux minimum 8 caractère";
    }

    if (values.confirm.length > 0 && values.confirm != values.password) {
      errors.confirm = "La confirmation doit être identique au mot de passe";
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
    enableReinitialize: true,
    initialValues: {
      gender,
      firstname,
      lastname,
      email,
      phone,
      birthdate,
      city,
      country,
      photo,
      service,
      isAdmin: "",
      password: "",
      confirm: "",
    },
    validate,
    onSubmit: (values) => {
      //Reorganisation des données avant l'envoie
      const {
        gender,
        firstname,
        lastname,
        email,
        phone,
        birthdate,
        city,
        country,
        photo,
        service,
      } = values;

      //Dans le cas ou l'utilisateur n'a pas entrer de mot de passe et les droit admin j'envoie les donnéés sans les inclure

      let dataToSend = {
        gender,
        firstname,
        lastname,
        email,
        phone,
        birthdate,
        city,
        country,
        photo,
        service,
      };

      //Dans le cas ou l'utilisateur n'a pas defini les droit admin j'envoie les donnéés sans l' inclure si la valeur est vide sinon je l'ajoute
      if (values.isAdmin.length > 0) {
        dataToSend = { ...dataToSend, isAdmin: values.isAdmin };
      }

      //Dans le cas ou l'utilisateur n'a pas defini un mot de passe j'envoie les donnéés sans l' inclure si la valeur est vide sinon je l'ajoute
      if (values.password.length > 0) {
        dataToSend = { ...dataToSend, password: values.password };
      }

      dispatch(fetchUpdateCollaborateurAsync({ id: id, data: dataToSend }))
        .unwrap()
        .then(() => {
          formik.handleReset();
          alert("le Collaborateur à été mise à jour");
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
    <Form onSubmit={formik.handleSubmit} className="pb-3">
      <FormBody>
        <div>
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
          <Row>
            <Form.Group
              as={Col}
              className="mb-3"
              xs={12}
              md={6}
              controlId="formBasicLastname"
            >
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

            <Form.Group
              as={Col}
              className="mb-3"
              xs={12}
              md={6}
              controlId="formBasicFirstname"
            >
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
          <Row>
            <Form.Group
              className="mb-3"
              as={Col}
              xs={12}
              md={6}
              controlId="formBasicGender"
            >
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

            <Form.Group
              className="mb-3"
              as={Col}
              xs={12}
              md={6}
              controlId="formBasicBithdate"
            >
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
          <Row>
            <Form.Group
              className="mb-3"
              as={Col}
              xs={12}
              md={6}
              controlId="formBasicCity"
            >
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

            <Form.Group
              className="mb-3"
              as={Col}
              xs={12}
              md={6}
              controlId="formBasicCountry"
            >
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

          <Form.Group className="mb-3" controlId="formBasicEmail">
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
              <Form.Text className="text-muted">*champs obligatoire</Form.Text>
            )}
          </Form.Group>

          <Row>
            <Form.Group
              as={Col}
              xs={12}
              md={6}
              className="mb-3"
              controlId="formBasicPassword"
            >
              <Form.Label>Mot de passe</Form.Label>
              <Form.Control
                type="password"
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
                <Form.Text>Doit contenir au moins 8 caractères</Form.Text>
              )}
            </Form.Group>
            <Form.Group
              as={Col}
              xs={12}
              md={6}
              className="mb-3"
              controlId="formBasicConfirm"
            >
              <Form.Label>Confirmation</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirmer le mot de passe"
                name="confirm"
                onChange={formik.handleChange}
                value={formik.values.confirm}
                onBlur={formik.handleBlur}
              />
              {formik.touched.confirm && formik.errors.confirm ? (
                <Form.Text style={{ color: "var(--bs-danger)" }}>
                  {formik.errors.confirm}
                </Form.Text>
              ) : null}
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
              <Form.Text className="text-muted">*champs obligatoire</Form.Text>
            )}
          </Form.Group>
          <div className="d-flex justify-content-center">
            <Button variant="primary" type="submit">
              Mettre à jours
            </Button>
          </div>
        </div>
      </FormBody>
    </Form>
  );
};

export default FormUpdate;
