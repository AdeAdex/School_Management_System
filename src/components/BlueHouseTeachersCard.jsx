import React from "react";
import Small_hr from "./Small_hr";

const BlueHouseTeachersCard = ({
  cardstyle,
  img,
  h5Classes,
  h5Style,
  styles,
  content,
  btnstyle,
  btn,
  title,
  teacherName
}) => {
  return (
    <>
      <div class="card text-white" style={cardstyle}>
        <h5 className="card-title py-3 text-center text-uppercase px-3" style={{backgroundColor: '#495052', marginBottom: '0px', borderTopLeftRadius: '5px', borderTopRightRadius: '5px'}}>
          {teacherName}
        </h5>
        <img
          src={img}
          class="card-img-to"
          alt="..."
          style={{ opacity: "1", filter: "blur", height: '250px' }}
        />
        <h5 className={h5Classes} style={h5Style}>
          {title}
        </h5>
        <div class="card-body" style={styles}>
          <p class="card-text">
            <Small_hr></Small_hr>
            <div>{content}</div>
          </p>
          <a href="#" class="btn text-white" style={btnstyle}>
            {btn}
          </a>
        </div>
      </div>
    </>
  );
};

export default BlueHouseTeachersCard;
