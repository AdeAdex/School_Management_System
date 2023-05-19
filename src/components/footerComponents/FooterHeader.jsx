import React from 'react'
import Small_hr from '../generalComponents/Small_hr'

const FooterHeader = ({headerName, headerStyle, headerClasses}) => {
  return (
    <>
        <div>
                <h5 className={headerClasses} style={headerStyle}>{headerName}</h5>
               <Small_hr></Small_hr>
        </div>
    </>
  )
}

export default FooterHeader