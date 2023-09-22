import React, { useEffect } from 'react'


const PaymentPrintPage = ({ payments }) => {
        useEffect(() => {
                // Trigger print dialog when the component mounts
                window.print();
              }, []);
  return (
    <>
        <div className="payment-details">
      {payments && payments.length > 0 ? (
        payments.map((payment, index) => (
          <div key={index}>
            <p>Paid For: {payment.paidFor}</p>
            <p>Amount To Paid: ₦{payment.amountToPaid.toFixed(2)}</p>
            <p>Amount Paid: ₦{payment.amountPaid.toFixed(2)}</p>
            <p>Balance: ₦{payment.balance.toFixed(2)}</p>
            <p>Date: {payment.date}</p>
            <hr />
          </div>
        ))
      ) : (
        <p>No payment details found.</p>
      )}
    </div>
    </>
  )
}

export default PaymentPrintPage