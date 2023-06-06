import localization from "./../../assets/location.png";
import call from "./../../assets/call.png";
import mail from "./../../assets/mail.png";
import "./styles.css";
function Contact() {
  return (
    <div className="container-contact">
      <h1>Entre em contato</h1>
      <section style={{ display: "flex" }}>
        <div style={{ display: "flex" }} className="container-span-contact">
          <img className="img-contact" src={localization} alt="localização" />
          <span>
            <h2 className="h2">Nosso endereço</h2>
            <p>Rua feliciano Sodré N° 520 - Galpão</p>
          </span>
        </div>
        <div style={{ display: "flex" }} className="container-span-contact">
          <img className="img-contact" src={call} alt="localização" />
          <span>
            <h2 className="h2">Nosso Contato</h2>
            <p>(21) 9 6464-2376</p>
          </span>
        </div>
        <div style={{ display: "flex" }} className="container-span-contact">
          <img className="img-contact" src={mail} alt="localização" />
          <span>
            <h2 className="h2">Nosso E-mail</h2>
            <p>maxitorque@gmail.com</p>
          </span>
        </div>
      </section>
    </div>
  );
}

export default Contact;
