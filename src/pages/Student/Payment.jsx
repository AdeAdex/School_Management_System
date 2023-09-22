import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./Payment.css";
import { Badge } from "@mantine/core";
import axios from "axios";
import BigReceiptModal from "./BigReceiptModal";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Payment = ({
  paid,
  myEmail,
  receiptURL,
  receiptDate,
  lastName,
  firstName,
}) => {
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

  const payWithPaystack = () => {
    let handler = PaystackPop.setup({
      key: "pk_test_a70c6dbb491c1021f98ea8cf0b840542607c2537",
      email: myEmail,
      amount: 5000 * 100,
      ref: "Adex" + Math.floor(Math.random() * 1000000000 + 1),
      onClose: function () {
        let message = "You just cancel this transaction";
        Swal.fire({
          icon: "error",
          title: "Dear " + firstName,
          text: message,
          footer:
            "For further assistance, please call us at +2347033959586 or email us at adeoluamole@gmail.com",
        });
      },
      callback: function (response) {
        let message =
          "Payment completed! Your Reference Number is: " + response.reference;
        Swal.fire({
          icon: "success",
          title: "Thank You " + firstName,
          text: message,
          footer: "",
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.reload();
          }
        });
        
        if (response.status === "success") {
          let payload = {
            myEmail: myEmail,
            justPaid: true,
            amount: 5000,
            reference: response.reference
          };
          let endpoint =
            "http://localhost:2000/student_account/paidAdmissionFee";
          axios
            .post(endpoint, payload)
            .then((response) => {
              if (response.data.status) {
                localStorage.setItem("currentPaidState", true);
                console.log(response.data.message);
              }
            })
            .catch((err) => {
              console.log(err);
            });
        }
      },
    });

    handler.openIframe();
  };

  const [payType, setPayType] = useState("card");
  const [myChoice, setMyChoice] = useState(true)

  const handleChange = (event) => {
    setPayType(event.target.value);
    if (event.target.value === "card") {
      setMyChoice(true)
    } else {
      setMyChoice(false)
    }
  };

  const payForAdmission = () => {
    payWithPaystack();
  }
  

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
          {paid ? (
            <>
              <span>Amount Paid:</span> <small className="fw-bold">₦5000</small>
            </>
          ) : (
            <>
              <span>Amount to be Paid:</span>{" "}
              <small className="fw-bold">₦5000</small>
            </>
          )}
        </div>
        <div className="method">
          {paid ? (
            <>
              <Box sx={{ width: "100%", marginTop: "30px", minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel
                    id="demo-simple-select-label"
                    style={{ fontSize: "22px" }}
                  >
                    Pay Method
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={payType}
                    label="Pay Method"
                    onChange={handleChange}
                    disabled={payType !== ""}
                  >
                    <MenuItem value="card">
                      {payType === "card" ? "✓ Debit Card" : "Debit Card"}
                    </MenuItem>
                    <MenuItem value="slip">
                      {payType === "slip"
                        ? "✓ Payment Slip Upload"
                        : "Payment Slip Upload"}
                    </MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </>
          ) : (
            <>
              <Box sx={{ width: "100%", marginTop: "30px", minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel
                    id="demo-simple-select-label"
                    style={{ fontSize: "22px" }}
                  >
                    Pay Method
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={payType}
                    label="Pay Method"
                    onChange={handleChange}
                  >
                    <MenuItem value="card">Debit Card</MenuItem>
                    <MenuItem value="slip">Payment Slip Upload</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </>
          )}
        </div>
        {myChoice ? (
          <>
          <div className="give-it-a-class-name text-white">
              <div className="card-content">
                <div className="name-date d-flex flex-column">
                <div className="ms-auto mb-2">Card</div>
                  <div className="name">
                    {lastName} {firstName}
                  </div>
                  {paid ? (
                  <button onClick={payForAdmission} className="btn pay-btn mt-3 mx-auto px-5" style={{ backgroundColor: 'green' }} disabled>✓ Paid ₦5000</button>
                  ) : (
                    
                  <button onClick={payForAdmission} className="btn pay-btn mt-3 mx-auto px-5" style={{ backgroundColor: 'white' }}>Pay ₦5000</button>
                  )}
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
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
                  <div className="name">
                    {lastName} {firstName}
                  </div>
                  <div className="date my-3 text-white">
                    <span className="my-auto">Uploaded:</span>{" "}
                    <small className="my-auto">{receiptDate}</small>
                  </div>
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
          </>
        )}
        
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




{/* <div className="payment-slip">
          <span>Payment Slip:</span>
          <small className="fw-bold">Upload your payment slip here</small>
          <input type="file" accept="image/*" onChange={handleImageSelect} />
          {isLoading ? ( // Display ping while isLoading
            <div className="ping"></div>
          ) : cloudImage ? (
            <div className="give-it-a-class-name text-white">
              <div className="card-content">
                <div className="name-date">
                  <div className="name">
                    {lastName} {firstName}
                  </div>
                  <div className="date my-3 text-white">
                    <span className="my-auto">Uploaded:</span>{" "}
                    <small className="my-auto">{receiptDate}</small>
                  </div>
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
        </div> */}