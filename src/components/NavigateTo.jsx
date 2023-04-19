import React from 'react'

const NavigateTo = (props) => {
  return (
    <>
        <div className="py-4 px-5 text-white text-center fs-3 col-sm-12 col-lg-3 text-capitalize"
        style={props.style}
        >
          <a href="" style={{textDecoration: 'none', color: 'white'}}>{props.txt}</a>
        </div>
    </>
  )
}

export default NavigateTo