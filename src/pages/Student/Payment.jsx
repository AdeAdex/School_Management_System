import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./Payment.css";
import { Badge } from "@mantine/core";
import axios from "axios";
import BigReceiptModal from "./BigReceiptModal";

const Payment = ({ paid, myEmail, receiptURL, receiptDate, lastName, firstName }) => {
  const [myImage, setMyImage] = useState("");
  const [cloudImage, setCloudImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

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
          openModal();
        })
        .catch((err) => {
          console.log(err);
        });
    };
  };

  useEffect(() => {
    setCloudImage(receiptURL);
  }, [receiptURL]);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className="payment-card">
        <div className="status">
          <div className={`status-value w-100 ${paid ? "paid" : "not-paid"}`}>
            <span>Application Fee:</span>
            <Badge
              variant="gradient"
              gradient={{
                from: "teal",
                to: paid ? "blue" : "orangered",
                deg: 60,
              }}
            >
              {paid ? "Paid" : "Not Paid"}
            </Badge>
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
          {isLoading ? ( // Display ping while isLoading
            <div className="ping"></div>
          ) : cloudImage ? ( 
          <div className="give-it-a-class-name text-white">
          <div className="card-content">
          <div className="name-date">
            <div className="name">{lastName} {" "} {firstName}</div>
            <div className="date my-3 text-white"><span className="my-auto">Uploaded:</span> <small className="my-auto">{receiptDate}</small></div>
          </div>
          <div className="selected-image">
              <div
                className="admission-receipt"
                style={{ width: "20%", height: "80px", borderRadius: "0%" }}
                onClick={openModal}
              >
                <img src={cloudImage} alt="Avatar" className="hover-img" />
                <div class="cover-container">
                <img src={cloudImage} alt="" className="cover-img" />
                  <p className="cover-txt" style={{ fontSize: "12px" }}>
                    Hover & Click{" "}
                  </p>
                </div>
              </div>
            </div>
        </div>
          
          </div>
            
          ) : (
            // Display arrow if no image is selected
            <div className="arrow">
              <span className="arrow-span"></span>
              <span className="arrow-span"></span>
              <span className="arrow-span"></span>
            </div>
          )}
        </div>
      </div>

      {modalOpen && (
        <BigReceiptModal
          cloudImage={cloudImage}
          isOpen={modalOpen}
          onClose={closeModal}
        />
      )}
    </>
  );
};

export default Payment;


{/* <div className="selected-image">
              <div
                className="admission-receipt"
                style={{ width: "20%", height: "80px", borderRadius: "0%" }}
                onClick={openModal}
              >
                <img src={cloudImage} alt="Avatar" className="hover-img" />
                <div class="cover-container">
                <img src={cloudImage} alt="" className="cover-img" />
                  <p className="cover-txt" style={{ fontSize: "12px" }}>
                    Hover & Click{" "}
                  </p>
                </div>
              </div>
            </div> */}