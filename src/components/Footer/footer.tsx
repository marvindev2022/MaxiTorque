import "./styles.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <span>
          <h3>Links Úteis</h3>
          <ul>
            <li>
              <a href="#home">Página Inicial</a>
            </li>
            <li>
              <a href="#about-us">Sobre</a>
            </li>
            <li>
              <a href="#contact">Contato</a>
            </li>
          </ul>
        </span>

        <span>
          <p >
            Como guardaste a palavra da minha paciência, também eu te guardarei
            da hora da tentação que há de vir sobre todo o mundo, para tentar os
            que habitam na terra.
          </p>
          <h3 >Apocalipse 3:10</h3>
        </span>
      </div>

      <div>
        <p>Todos os direitos reservados &copy; 2023</p>
      </div>
    </footer>
  );
}

export default Footer;
