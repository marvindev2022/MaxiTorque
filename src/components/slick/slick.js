import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "./../../assets/logos/peakpx 2.jpg";
import truck from "./../../assets/logos/peakpx 3.jpg";
import motor from "./../../assets/logos/peakpx.jpg";
import "./styles.css";
const Carrossel = () => {
    const sliderRef = useRef(null);
    useEffect(() => {
        const timer = setInterval(() => {
            sliderRef.current?.slickNext();
        }, 3000);
        return () => {
            clearInterval(timer);
        };
    }, []);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        fade: true,
        cssEase: "ease-in-out",
    };
    return (_jsx("section", { id: "home", className: "carrossel-container", children: _jsxs(Slider, { ...settings, ref: sliderRef, children: [_jsx("div", { children: _jsx("img", { className: "truck", src: truck, alt: "Imagem" }) }), _jsx("div", { children: _jsx("img", { className: "cabe\u00E7ote", src: image1, alt: "Imagem" }) }), _jsx("div", { children: _jsx("img", { className: "motor", src: motor, alt: "Imagem" }) })] }) }));
};
export default Carrossel;
