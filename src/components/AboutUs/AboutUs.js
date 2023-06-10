import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef } from "react";
import "./styles.css";
function AboutUs() {
    const articleRef = useRef(null);
    const imageRef = useRef(null);
    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.5,
        };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("article-animation");
                }
                else {
                    entry.target.classList.remove("article-animation");
                }
            });
        }, options);
        if (articleRef.current) {
            observer.observe(articleRef.current);
        }
        const observerImage = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove("espelhar-imagem");
                }
                else {
                    entry.target.classList.add("espelhar-imagem");
                }
            });
        }, options);
        if (imageRef.current) {
            observerImage.observe(imageRef.current);
        }
        return () => {
            if (imageRef.current) {
                observerImage.unobserve(imageRef.current);
            }
            if (articleRef.current) {
                observer.unobserve(articleRef.current);
            }
        };
    }, []);
    return (_jsxs("section", { id: "about-us", className: "container-about-us", children: [_jsx("div", { className: "container-background", children: _jsxs("article", { ref: articleRef, children: [_jsx("h1", { className: "red-text", children: "Desde 1990" }), _jsx("p", { className: "description-about", children: "A Maxitorque Diesel \u00E9 l\u00EDder em manuten\u00E7\u00E3o automotiva, especializada em repara\u00E7\u00E3o de motores diesel e c\u00E2mbios manuais. Nossa equipe excepcional desenvolve protocolos e metodologias de refer\u00EAncia mundial. Valorizamos a forma\u00E7\u00E3o e aperfei\u00E7oamento de profissionais, buscando constantemente a excel\u00EAncia. Simplificamos a vida de nossos clientes com servi\u00E7os impec\u00E1veis. Na Maxitorque Diesel, somos uma fam\u00EDlia dedicada, tratando cada funcion\u00E1rio com respeito. Nossa dedica\u00E7\u00E3o \u00E0 satisfa\u00E7\u00E3o dos clientes nos torna refer\u00EAncia no mercado automotivo. Agradecemos aos parceiros e clientes por nos destacarem. Continuaremos aprimorando nossos servi\u00E7os, superando expectativas com paix\u00E3o e compromisso. Juntos, construiremos um futuro brilhante e de sucesso. Podem contar conosco, sempre!" })] }) }), _jsx("div", { ref: imageRef, className: "container-img-ducato espelhar-imagem" })] }));
}
export default AboutUs;
