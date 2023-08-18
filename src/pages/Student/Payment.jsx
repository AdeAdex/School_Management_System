import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import "./Payment.css"
import { Badge } from '@mantine/core';
import axios from "axios";

const Payment = ({paid, myEmail, receiptURL}) => {
  const [myImage, setMyImage] = useState("");
  const [cloudImage, setCloudImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [cloudLinkForAdmissionReceipt, setCloudLinkForAdmissionReceipt] = useState(null)

  const handleImageSelect = (e) => {
    setIsLoading(true);
    // console.log(e.target.files[0]);
    let selectedImage = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(selectedImage);
    reader.onload = () => {
      setMyImage(reader.result);
      const endpoint =
        "http://localhost:2000/student_account/upload_admission_receipt";
      axios
        .post(endpoint, { myImage: reader.result, myEmail })
        .then((response) => {
          setIsLoading(false);
          // setCloudImage(response.data.cloudLinkForAdmissionReceipt);
        })
        .catch((err) => {
          console.log(err);
        });
    };
  };

  useEffect(() => {
    setCloudImage(receiptURL);
  }, [receiptURL])
  

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
              src={cloudImage}
              alt="Avatar"
              style={{ width: "100%", height: "100%", borderRadius: "0%" }}
            />
          ) : null} 
        </div>
      </div>
    </div>
    </>
  )
}

export default Payment