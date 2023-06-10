import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Nav from "../Nav/Nav";
import car from "./../../assets/logos/logoCar.png";
import "./styles.css";
function Header() {
    return (_jsxs("header", { children: [_jsxs("span", { className: "container-logo", children: [_jsx("img", { className: "imgCar", src: car, alt: "" }), _jsxs("strong", { className: "logo", children: ["ma", _jsxs("strong", { className: "container-X", children: ["X", _jsx("b", { children: "X" })] }), _jsx("b", { className: "b", children: "iTorque" })] })] }), _jsx("span", { className: "container-nav", children: _jsx(Nav, {}) })] }));
}
export default Header;
