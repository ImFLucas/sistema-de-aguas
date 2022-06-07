import "../styles/App.css";
import { Link } from "react-router-dom";
import {
  FaWater,
  FaHome,
  FaBinoculars,
  FaSearch,
  FaDatabase,
} from "react-icons/fa";
import { BsDropletFill } from "react-icons/bs";
const Navbar = () => {
  // prettier-ignore
  return (
    <nav className="NavBar">
      <Link to="/" className="Logo">
        <h1 className="LogoH1">
          <BsDropletFill /> SISTEMA DE ÁGUAS
       </h1>
      </Link>
      
      <div className="LinkBox">
        <Link to="/" className="Links">
          <h3>
            <FaHome /> HOME
          </h3>
        </Link>
        <Link to="/relatorios" className="Links">
          <h3>
            <FaBinoculars /> VISÃO GERAL
          </h3>
        </Link>
        <Link to="/pesquisa1" className="Links">
          <h3>
            <FaSearch /> PESQUISAS
          </h3>
        </Link>
        <Link to="/anos" className="Links">
          <h3>
            <FaDatabase /> VALORES PRESENTES
          </h3>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
