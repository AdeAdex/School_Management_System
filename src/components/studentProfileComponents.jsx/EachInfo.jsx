import React from 'react'

const EachInfo = ({label, value}) => {
  return (
    <>
        <div className="" style={{ borderBottom: "1px dotted gray", width: '48%' }}>
          <small className='text-capitalize' style={{fontSize: '12px'}}>{label}</small>
          <div >
            {value}
          </div>
        </div>
    </>
  )
}

export default EachInfo