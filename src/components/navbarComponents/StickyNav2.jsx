import React from 'react'

const StickyNav2 = (props) => {
  return (
    <>
        <div className="my-auto d-flex" style={{width: 'auto'}}>
        <div className="d-flex gap-2">
          <i
            className={props.sticky2Icon}
            style={{ marginTop: "auto", marginBottom: "auto" }}
          ></i>
          <span
            className="text-uppercase"
            style={{ fontSize: "17px", cursor: "pointer" }}
            onClick={props.myFunc}
          >
            {props.sticky2Name}
          </span>
        </div>
      </div>
    </>
  )
}

export default StickyNav2