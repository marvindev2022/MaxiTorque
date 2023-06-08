import React from "react"
import Nav from "../Nav/Nav";
import "./styles.css"
function Header(): JSX.Element {
  return (
    <React.Fragment>
      <header>
        <strong className="logo">
          Ma
          <strong>
            X<b>X</b>
          </strong>
         <b className="b">iTorque</b>
        </strong>
        <Nav />
      </header>
    </React.Fragment>
  );
}

export default Header;
