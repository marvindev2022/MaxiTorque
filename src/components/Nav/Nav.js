import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./styles.css";
function Nav() {
    return (_jsx("nav", { className: "navbar", children: _jsxs("ul", { className: "nav-links", children: [_jsx("li", { className: "nav-item", children: _jsx("a", { href: "#home", className: "nav-link home", children: "Home" }) }), _jsx("li", { className: "nav-item", children: _jsx("a", { href: "#about-us", className: "nav-link", children: "Sobre" }) }), _jsx("li", { className: "nav-item", children: _jsx("a", { href: "#services", className: "nav-link", children: "Servi\u00E7os" }) }), _jsx("li", { className: "nav-item  contact", children: _jsx("a", { href: "#contact", className: "nav-link", children: "Contato" }) })] }) }));
}
export default Nav;
