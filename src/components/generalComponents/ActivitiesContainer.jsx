// import React from 'react'

// const ActivitiesContainer = (props) => {
//   return (
//     <>
//          <div className="d-flex gap-4 col-sm-12 col-md-6 col-lg-4 mb-5">
//           <i className={props.icon} style={props.style}></i>
//           <div>
//             <h4 className='text-capitalize'>{props.title}</h4>
//             <div className="content mt-3">{props.content}</div>
//           </div>
//         </div>
//     </>
//   )
// }

// export default ActivitiesContainer



import React, { useState } from 'react';

const ActivitiesContainer = ({ title, icon, style, content }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const toggleTooltip = () => {
    setShowTooltip(!showTooltip);
  };

  const tooltipStyle = {
    position: 'absolute',
    top: '-30px', // Adjust the position of the tooltip
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: '#333',
    color: '#fff',
    padding: '5px 10px',
    borderRadius: '5px',
    visibility: showTooltip ? 'visible' : 'hidden',
    opacity: showTooltip ? 1 : 0,
    transition: 'visibility 0s, opacity 0.3s',
    zIndex: 1,
    width: '60%',
    textAlign: 'center'
  };

  return (
    <div
      className="d-flex gap-4 col-sm-12 col-md-6 col-lg-4 mb-5"
      onMouseEnter={toggleTooltip}
      onMouseLeave={toggleTooltip}
      style={{ position: 'relative' }}
    >
      <i className={icon} style={style}></i>
      <div>
        <h4 className='text-capitalize'>{title}</h4>
        <div className="content mt-3">{content}</div>
        <div className='tooltip' style={tooltipStyle}>{title}</div>
      </div>
    </div>
  );
};

export default ActivitiesContainer;
