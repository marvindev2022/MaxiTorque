import { jsx as _jsx } from "react/jsx-runtime";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import renault from "./../../assets/logos/314-3144169_carenaultll-fax-mail-icon-red-call-icon-png.png";
import fiat from "./../../assets/logos/Daco_343042.png";
import kia from "./../../assets/logos/Daco_346426.png";
import hyundai from "./../../assets/logos/Daco_4296445.png";
import mercedes from "./../../assets/logos/Daco_4929010.png";
const images = [
    renault,
    fiat,
    kia,
    hyundai,
    mercedes,
    renault,
    fiat,
    kia,
    hyundai,
    mercedes,
    renault,
    fiat,
    kia,
    hyundai,
    mercedes,
    renault,
    fiat,
    kia,
    hyundai,
    mercedes,
];
const Slick = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "0px",
        autoplay: true,
        autoplaySpeed: 1,
        arrows: true,
        pauseOnHover: false,
    };
    return (_jsx(Slider, { ...settings, children: images.map((image, index) => (_jsx("div", { children: _jsx("img", { style: { width: "auto", height: "100px", objectFit: "fill" }, src: image, alt: "logo" }) }, index))) }));
};
export default Slick;
