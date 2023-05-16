import React from "react";

const Offcanvas = () => {
  return (
    <>
      
      <div className="position-relative" id="offCan"  style={{width: '20%', overflow: 'hidden', height: '100vh', backgroundColor: '#030552'}}>
      <div
        className="dashboard-offcanvas w-100 position-relative"
       
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasScrollingLabel">
            Offcanvas with body scrolling
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <p>
            Try scrolling the rest of the page to see this option in action.
          </p>
        </div>
      </div>
      </div>
      
    </>
  );
};

export default Offcanvas;
