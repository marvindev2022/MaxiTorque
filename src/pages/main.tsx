import React from "react";
import Footer from "../components/Footer/footer";
import Header from "../components/Header/Header";
import Carrossel from "../components/slick/slick";
import Contact from "../components/contact/contact";
import "./styles.css";
import Services from "../components/Services/Services";

function Main(): JSX.Element {
  return (
    <React.Fragment>
      <Header />
      <main className="main">
        <section id="home" className="sections section-home">
          <Carrossel />
        </section>
        <section id="about-us" className="section">
          {/* <AboutUS /> */}
        </section>
        <section id="services" className="section">
          <Services />
        </section>
        <section id="gallery" className="section">
          {/* <Gallery /> */}
        </section>
        <section id="contact" className="section">
          <Contact />
        </section>
      <Footer />
      </main>
    </React.Fragment>
  );
}

export default Main;
