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
import { TypeAnimation } from "react-type-animation";
import { useMediaQuery } from "react-responsive";

const Payment = ({
  paid,
  myEmail,
  receiptURL,
  receiptDate,
  lastName,
  firstName,
  payWithSlip,
}) => {
  const [myImage, setMyImage] = useState("");
  const [cloudImage, setCloudImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [message, setMessage] = useState(
    "You've selected payment with a debit card. You won't be charged. You have selected payment with slip upload. Please upload your payment slip, and the admin will confirm your payment."
  );
  const [typingStatus, setTypingStatus] = useState("");

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
          const Toast = Swal.mixin({
            toast: true,
            position: "top",
            showConfirmButton: false,
            html: `
            <div class="toast-content">
              <button id="close-toast-button" class="close-button">&times;</button>
            </div>
          `,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          });

          Toast.fire({
            icon: "success",
            title: response.data.message,
          });
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
          }
        });

        if (response.status === "success") {
          let payload = {
            myEmail: myEmail,
            justPaid: true,
            amount: 5000,
            reference: response.reference,
          };
          let endpoint =
            "https://school-portal-backend-adex2210.vercel.app/student_account/paidAdmissionFee";
          axios
            .post(endpoint, payload)
            .then((response) => {
              if (response.data.status) {
                localStorage.setItem("currentPaidState", true);
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
  const [myChoice, setMyChoice] = useState(true);

  const handleChange = (event) => {
    setPayType(event.target.value);
    if (event.target.value === "card") {
      setMyChoice(true);
      // setMessage("You've selected payment with a debit card. You won't be charged.");
    } else {
      setMyChoice(false);
      // setTypingStatus('');

      // setMessage("You have selected payment with slip upload. Please upload your payment slip, and the admin will confirm your payment.");
    }
  };

  const payForAdmission = () => {
    payWithPaystack();
  };

  return (
    <>
      <div className="payment-card">
        <small>
          {paid === "true" ? null : (
            <div>
              <TypeAnimation
                style={{
                  whiteSpace: "pre-line",
                  height: "auto",
                  display: "block",
                  marginBottom: "10px",
                }}
                sequence={[
                  `Important Information:\nIf you've chosen to pay with a debit card, there will be no charges incurred.\nIf you've opted for payment by uploading a payment slip, please proceed to upload your payment receipt. Our administration team will review and confirm your payment.\nThank you for your attention.`,
                  500,
                ]}
              />

            </div>
          )}
        </small>

        <div className="status">
          <div
            className={`status-value w-100 ${
              paid == "true" ? "paid" : "not-paid"
            }`}
          >
            <span>Application Fee:</span>
            <Badge
              variant="gradient"
              gradient={{
                from: "teal",
                to: paid == "true" ? "blue" : "orangered",
                deg: 60,
              }}
            >
              {paid == "true" ? "Paid" : "Not Paid"}
            </Badge>
          </div>
        </div>
        <div className="amount">
          {paid == "true" ? (
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
          {paid == "true" ? (
            <>
              {payWithSlip && payWithSlip.length > 0 ? (
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
                      value="slip"
                      label="Pay Method"
                      disabled
                    >
                      <MenuItem value="slip">✓ Payment Slip Upload</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              ) : (
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
              )}
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
              {payWithSlip && payWithSlip.length > 0 ? (
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
                      style={{
                        width: "20%",
                        height: "80px",
                        borderRadius: "0%",
                      }}
                      onClick={openModal}
                    >
                      <img
                        src={cloudImage}
                        alt="Avatar"
                        className="hover-img"
                      />
                      <div class="cover-container">
                        <img src={cloudImage} alt="" className="cover-img" />
                        <p className="cover-txt" style={{ fontSize: "12px" }}>
                          Hover & Click{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="card-content">
                  <div className="name-date d-flex flex-column">
                    <div className="ms-auto mb-2">Card</div>
                    <div className="name">
                      {lastName} {firstName}
                    </div>
                    {paid == "true" ? (
                      <button
                        onClick={payForAdmission}
                        className="btn pay-btn mt-3 mx-auto px-5"
                        style={{ backgroundColor: "green" }}
                        disabled
                      >
                        ✓ Paid ₦5000
                      </button>
                    ) : (
                      <button
                        onClick={payForAdmission}
                        className="btn pay-btn mt-3 mx-auto px-5"
                        style={{ backgroundColor: "white" }}
                      >
                        Pay ₦5000
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          </>
        ) : (
          <>
            <div className="payment-slip">
              <span>Payment Slip:</span>
              <small className="fw-bold">Upload your payment slip here</small>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageSelect}
              />
              {isLoading ? (
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
                        style={{
                          width: "20%",
                          height: "80px",
                          borderRadius: "0%",
                        }}
                        onClick={openModal}
                      >
                        <img
                          src={cloudImage}
                          alt="Avatar"
                          className="hover-img"
                        />
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

{
  /* <div className="payment-slip">
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
        </div> */
}
