import React from "react";

const EventCard_Img = ({
  cardstyle,
  days,
  date,
  title,
  img,
  classes,
  h5Classes,
  h5Style,
  days_time,
  days_time_icon,
  classesStyle,
}) => {
  return (
    <>
      <div className="card text-white" style={cardstyle}>
        <div className={classes} style={classesStyle}>
          <div className={days_time}>
            <span className="d-flex justify-content-center">{days}</span>
            <p className="text-uppercase">{date}</p>
          </div>
          <i className={days_time_icon}></i>
        </div>
        <img
          src={img}
          className="card-img-top"
          alt="..."
          style={{ opacity: "1", filter: "blur" }}
        />
        <h5 className={h5Classes} style={h5Style}>
          {title}
        </h5>
      </div>
    </>
  );
};

export default EventCard_Img;
