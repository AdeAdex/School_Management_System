import React from "react";
import Small_hr from "./Small_hr";

const EventsCard = ({
  cardstyle,
  styles,
  days,
  date,
  title,
  country,
  time,
  content,
  btn,
  img,
  btnstyle,
  classes,
  h5Classes,
  time_container,
  country_container,
  h5Style,
  days_time,
  days_time_icon,
  classesStyle
}) => {
  return (
    <div class="card text-white" style={cardstyle}>
      <div
        className={classes}
        style={ classesStyle }
      >
        <div className={days_time}>
          <span className="d-flex justify-content-center">{days}</span>
          <p className="text-uppercase">{date}</p>
        </div>
        <i className={days_time_icon}></i>
      </div>
      <img src={img} class="card-img-top" alt="..." style={{opacity: '1', filter: 'blur'}}/>
      <h5 className={h5Classes} style={h5Style}>{title}</h5>
      <div class="card-body" style={styles}>
        <p class="card-text">
          <div className={country_container}>
            <i class="fas fa-thumbtack  my-auto"></i>
            <span className="text-capitalize my-auto">{country}</span>
          </div>
          <div className={time_container}>
            <i class="fas fa-clock my-auto"></i>
            <span className="text-uppercase my-auto">{time}</span>
          </div>
          <Small_hr></Small_hr>
          <div>{content}</div>
        </p>
        <a href="#" class="btn text-white" style={btnstyle}>
          {btn}
        </a>
      </div>
    </div>
  );
};

export default EventsCard;
