import React from "react"
import Nav from "../Nav/Nav";
import logo from "./../../assets/Maxitorque-logos_white.png"
import "./styles.css"
function Header(): JSX.Element {
  return (
    <React.Fragment>
      <header>
      <img src={logo} alt="logo MaxiTorque"/>
    <Nav/>
    </header>
      </React.Fragment>
  );
}

export default Header;
