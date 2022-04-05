import "./styles.scss";
import { NavLink } from "react-router-dom";

const Navbar = () => (
  <div className="navbar">
    <div className="navbar__menu">
      <ul className="navbar__list">
        <li className="navbar__listItem">
          <NavLink to="/projets">Mes projets</NavLink>
        </li>
        <li className="navbar__listItem">
          <NavLink to="/cv">Mon CV</NavLink>
        </li>
      </ul>
    </div>
  </div>
);

export default Navbar;
