import logo from "../../assets/LOGO.svg";
import NavBar from "./navBar/Index";

function Header() {
  return (
    <div className="header-logo">
      <img src={logo} className="AppLogo" alt="logo" />
      <NavBar className="navBar" />
    </div>
  );
}

export default Header;
