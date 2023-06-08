import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import "./styles.css";
function Footer() {
    return (_jsx("footer", { children: _jsxs("p", { children: ["Site desenvolvido com amor por", " ", _jsx(Link, { to: "/www.linkedin/marcus-roza", children: "Marcus Roza" })] }) }));
}
export default Footer;
