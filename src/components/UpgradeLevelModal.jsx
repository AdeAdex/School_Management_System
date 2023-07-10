import React from 'react'
import Modal from "react-bootstrap/Modal";


const UpgradeLevelModal = ({ isOpen, onClose, personEmail, studentClass, classPrefix}) => {
  return (
    <>
    <div>
    <Modal show={isOpen} onHide={onClose} animation={true}>
        <Modal.Header className="bg-white text-dark">
          <Modal.Title className="text-uppercase text-center mx-auto">
            upgrade class
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-uppercase">
        {personEmail} {studentClass}
        <div></div>
        </Modal.Body>
        </Modal>
    </div>
    </>
  )
}

export default UpgradeLevelModal