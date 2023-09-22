import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../Student/PaymentPrintPage.css"
import { useSelector } from "react-redux";

const PaymentPrintPage = () => {
  const location = useLocation();
  const payment = location.state;
  const globalState = useSelector((state) => state.portalReducer.studentInfo);

  useEffect(() => {
//     window.print();
console.log(globalState.firstName);
  }, [location, payment, globalState]);
  return (
    <>
      <div className="payment-container">
      <div className="payment-details">
        {globalState && payment ? (
          <div>
            <h2>Payment Details</h2>
            <div className="student-info">
              <div className="student-photo">
                <img src={globalState.photoUrl} alt={globalState.firstName} />
              </div>
              <div className="student-details">
                <p><strong>Name:</strong> {globalState.firstName}</p>
                <p><strong>Gender:</strong> {globalState.gender}</p>
                <p><strong>Student ID:</strong> {globalState.studentID}</p>
                <p><strong>Level:</strong> {globalState.level}</p>
              </div>
            </div>
            <hr />
            <h3>Fee Breakdown</h3>
            <div className="fee-breakdown">
              <p><strong>Amount To Pay:</strong> ₦{payment.amountToPaid}</p>
              <p><strong>Amount Paid:</strong> ₦{payment.amountPaid}</p>
              <p><strong>Balance:</strong> ₦{payment.balance}</p>
            </div>
            <p><strong>Date:</strong> {payment.date}</p>
          </div>
        ) : (
          <p>No student or payment details found.</p>
        )}
      </div>
    </div>
    </>
  );
};

export default PaymentPrintPage;
