import { Link } from "react-router-dom"
import "./styles.css"

function Footer(){


  return (
    <footer>
      <p>
        Site desenvolvido com amor por{" "}
        <Link to="/www.linkedin/marcus-roza">Marcus Roza</Link>
      </p>
    </footer>
  );
}

export default Footer