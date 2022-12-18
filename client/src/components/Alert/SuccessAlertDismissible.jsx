import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import { isEmpty } from "../../services/utils";
import { AnimatePresence, motion } from "framer-motion";

const SuccessAlertDismissible = ({
  title,
  message,
  showAlert,
  variant,
  onHide,
}) => {
  return (
    <AnimatePresence>
      {showAlert ? (
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -25 }}
          transition={{ duration: 0.3 }}
        >
          <Alert variant={variant} onClose={onHide} dismissible>
            {title && <Alert.Heading>{title}</Alert.Heading>}
            <p style={{ marginBottom: "0" }}>{message}</p>
          </Alert>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default SuccessAlertDismissible;
