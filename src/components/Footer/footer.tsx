import "./styles.css";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <p>
              Como guardaste a palavra da minha paciência, também eu te
              guardarei da hora da tentação que há de vir sobre todo o mundo,
              para tentar os que habitam na terra.
            </p>
            <h3>Apocalipse 3:10</h3>
          </div>
          <div className="footer-section">
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
          </div>
          <div className="footer-section">
            <h3>Redes Sociais</h3>
            <ul>
              <li>
                <a href="http://www.facebook.com/">
                  <i className="fab fa-facebook"></i> Facebook
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAWxJREFUSImN1F2OFCEYwPGzMGiyCV1kVM9BY6Gp0aS2j0NJKhQk2ykJk5iiAS3WgoLIZaiiSYhT4iYiK2DLgjzC1CR0c1FBXjeaxXvNzP6R4n/P/MrBQhR04N4ZnbvsW3ocQIXpYFSgla4YFHgeIiTQKJysAvVziRjO5JWRnc+wEflmHQKizXn3CsUDyHiD6RJ4twF9BhqDDSV6hrV52PGB1Wd7fGeb6ebyKx/A0CBzGgRI2kK4g6RWJzHs13BJjG9kA6bW3yy3QUTxBIV11euV5AzGzADgSDJE7AciHvDvAoL9crPyR0tCpHRBj0JQb4QFhzT0Coh1tQWqAbUJLE7QAvQCHyKQLRr3agW8A4iVxkD0YwWgCLiJMYcAzJQXAAU6qNHTw6cXtpALr7o7n3ESQ8i1BVEZCBAsO0RHZfBx0D/KJ2p1WUvqfQJU2ClBGAT7DEKRuB1tYDsIWaCt7MCpx7YV0BD1Uij89vHlDxS1RdD7PyGvzDAgXQrF8UYIh2xwNk1edcfu0KftY/2MAJfDcjjvt+G/m4m++e0gEPj9AV+2uEr2QxwAAAAASUVORK5CYII="
                    alt="Facebook"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAWxJREFUSImN1F2OFCEYwPGzMGiyCV1kVM9BY6Gp0aS2j0NJKhQk2ykJk5iiAS3WgoLIZaiiSYhT4iYiK2DLgjzC1CR0c1FBXjeaxXvNzP6R4n/P/MrBQhR04N4ZnbvsW3ocQIXpYFSgla4YFHgeIiTQKJysAvVziRjO5JWRnc+wEflmHQKizXn3CsUDyHiD6RJ4twF9BhqDDSV6hrV52PGB1Wd7fGeb6ebyKx/A0CBzGgRI2kK4g6RWJzHs13BJjG9kA6bW3yy3QUTxBIV11euV5AzGzADgSDJE7AciHvDvAoL9crPyR0tCpHRBj0JQb4QFhzT0Coh1tQWqAbUJLE7QAvQCHyKQLRr3agW8A4iVxkD0YwWgCLiJMYcAzJQXAAU6qNHTw6cXtpALr7o7n3ESQ8i1BVEZCBAsO0RHZfBx0D/KJ2p1WUvqfQJU2ClBGAT7DEKRuB1tYDsIWaCt7MCpx7YV0BD1Uij89vHlDxS1RdD7PyGvzDAgXQrF8UYIh2xwNk1edcfu0KftY/2MAJfDcjjvt+G/m4m++e0gEPj9AV+2uEr2QxwAAAAASUVORK5CYII="
                    alt="LinkedIn"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Todos os direitos reservados &copy; 2023</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
