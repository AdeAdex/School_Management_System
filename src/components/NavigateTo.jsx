import React from 'react'
import { Link } from 'react-router-dom'

const NavigateTo = (props) => {
  return (
    <>
        <div className="py-4 px-5 text-white text-center fs-3 col-sm-12 col-md-6 col-lg-3 text-capitalize"
        style={props.style}
        >
          <Link to={props.to_where} style={{textDecoration: 'none', color: 'white'}}>{props.txt}</Link>
        </div>
    </>
  )
}

export default NavigateTo