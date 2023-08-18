import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import "./Payment.css"
import { Badge } from '@mantine/core';
import axios from "axios";
import BigReceiptModal from './BigReceiptModal';

const Payment = ({paid, myEmail, receiptURL}) => {
  const [myImage, setMyImage] = useState("");
  const [cloudImage, setCloudImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleImageSelect = (e) => {
    setIsLoading(true);
    let selectedImage = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(selectedImage);
    reader.onload = () => {
      setMyImage(reader.result);
      const endpoint =
        "https://school-portal-backend-adex2210.vercel.app/student_account/upload_admission_receipt";
      axios
        .post(endpoint, { myImage: reader.result, myEmail })
        .then((response) => {
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    };
  };

  useEffect(() => {
    setCloudImage(receiptURL);
  }, [receiptURL])
  

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
    <div className="payment-card">
      <div className="status">
        <div className={`status-value w-100 ${paid ? 'paid' : 'not-paid'}`}>
          <span>Application Fee:</span>
          <Badge variant="gradient" gradient={{ from: 'teal', to: paid ? 'blue' : 'orangered', deg: 60 }}>{paid ? 'Paid' : 'Not Paid'}</Badge>
        </div>
      </div>
      <div className="amount">
        <span>Amount Paid:</span> <small className="fw-bold">₦5000</small>
      </div>
      <div className="method">
        <span>Payment Method:</span> <small className="fw-bold">Card</small>
      </div>
      <div className="payment-slip">
        <span>Payment Slip:</span>
        <small className="fw-bold">Upload your payment slip here</small>
        <input type="file" accept="image/*" onChange={handleImageSelect} />
        <div className="selected-image">
        {isLoading ? (
            <div className="ping"></div>
          ) : cloudImage != null ? (
            <img
              src={!cloudImage ? "/pic/america.png" : cloudImage}
              alt="Avatar"
              style={{ width: "10%", height: "10%", borderRadius: "0%" }}
              onClick={openModal}
            />
          ) : null} 
        </div>
      </div>
      {isModalOpen && (
      <BigReceiptModal cloudImage={cloudImage} onClose={closeModal} />
      )}
    </div>
    </>
  )
}

export default Payment