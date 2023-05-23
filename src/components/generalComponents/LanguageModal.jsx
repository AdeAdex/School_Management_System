// import { Button, Modal } from "bootstrap";
import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



const LanguageModal = ({ isOpen, onClose }) => {
  return (
    <>
      <Modal show={isOpen} onHide={onClose} animation={true} 
      centered>
        <Modal.Header closeButton className="bg-danger text-white">
          <Modal.Title className="text-uppercase">language</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-uppercase">
          <p className="d-flex justify-content-between">
            <span className="my-auto">english</span>
            <img src="pic/america.png" style={{width: '30px', height: '30px', borderRadius: '10px'}} alt="" />
          </p>
          <hr />
          <p className="d-flex justify-content-between">
            <span className="my-auto">yoruba</span>
            <img src="pic/nigeria.png" style={{width: '30px', height: '30px', borderRadius: '10px'}} alt="" />
          </p>
          <hr />
          <p className="d-flex justify-content-between">
            <span className="my-auto">igbo</span>
            <img src="pic/america.png" style={{width: '30px', height: '30px', borderRadius: '10px'}} alt="" />
          </p>
          <hr />
          <p className="d-flex justify-content-between">
            <span className="my-auto">tiv</span>
            <img src="pic/america.png" style={{width: '30px', height: '30px', borderRadius: '10px'}} alt="" />
          </p>
          <hr />
          <p className="d-flex justify-content-between">
            <span className="my-auto">Ibibio</span>
            <img src="pic/america.png" style={{width: '30px', height: '30px', borderRadius: '10px'}} alt="" />
          </p>
          <hr />
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
          <Button variant="primary">Save Changes</Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
};

export default LanguageModal;
