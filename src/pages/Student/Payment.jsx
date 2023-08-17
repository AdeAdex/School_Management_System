import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';

const Payment = () => {
  const globalState = useSelector((state) => state.portalReducer.studentInfo);

  return (
    <>
      <div>Hello</div>
    </>
  )
}

export default Payment