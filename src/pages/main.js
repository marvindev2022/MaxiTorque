import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import Footer from "../components/Footer/footer";
import Header from "../components/Header/Header";
import Carrossel from "../components/slick/slick";
import Contact from "../components/contact/contact";
import "./styles.css";
import Services from "../components/Services/Services";
import AboutUs from "../components/AboutUs/AboutUs";
function Main() {
    return (_jsxs(React.Fragment, { children: [_jsx(Header, {}), _jsxs("main", { className: "main", children: [_jsx(Carrossel, {}), _jsx(AboutUs, {}), _jsx(Services, {}), _jsx(Contact, {}), _jsx(Footer, {})] })] }));
}
export default Main;
