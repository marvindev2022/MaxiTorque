import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "./../../assets/logos/peakpx 2.jpg";
import truck from "./../../assets/logos/peakpx 3.jpg";
import motor from "./../../assets/logos/peakpx.jpg";

import "./styles.css";

const Carrossel: React.FC = (): JSX.Element => {
  const sliderRef = useRef<Slider | null>(null);

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
    autoplay: true,
    fade: true, 
    cssEase: "ease-in-out",
  };

  return (
    <section id="home" className="carrossel-container">
      <Slider {...settings} ref={sliderRef}>
       
          <div>
            <img className="truck" src={truck} alt="Imagem" />
          </div>
          <div>
            <img className="cabeçote" src={image1} alt="Imagem" />
          </div>
          <div>
            <img className="motor" src={motor} alt="Imagem" />
          </div>
        
      </Slider>
    </section>
  );
};

export default Carrossel;
