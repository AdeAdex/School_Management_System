import React from 'react'
import CalculateTotalNumber from './CalculateTotalNumber'

const BgImageInner3 = () => {
  return (
    <>
        <p className="bg-image3-main center-div" style={{ height: "60%" }}>
            <div className="bg-image3-container center-div2 d-flex col-lg-10 justify-content-between">
            <CalculateTotalNumber innerText='teachers' styles={{backgroundColor: '#74CEE4'}} text='54'></CalculateTotalNumber>
            <CalculateTotalNumber innerText='courses' styles={{backgroundColor: '#6fc191'}} text='32'></CalculateTotalNumber>
            <CalculateTotalNumber innerText='students' styles={{backgroundColor: '#edbf47'}} text='78'></CalculateTotalNumber>
            <CalculateTotalNumber innerText='activities' styles={{backgroundColor: '#AC7AB5'}} text='45'></CalculateTotalNumber>
            </div>
          </p>
    </>
  )
}

export default BgImageInner3