import React from 'react'
import { Carousel } from '@mantine/carousel';


const FooterCarousel = () => {
  return (
    <>
    <Carousel
      withIndicators
      height={200}
      slideSize={{ base: '100%', sm: '50%', md: '33.333333%' }}
      slideGap={{ base: 0, sm: 'md' }}
      loop
      align="start"
    >
      <Carousel.Slide>
        <img src="https://res.cloudinary.com/dn4gfzlhq/image/upload/v1694435026/images_13_s6nfrc.jpg"  alt="" />
      </Carousel.Slide>
      <Carousel.Slide>
      <img src="pic/img.png" alt="" />
      </Carousel.Slide>
      <Carousel.Slide>
      <img src="pic/img.png" alt="" />
      </Carousel.Slide>
    </Carousel>
    </>
  )
}

export default FooterCarousel