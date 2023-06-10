import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Route, Routes } from "react-router-dom";
import Main from "../pages/main";
function MainRouter() {
    return (_jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Main, {}) }), _jsx(Route, { path: "/home", element: _jsx(Main, {}) }), _jsx(Route, { path: "/services", element: _jsx(Main, {}) }), _jsx(Route, { path: "/about", element: _jsx(Main, {}) }), _jsx(Route, { path: "/contact", element: _jsx(Main, {}) })] }));
}
export default MainRouter;
