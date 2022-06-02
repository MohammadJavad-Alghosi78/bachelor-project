import React from "react";
import { Button, Modal } from "react-bootstrap";
import { ModalWrapper } from "./style";

const LoginErrorModal = ({ show = false, handleClose }) => {
  return (
    <ModalWrapper>
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Forbidden
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Your email or password is wrong!</h5>
        </Modal.Body>
        <Modal.Footer>
          <Button size="lg" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </ModalWrapper>
  );
};

export default LoginErrorModal;
