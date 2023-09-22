import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../Student/PaymentPrintPage.css";
import { useSelector } from "react-redux";

const PaymentPrintPage = () => {
  const location = useLocation();
  const {payment, studentInfo} = location.state;

  useEffect(() => {
        window.print();
  }, [location, payment, studentInfo]);
  return (
    <>
      <div className="payment-container">
      <div className="payment-details">
        {studentInfo && payment ? (
          <table className="payment-table">
            <tbody>
              <tr>
                <td className="student-photo">
                  <img src={studentInfo.profileURL} alt={studentInfo.firstName} />
                </td>
                <td className="student-details">
                  <h2>Payment Details</h2>
                  <div className="student-info">
                    <p>
                      <strong>Name:</strong> {studentInfo.firstName} {studentInfo.lastName}
                    </p>
                    <p>
                      <strong>Gender:</strong> {studentInfo.gender}
                    </p>
                    <p>
                      <strong>Student ID:</strong> {studentInfo.studentID}
                    </p>
                    <p>
                      <strong>Level:</strong> {studentInfo.level}
                    </p>
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <hr />
                  <h3>Fee Breakdown</h3>
                  <div className="fee-breakdown">
                    <p>
                      <strong>Amount To Pay:</strong> ₦{payment.amountToPaid}
                    </p>
                    <p>
                      <strong>Amount Paid:</strong> ₦{payment.amountPaid}
                    </p>
                    <p>
                      <strong>Balance:</strong> ₦{payment.balance}
                    </p>
                  </div>
                  <p>
                    <strong>Date:</strong> {payment.date}
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        ) : (
          <p>No student or payment details found.</p>
        )}
      </div>
    </div>
    </>
  );
};

export default PaymentPrintPage;
