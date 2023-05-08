import React from "react";

const FooterGallary = ({cover,img, cover_img}) => {
  return (
    <>
      <div className="book">
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
