import React from "react";

const FooterGallary = ({cover,img, cover_img, onClick}) => {
  return (
    <>
      <div className="book" onClick={onClick}>
        <img src={img} alt="" />
        <img src={cover_img} alt="" className="cover" />
        {/* <div class="cover">
          <p>{cover}</p>
        </div> */}
      </div>
    </>
  );
};

export default FooterGallary;
