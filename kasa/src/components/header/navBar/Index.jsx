import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="nav_bar">
      <Link to="/" className="nav_button">
        Accueil
      </Link>
      <Link to="/About" className="nav_button">
        A propos
      </Link>
    </nav>
  );
}

export default NavBar;
