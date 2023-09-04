import React from "react";
import Small_hr from "../generalComponents/Small_hr";

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
  classesStyle,
  hr_class,
  hr_style,
  onClick,
}) => {
  return (
    <div className="card text-white" style={cardstyle}>
      <div className={classes} style={classesStyle}>
        <div className={days_time}>
          <span className="d-flex justify-content-center text-uppercase">
            {days}
          </span>
          <p className="text-uppercase">{date}</p>
        </div>
        <i className={days_time_icon}></i>
      </div>
      <img
        src={img}
        className="card-img-top"
        alt="..."
        style={{ opacity: "1", filter: "blur", height: '200px' }}
      />
      <h5 className={h5Classes} style={h5Style}>
        {title}
      </h5>
      <div className="card-body" style={styles}>
        <div className="card-text">
          <div className={country_container}>
            <i className="fas fa-thumbtack  my-auto"></i>
            <span className="text-capitalize my-auto">{country}</span>
          </div>
          <div className={time_container}>
            <i className="fas fa-clock my-auto"></i>
            <span className="text-uppercase my-auto">{time}</span>
          </div>
          <div className={hr_class} style={hr_style}></div>
          <div style={{height: '3.9em', backgroundColor: '', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowra', lineHeight: '1.2em'}}>{content}</div>
        </div>
        <button onClick={onClick} className="btn text-white" style={btnstyle}>
          check it
        </button>
      </div>
    </div>
  );
};

export default EventsCard;
