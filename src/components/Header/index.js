import { NavLink } from "react-router-dom";
import "./styles.scss";
import bastien2 from "./bastien2.jpg";

const Header = () => (
  <div className="header">
    <a href="https://www.twitter.com/dehcimal"><img className="header__image" src={bastien2} alt="imgdeBastien"></img></a>

    <div className="header__menu">
      <ul className="header__list">
        <li className="header__listItem">
          <NavLink to="/home">Accueil</NavLink>
        </li>

        <li className="header__listItem">
        <a href="https://github.com/BastienAuT" title="Twitter">Mon Github</a>
        </li>
      </ul>
    </div>
  </div>
);

export default Header;
