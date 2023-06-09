import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "./../../assets/car-repair-1920-x-1080-wallpaper-yvtenz6h0chtr00l.webp";
import image2 from "./../../assets/car-repair-2560-x-1589-wallpaper-vuryoc2c99rlauhk.webp";
import image3 from "./../../assets/car-repair-4896-x-3264-wallpaper-hvtv7r69s1uo6g29.webp";
import "./styles.css";

const Carrossel: React.FC = (): JSX.Element => {
  const images = [image1, image2, image3];
  const texts = ["Texto 1", "Texto 2", "Texto 3"];
  const sliderRef = useRef<Slider | null>(null);

  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      sliderRef.current?.slickNext();
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, []);


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    
  };

  return (
    <section id="home" className="carrossel-container">
      <Slider {...settings} ref={sliderRef}>
        {images.map((image, index) => (
          <div key={index}>
            <img className="image" src={image} alt="Imagem" />
          </div>
        ))}
      </Slider>

     
    </section>
  );
};

export default Carrossel;
