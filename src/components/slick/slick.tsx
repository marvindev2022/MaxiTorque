import React, { useEffect, useState } from "react";
import image1 from "./../../assets/car-repair-1920-x-1080-wallpaper-yvtenz6h0chtr00l.webp";
import image2 from "./../../assets/car-repair-2560-x-1589-wallpaper-vuryoc2c99rlauhk.webp";
import "./styles.css"
const Carrossel: React.FC = (): JSX.Element => {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowImage((prevShowImage) => !prevShowImage);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div id="home" className="carrossel-container">
      <span>
        <img
          className={`image ${showImage ? "show" : ""}`}
          src={image1}
          alt=""
        />
               
      </span>
      <img className={`image ${showImage ? "" : "show"}`} src={image2} alt="" />
      <span></span>
    </div>
  );
};

export default Carrossel;
