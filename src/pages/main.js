import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import Footer from "../components/Footer/footer";
import Header from "../components/Header/Header";
import Carrossel from "../components/slick/slick";
import Contact from "../components/contact/contact";
import "./styles.css";
import Services from "../components/Services/Services";
import AboutUs from "../components/AboutUs/AboutUs";
import Slick from "../components/slickLogo/slickLogo";
function Main() {
    return (_jsxs(React.Fragment, { children: [_jsx(Header, {}), _jsxs("main", { className: "main", children: [_jsx("section", { id: "home", className: "section section-home", children: _jsx(Carrossel, {}) }), _jsx("section", { id: "about-us", className: "section about-us", children: _jsx(AboutUs, {}) }), _jsx("section", { id: "services", className: "section", children: _jsx(Services, {}) }), _jsx("section", { className: "section", children: _jsx(Slick, {}) }), _jsx("section", { id: "gallery", className: "section" }), _jsx("section", { id: "contact", className: "section", children: _jsx(Contact, {}) }), _jsx(Footer, {})] })] }));
}
export default Main;
