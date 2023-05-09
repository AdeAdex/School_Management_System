import React from 'react'

const BgImageInner1 = () => {
  return (
    <>
        <div className="bg-image1-container d-flex m-auto justify-content-center gap-4" style={{ height: "", width: '75%' }}>
          <button className='btn text-white text-uppercase d-flex gap-3 px-4 py-2' style={{backgroundColor: '#74CEE4'}}><i className='fas fa-bars my-auto'></i> all courses</button>
          <button className='btn text-white text-uppercase d-flex gap-3 px-4 py-2' style={{backgroundColor: '#74CEE4'}}><i className='fas fa-edit my-auto'></i> contact us</button>
        </div>
    </>
  )
}

export default BgImageInner1