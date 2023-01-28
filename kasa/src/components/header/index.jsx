import logo from "../../assets/LOGO.svg";
import NavBar from "./navBar/Index";

function Header() {
  return (
    <div className="header_logo">
      <img src={logo} className="App_logo" alt="logo" />
      <NavBar className="nav_bar" />
    </div>
  );
}

export default Header;
