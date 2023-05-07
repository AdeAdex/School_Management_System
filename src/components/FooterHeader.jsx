import React from 'react'
import Small_hr from './Small_hr'

const FooterHeader = ({headerName, headerStyle}) => {
  return (
    <>
        <div>
                <h5 className='text-uppercase' style={headerStyle}>{headerName}</h5>
               <Small_hr></Small_hr>
        </div>
    </>
  )
}

export default FooterHeader