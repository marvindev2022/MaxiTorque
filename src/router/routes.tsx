import { Route, Routes } from "react-router-dom";
import Main from "../pages/main";

function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/home" element={<Main />} />
      <Route path="/services" element={<Main />} />
      <Route path="/about" element={<Main />} />
      <Route path="/contact" element={<Main />} />
    </Routes>
  );
}

export default MainRouter;
