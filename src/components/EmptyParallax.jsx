import React from 'react'

const EmptyParallax = ({classes, styles}) => {
  return (
    <>
        <div className={classes} style={styles}>
        <div
          className="bg-image1-container d-flex m-auto justify-content-center gap-4"
          style={{ height: "", width: "75%" }}
        >
        </div>
      </div>
    </>
  )
}

export default EmptyParallax