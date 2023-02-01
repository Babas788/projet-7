import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";
import Logement from "./pages/logements";
import About from "./pages/about";
import Error from "./pages/error";
import logoFooter from "./assets/logoFooter.svg";
import copyRights from "./assets/copyrights.svg";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logement/:id" element={<Logement />} />
          <Route path="/About" element={<About />} />
          <Route path="/logement/:id*" element={<Error />} />
        </Routes>
      </main>
      <footer>
        <Footer logoFooter={logoFooter} copyright={copyRights} />
      </footer>
    </div>
  );
}

export default App;
