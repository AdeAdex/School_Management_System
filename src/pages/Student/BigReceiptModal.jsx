import React from "react";
import Modal from "react-bootstrap/Modal";


const BigReceiptModal = ({ isOpen, onClose, cloudImage }) => {
  return (
    <>
    <Modal show={isOpen} onHide={onClose} animation={true}>
        <Modal.Header className="bg-white text-dark">
          <Modal.Title className="text-uppercase text-center mx-auto">
            My  Receipt
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-uppercase">
        <img
            src={cloudImage}
            alt="Avatar"
            style={{ width: "100%", height: "100%" }}
          />
        </Modal.Body>
      
      </Modal>
      </>
  );
};

export default BigReceiptModal;
