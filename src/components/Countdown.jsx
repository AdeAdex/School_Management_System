import React from 'react'

const Countdown = ({id, styles, innerText}) => {
  return (
    <>
    <div>
    <div className="margin-y-auto" id={id}></div>
        <div className="text-center text-uppercase rounded py-1" style={styles}>{innerText}</div>
    </div>
    
    </>
  )
}

export default Countdown