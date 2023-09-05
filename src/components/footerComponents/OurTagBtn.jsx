import React from 'react'

const OurTagBtn = ({btn_txt, onClick}) => {
  return (
    <>
        <button className='tag-btn' onClick={onClick}>{btn_txt}</button>
    </>
  )
}

export default OurTagBtn