import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import "./Payment.css"

const Payment = ({paid}) => {

  return (
    <>
      <div className="payment-card">
      <div className="status">
        <div className={`status-value ${paid ? 'paid' : 'not-paid'}`}>Application Fee: 
          {paid ? 'Paid' : 'Not Paid'}
        </div>
      </div>
      <div className="amount">Amount Paid: ₦5000</div>
      <div className="method">Pay Method: 'card'</div>
      <div className="payment-slip"></div>
    </div>
    </>
  )
}

export default Payment