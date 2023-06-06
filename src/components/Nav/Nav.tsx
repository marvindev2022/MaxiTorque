import "./styles.css";

function Nav(): JSX.Element {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li className="nav-item">
          <a href="#home" className="nav-link home">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="#about-us" className="nav-link">
            Sobre
          </a>
        </li>
        <li className="nav-item">
          <a href="#services" className="nav-link">
            Serviços
          </a>
        </li>
        <li className="nav-item">
          <a href="#agende" className="nav-link">
            Agende
          </a>
        </li>
        <li className="nav-item">
          <a href="#contact" className="nav-link">
            Contato
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
