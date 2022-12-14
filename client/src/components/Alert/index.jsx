import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import { isEmpty } from "../../services/utils";

const AlertDismissible = ({ title, message, showAlert, variant }) => {
  const [show, setShow] = useState(showAlert);

  return (
    <>
      {show ? (
        <Alert variant={variant} onClose={() => setShow(false)} dismissible>
          <Alert.Heading>{title}</Alert.Heading>
          <p>{message}</p>
        </Alert>
      ) : null}
    </>
  );
};

export default AlertDismissible;
