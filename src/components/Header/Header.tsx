import React, { useEffect, useState } from "react";
import Nav from "../Nav/Nav";
import car from "./../../assets/logos/logoCar.png";
import menu from "./../../assets/logos/menu.png";
import "./styles.css";

function Header(): JSX.Element {
  return (
    <header>
      <span className="container-logo">
        <img className="imgCar" src={car} alt="" />
        <strong className="logo">
          ma
          <strong className="container-X">
            X<b>X</b>
          </strong>
          <b className="b">iTorque</b>
        </strong>
      </span>

      <span className="container-nav">
        <Nav />
      </span>
    </header>
  );
}

export default Header;
