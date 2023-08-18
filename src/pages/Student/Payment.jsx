import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import "./Payment.css"

const Payment = ({paid}) => {

  return (
    <>
      {/* <div className="payment-card">
      <div className="status">
        <div className={`status-value w-100 ${paid ? 'paid' : 'not-paid'}`}> <span>Application Fee: </span> 
          <small>{paid ? 'Paid' : 'Not Paid'}</small>
        </div>
      </div>
      <div className="amount"><span>Amount Paid:</span> <small className='fw-bold'>₦5000</small></div>
      <div className="method">Pay Method: 'card'</div>
      <div className="payment-slip"></div>
    </div> */}

    <div className="payment-card">
      <div className="status">
        <div className={`status-value w-100 ${paid ? 'paid' : 'not-paid'}`}>
          <span>Application Fee: </span>
          <small>{paid ? 'Paid' : 'Not Paid'}</small>
        </div>
      </div>
      <div className="amount">
        <span>Amount Paid:</span> <small className="fw-bold">₦5000</small>
      </div>
      <div className="method">
        Pay Method: card
      </div>
      <div className="payment-slip">
        <span>Payment Slip:</span> <small className="fw-bold">Upload your payment slip here</small>
      </div>
    </div>
    </>
  )
}

export default Payment