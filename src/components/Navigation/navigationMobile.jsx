import { Link } from "react-router-dom";
import "./style.css";
export const NavigationMobile = () => {
  return (
    <nav className="navigation__mobile">
      <button className="navigation__mobile__hamburger">
        <i className="fa-solid fa-bars"></i>
      </button>
      <ul className="navigation__mobile-menu">
        <li className="nav__li">
          {" "}
          <span className="nav__link">X</span>
        </li>
        <li className="nav__li">
          <Link to="/" className="nav__link">
            Home{" "}
          </Link>
        </li>
        <li className="nav__li">
          <Link to="/about-us" className="nav__link">
            About us
          </Link>
        </li>
        <li className="nav__li">
          <Link to="/questionnaire" className="nav__link">
            questionnaire
          </Link>
        </li>
        <li className="nav__li">
          <Link to="/position" className="nav__link">
            position
          </Link>
        </li>
      </ul>
    </nav>
  );
};
