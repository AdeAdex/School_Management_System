import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';

const Payment = () => {
  const globalState = useSelector((state) => state.portalReducer.studentInfo);

  return (
    <>
      <div>
        <small>{paid ? (<div>Paid</div>) : (<div>Not Paid</div>)}</small>
      </div>
    </>
  )
}

export default Payment