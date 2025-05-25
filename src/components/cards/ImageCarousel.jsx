// src/components/cards/ImageCarousel.jsx
import React from "react";
import Slider from "react-slick";

import HeroImg1 from "../../images/HeroImage1.jpg";
import HeroImg2 from "../../images/HeroImage2.jpg";
import HeroImg3 from "../../images/HeroImage3.jpg";
import HeroImg4 from "../../images/HeroImage4.jpg";
import HeroImg5 from "../../images/HeroImage5.jpg";
import HeroImg6 from "../../images/HeroImage.jpeg";

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 750,
    arrows: false,
  };

  const images = [HeroImg1, HeroImg2, HeroImg3, HeroImg4, HeroImg5, HeroImg6];

  return (
    <div style={{ width: "100%", maxWidth: "700px", margin: "0 auto" }}>
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <img
              src={img}
              alt={`Hero Image ${index + 1}`}
              style={{ width: "100%", borderRadius: "10px" }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
