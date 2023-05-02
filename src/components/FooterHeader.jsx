import React from 'react'

const FooterHeader = ({headerName}) => {
  return (
    <>
        <div>
                <div className='text-uppercase text-white'>{headerName}</div>
                <hr style={{backgroundColor: "white", height: "4px", width: '30px'}}/>
        </div>
    </>
  )
}

export default FooterHeader