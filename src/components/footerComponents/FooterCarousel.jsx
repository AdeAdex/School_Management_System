import React, { useEffect, useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel } from "@mantine/carousel";
import { Image, Modal } from '@mantine/core';
import { useDisclosure } from "@mantine/hooks";



const imageStyle = {
  width: "100%",
  height: "100%",
  objectFit: "fit",
};

const FooterCarousel = ({ images }) => {
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);
  const [selectedImage, setSelectedImage] = useState(null);

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

  const handleClick = (image) => {
    setSelectedImage(image);
    open()
  }

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
          <Carousel.Slide key={index} >
            <img src={image.image} alt={image.imageName} style={imageStyle} />
          </Carousel.Slide>
        ))}
      </Carousel>
    );
  } else {
    return (
      <>
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
          <Carousel.Slide key={index} >
            <img src={image.image} alt={image.imageName} style={imageStyle} onClick={() => handleClick(image.image)}/>
          </Carousel.Slide>
        ))}
      </Carousel>
      <Modal
          opened={opened}
          onClose={() => { close(); setSelectedImage(null); }}
          withCloseButton={false}
          size="70%"
        >
          {selectedImage && <img src={selectedImage} alt="gallary" style={imageStyle}/>}
        </Modal>
      </>
    );
  }
};

export default FooterCarousel;
