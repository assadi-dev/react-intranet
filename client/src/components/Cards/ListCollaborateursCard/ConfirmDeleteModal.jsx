import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import AlertDismissible from "../../Alert";
import { useDispatch, useSelector } from "react-redux";
import { fetchDeleteCollaborateurAsync } from "../../../features/collaborateurs/collaborateurAsyncAction";
import { AvatarContainer } from "../Card.styled";

const ConfirmDeleteModal = ({ id, onHide, textConfirm, photo, ...props }) => {
  const [showAlert, setShowAlert] = useState(false);
  const dispatch = useDispatch();
  const [ErrorAction, setErroAction] = useState("");

  const handleDelete = () => {
    setErroAction("");
    setShowAlert(false);

    dispatch(fetchDeleteCollaborateurAsync(id))
      .unwrap()
      .then(() => {
        onHide();
      })
      .catch((error) => {
        let errorMessage = "";
        if (error.response) {
          errorMessage = error.response.data.error;
        } else {
          errorMessage = error.message;
        }
        setErroAction(errorMessage);
        setShowAlert(true);
      });
  };

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <div className="header-text">
          <div className="d-flex justify-content-center">
            <AvatarContainer img={photo} className="avatarlistContainer" />
          </div>
          <p className="text-center"> {textConfirm}</p>
        </div>
        <div className="my-2">
          {ErrorAction.length > 0 && (
            <AlertDismissible
              variant="danger"
              showAlert={showAlert}
              message={ErrorAction}
            />
          )}
        </div>
        <div className="d-flex justify-content-center">
          <Button variant="danger" className="me-3" onClick={onHide}>
            Annuler
          </Button>{" "}
          <Button onClick={handleDelete} variant="success">
            Confirmer
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ConfirmDeleteModal;
