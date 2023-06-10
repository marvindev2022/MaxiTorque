import React from "react";
import Footer from "../components/Footer/footer";
import Header from "../components/Header/Header";
import Carrossel from "../components/slick/slick";
import Contact from "../components/contact/contact";
import "./styles.css";
import Services from "../components/Services/Services";
import AboutUs from "../components/AboutUs/AboutUs";

function Main(): JSX.Element {
  return (
    <React.Fragment>
      <Header />
      <main className="main">
        <Carrossel />
        <AboutUs />
        <Services />
        <Contact />
        <Footer />
      </main>
    </React.Fragment>
  );
}

export default Main;
