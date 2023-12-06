import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function slideShow() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };
  return (
    <Slider {...settings}>
      <div>
        <img
          src="src/images/sl1.webp"
          alt="Image 1"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div>
        <img
          src="src/images/sl2.webp"
          alt="Image 2"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </Slider>
  );
}
