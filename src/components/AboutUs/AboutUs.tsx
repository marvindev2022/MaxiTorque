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
        } else {
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
        } else {
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

  return (
    <section id="about-us" className="container-about-us">
      <div className="container-background">
        <article ref={articleRef}>
          <h1 className="red-text">Desde 1990</h1>
          <p className="description-about">
            A Maxitorque Diesel é líder em manutenção automotiva, especializada
            em reparação de motores diesel e câmbios manuais. Nossa equipe
            excepcional desenvolve protocolos e metodologias de referência
            mundial. Valorizamos a formação e aperfeiçoamento de profissionais,
            buscando constantemente a excelência. Simplificamos a vida de nossos
            clientes com serviços impecáveis. Na Maxitorque Diesel, somos uma
            família dedicada, tratando cada funcionário com respeito. Nossa
            dedicação à satisfação dos clientes nos torna referência no mercado
            automotivo. Agradecemos aos parceiros e clientes por nos destacarem.
            Continuaremos aprimorando nossos serviços, superando expectativas
            com paixão e compromisso. Juntos, construiremos um futuro brilhante
            e de sucesso. Podem contar conosco, sempre!
          </p>
        </article>
      </div>
      <div ref={imageRef} className="container-img-ducato espelhar-imagem" />
    </section>
  );
}

export default AboutUs;
