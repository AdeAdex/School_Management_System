import React, { useEffect, useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel } from "@mantine/carousel";

const imageStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
};

const FooterCarousel = ({ images }) => {
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    handleResize(); // Check initial screen size
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (isSmallScreen) {
    return (
      <Carousel
        withIndicators
        height={300}
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.start}
      >
        {images.map((image, index) => (
          <Carousel.Slide key={index}>
            <img src={image.image} alt={image.imageName} style={imageStyle} />
          </Carousel.Slide>
        ))}
      </Carousel>
    );
  } else {
    return (
      <Carousel
        withIndicators
        height={400}
        slideSize="33.333333%"
        slideGap="md"
        loop
        align="start"
        slidesToScroll={1}
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
      >
        {images.map((image, index) => (
          <Carousel.Slide key={index}>
            <img src={image.image} alt={image.imageName} style={imageStyle} />
          </Carousel.Slide>
        ))}
      </Carousel>
    );
  }
};

export default FooterCarousel;
