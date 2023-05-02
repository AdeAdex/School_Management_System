import React from "react";

const FooterGallary = ({cover,img}) => {
  return (
    <>
      <div class="book">
        <img src={img} alt="" />
        <div class="cover">
          <p>{cover}</p>
        </div>
      </div>
    </>
  );
};

export default FooterGallary;
