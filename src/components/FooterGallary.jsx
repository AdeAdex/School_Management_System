import React from "react";

const FooterGallary = ({cover,img, cover_img}) => {
  return (
    <>
      <div class="book">
        <img src={img} alt="" />
        <img src={cover_img} alt="" class="cover" />
        {/* <div class="cover">
          <p>{cover}</p>
        </div> */}
      </div>
    </>
  );
};

export default FooterGallary;
