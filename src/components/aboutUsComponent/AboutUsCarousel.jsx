import React from "react";
import { useCallback, useEffect, useState } from "react";
import { Carousel, Embla } from "@mantine/carousel";
import { Progress, rem } from "@mantine/core";

const AboutUsCarousel = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [embla, setEmbla] = (useState < Embla) | (null > null);

  const handleScroll = useCallback(() => {
    if (!embla) return;
    const progress = Math.max(0, Math.min(1, embla.scrollProgress()));
    setScrollProgress(progress * 100);
  }, [embla, setScrollProgress]);

  useEffect(() => {
    if (embla) {
      embla.on("scroll", handleScroll);
      handleScroll();
    }
  }, [embla]);

  return (
    <>
      <Carousel
        dragFree
        slideSize="50%"
        slideGap="md"
        height={200}
        getEmblaApi={setEmbla}
        initialSlide={2}
      >
        <Carousel.Slide>
                <img src="https://res.cloudinary.com/dn4gfzlhq/image/upload/v1694435006/images_4_qwldyn.jpg" alt="" />
        </Carousel.Slide>
        <Carousel.Slide>2</Carousel.Slide>
        <Carousel.Slide>3</Carousel.Slide>
        {/* ...other slides */}
      </Carousel>
      <Progress
        value={scrollProgress}
        styles={{
          bar: { transitionDuration: "0ms" },
          root: { maxWidth: rem(320) },
        }}
        size="sm"
        mt="xl"
        mx="auto"
      />
    </>
  );
};

export default AboutUsCarousel;
