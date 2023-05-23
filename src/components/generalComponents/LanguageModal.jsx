// import { Button, Modal } from "bootstrap";
import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



const LanguageModal = ({ isOpen, onClose }) => {
  return (
    <>
    {/* <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    > */}
      <Modal show={isOpen} onHide={onClose} animation={true} >
        <Modal.Header closeButton>
          <Modal.Title>My Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>This is the modal content.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
          <Button variant="primary">Save Changes</Button>
        </Modal.Footer>
      </Modal>
      {/* </div> */}
    </>
  );
};

export default LanguageModal;
