import React from "react";

const EventsCard = ({
  styles,
  days,
  date,
  title,
  country,
  time,
  content,
  btn,
  img,
  btnstyle
}) => {
  return (
    <div class="card" style={{ width: "18rem", color: "white" }}>
      <div
        className="position-absolute bg-secondary px-4 d-flex justify-content-center rounded"
        style={{ top: "20px", left: "20px", height: '60px', overflow: 'hidden' }}
      >
        <div className="h-75 my-auto justify-content-center">
          <span className="d-flex justify-content-center">{days}</span>
          <p className="text-uppercase">{date}</p>
        </div>
      </div>
      <img src={img} class="card-img-top" alt="..." style={{opacity: '1', filter: 'blur'}}/>
      <h5 class="card-title bg-secondary py-3 text-uppercase px-3" style={{marginBottom: '0px'}}>{title}</h5>
      <div class="card-body" style={styles}>
        <p class="card-text">
          <div className="d-flex gap-2 mb-2">
            <i class="fas fa-thumbtack  my-auto"></i>
            <span className="text-capitalize my-auto">{country}</span>
          </div>
          <div className="d-flex gap-2">
            <i class="fas fa-clock my-auto"></i>
            <span className="text-uppercase my-auto">{time}</span>
          </div>
          <hr
            style={{ height: "5px", backgroundColor: "white", width: "40px" }}
          />
          <div>{content}</div>
        </p>
        <a href="#" class="btn text-uppercase text-white" style={btnstyle}>
          {btn}
        </a>
      </div>
    </div>
  );
};

export default EventsCard;
