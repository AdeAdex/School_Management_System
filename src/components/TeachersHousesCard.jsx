import React from "react";

const TeachersHousesCard = ({img}) => {
  return (
    <>
      <div className="card mb-3" style={{width: '48%', height: '230px'}}>
        <div className="col-12 row g-0 h-100">
          <div className="col-md-5">
            <img src={img} className="img-fluid rounded-start" alt="..." style={{height: '100%'}} />
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeachersHousesCard;
