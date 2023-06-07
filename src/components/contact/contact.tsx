import localization from "./../../assets/location.png";
import call from "./../../assets/call.png";
import mail from "./../../assets/mail.png";
import "./styles.css";
import { useState } from "react";

interface DefaultForm {
  name: string;
  email: string;
  description: string;
  commit: string;
}

const defaultForm: DefaultForm = {
  name: "",
  email: "",
  description: "",
  commit: "",
};

function Contact() {
  const [formState, setFormState] = useState<DefaultForm>(defaultForm);
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }
  return (
    <div className="container-contact">
      <h1>Entre em contato </h1>
      <section className="section-data-contact" style={{ display: "flex" }}>
        <div style={{ display: "flex" }} className="container-span-contact">
          <img className="img-contact" src={localization} alt="localização" />
          <span>
            <h2 className="h2">Nosso endereço</h2>
            <p>Rua feliciano Sodré N° 528 - Galpão</p>
          </span>
        </div>
        <div style={{ display: "flex" }} className="container-span-contact">
          <img className="img-contact" src={call} alt="localização" />
          <span>
            <h2 className="h2">Nosso Contato</h2>
            <p>(21) 9 7935-1107</p>
          </span>
        </div>
        <div style={{ display: "flex" }} className="container-span-contact">
          <img className="img-contact" src={mail} alt="localização" />
          <span>
            <h2 className="h2">Nosso E-mail</h2>
            <p>maxitorque1@gmail.com</p>
          </span>
        </div>
      </section>
      <div className="container-form">
        <form onSubmit={handleSubmit}>
         
          <section className="container-input">
            <label>
              <input
                className="input-500px"
                name="name"
                value={formState.name}
                onChange={handleChange}
                placeholder="Nome *"
              />
            </label>
            <label>
              <input
                className="input-500px"
                name="email"
                value={formState.email}
                onChange={handleChange}
                placeholder="E-mail*"
              />
            </label>
          </section>

          <section>
            <label>
              <input
                className="input-1030"
                name="description"
                value={formState.description}
                onChange={handleChange}
                placeholder="Assunto"
              />
            </label>
          </section>
          <section>
            <label>
              <textarea
                name="commit"
                value={formState.commit}
                onChange={handleChange}
              />
              Por favor escreva sua menssagem
            </label>
          </section>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
