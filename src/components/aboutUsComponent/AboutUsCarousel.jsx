import React, { useEffect } from "react";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel } from "@mantine/carousel";

const AboutUsCarousel = () => {
  const autoplay = useRef(Autoplay({ delay: 1000 }));

  return (
    <>
      <Carousel
        width="100%"
        height="100%"
        mx="auto"
        withIndicators
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
        dragFree
        slideGap="md"
        align="start"
        styles={{
          control: {
            "&[data-inactive]": {
              opacity: 0,
              cursor: "default",
            },
          },
        }}
      >
        <Carousel.Slide>
          <img
            src="https://res.cloudinary.com/dn4gfzlhq/image/upload/v1694435006/images_4_qwldyn.jpg"
            alt=""
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <img
            src="https://res.cloudinary.com/dn4gfzlhq/image/upload/v1694435027/images_16_mydc4f.jpg"
            alt=""
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <img
            src="https://res.cloudinary.com/dn4gfzlhq/image/upload/v1694435026/images_13_s6nfrc.jpg"
            alt=""
          />
        </Carousel.Slide>
      </Carousel>
    </>
  );
};

export default AboutUsCarousel;