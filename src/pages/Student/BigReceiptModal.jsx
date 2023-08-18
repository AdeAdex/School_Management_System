import React from "react";

const BigReceiptModal = ({ isOpen, onClose, cloudImage }) => {
  return (
    <>
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={onClose}>
            &times;
          </span>
          <img
            src={!cloudImage ? "/pic/america.png" : cloudImage}
            alt="Avatar"
            style={{ width: "80%", height: "80%" }}
          />
        </div>
      </div>
    </>
  );
};

export default BigReceiptModal;
