import React, { useEffect, useState } from "react";
import Nav from "../Nav/Nav";
import car from "./../../assets/logos/logoCar.png";
import menu from "./../../assets/logos/menu.png";
import miniLogo from "./../../assets/Maxitorque-logos_white.png";
import "./styles.css";

function Header(): JSX.Element {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [miniLogoState, setMiniLogoState] = useState<boolean>(false);
  const [hideHeader, setHideHeader] = useState<boolean>(false);

  const handleResize = () => {
    const width = document.body.clientWidth;
    setIsMobile(width <= 1150);
    setMiniLogoState(width <= 669);
  };

  const handleScroll = () => {
    const scrolled = window.scrollY;
    if (scrolled > 10) {
      console.log(scrolled);
      setHideHeader(true);
    } else {
      setHideHeader(false);
    }
  };
  useEffect(() => {
    handleScroll()
    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={hideHeader ? "hide" : ""}>
      <span className="container-logo">
        {miniLogoState ? (
          <img className="mini-logo" src={miniLogo} alt="" />
        ) : (
          <>
            <img
              onClick={() => {
                setIsMobile(!isMobile);
              }}
              className="imgCar"
              src={car}
              alt=""
            />
            <strong className="logo">
              ma
              <strong className="container-X">
                X<b>X</b>
              </strong>
              <b className="b">iTorque</b>
            </strong>
          </>
        )}
      </span>
      {isMobile ? (
        <div className="container-hamburguer">
          <img className="hamburguer" src={menu} alt="" />
        </div>
      ) : (
        <span className={isMobile ? "hidden" : ""}>
          <Nav />
        </span>
      )}
    </header>
  );
}

export default Header;
