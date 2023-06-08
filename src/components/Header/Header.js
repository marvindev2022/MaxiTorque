import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import Nav from "../Nav/Nav";
import logo from "./../../assets/Maxitorque-logos_white.png";
import "./styles.css";
function Header() {
    return (_jsx(React.Fragment, { children: _jsxs("header", { children: [_jsx("img", { src: logo, alt: "logo MaxiTorque" }), _jsx(Nav, {})] }) }));
}
export default Header;
