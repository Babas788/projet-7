import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navBar">
      <Link to="/" className="navButton">
        Accueil
      </Link>
      <Link to="/About" className="navButton">
        A propos
      </Link>
    </nav>
  );
}

export default NavBar;
