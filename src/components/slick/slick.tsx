import React from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import image1 from "./../../assets/car-repair-1920-x-1080-wallpaper-yvtenz6h0chtr00l.webp";
import image2 from "./../../assets/car-repair-2560-x-1589-wallpaper-vuryoc2c99rlauhk.webp";
import image3 from "./../../assets/car-repair-4896-x-3264-wallpaper-hvtv7r69s1uo6g29.webp";

const images = [image1, image2, image3];

const Carrossel: React.FC = (): JSX.Element => {
  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: true,
    pauseOnHover: true,
  };

  return (
    <Slider {...settings}>
      {images.map((image) => (
        <img src={image} alt="" />
      ))}
    </Slider>
  );
};

export default Carrossel;
