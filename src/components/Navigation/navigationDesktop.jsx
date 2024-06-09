import { Link } from "react-router-dom";
import "./style.css";
export const NavigationDesktop = () => {
  return (
    <nav className="navigation__desktop">
      <ul>
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
