import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import { isEmpty } from "../../services/utils";
import { motion } from "framer-motion";

const AlertDismissible = ({ title, message, showAlert, variant }) => {
  const [show, setShow] = useState(showAlert);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {show ? (
          <Alert variant={variant} onClose={() => setShow(false)} dismissible>
            {title && <Alert.Heading>{title}</Alert.Heading>}
            <p style={{ marginBottom: "0" }}>{message}</p>
          </Alert>
        ) : null}
      </motion.div>
    </>
  );
};

export default AlertDismissible;
