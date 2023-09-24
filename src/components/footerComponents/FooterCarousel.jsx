import React, { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel } from "@mantine/carousel";

const imageStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
};

const FooterCarousel = () => {
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  return (
    <>
      <Carousel
       withIndicators
      height={200}
      slideSize="33.333333%"
      slideGap="md"
      loop
      align="start"
      slidesToScroll={1}
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
      >
        <Carousel.Slide>
          <img
            src="https://res.cloudinary.com/dn4gfzlhq/image/upload/v1694435026/images_13_s6nfrc.jpg"
            alt=""
            style={imageStyle}
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <img
            src="https://res.cloudinary.com/dn4gfzlhq/image/upload/v1694435006/images_4_qwldyn.jpg"
            alt=""
             style={imageStyle}
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <img
            src="https://res.cloudinary.com/dn4gfzlhq/image/upload/v1694435027/images_16_mydc4f.jpg"
            alt=""
             style={imageStyle}
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <img
            src="https://res.cloudinary.com/dn4gfzlhq/image/upload/v1694435027/images_19_ap7ihu.jpg"
            alt=""
             style={imageStyle}
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <img
            src="https://res.cloudinary.com/dn4gfzlhq/image/upload/v1694435027/images_18_xjzpbq.jpg"
            alt=""
             style={imageStyle}
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <img
            src="https://res.cloudinary.com/dn4gfzlhq/image/upload/v1694435026/images_14_esjffp.jpg"
            alt=""
             style={imageStyle}
          />
        </Carousel.Slide>
      </Carousel>
    </>
  );
};

export default FooterCarousel;
