import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const PaymentPrintPage = () => {
  const location = useLocation();
  const payment = location.state;
  useEffect(() => {
    window.print();
  }, []);
  return (
    <>
      <div className="payment-details">
        {payment ? (
          <div>
            <p>Paid For: {payment.paidFor}</p>
            <p>Amount To Paid: ₦{payment.amountToPaid.toFixed(2)}</p>
            <p>Amount Paid: ₦{payment.amountPaid.toFixed(2)}</p>
            <p>Balance: ₦{payment.balance.toFixed(2)}</p>
            <p>Date: {payment.date}</p>
            <hr />
          </div>
        ) : (
          <p>No payment details found.</p>
        )}
      </div>
    </>
  );
};

export default PaymentPrintPage;
