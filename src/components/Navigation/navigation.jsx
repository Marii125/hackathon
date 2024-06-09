import { Link } from 'react-router-dom';
import './style.css';
export const Navigation = () => {
  return (
    <header>
      <div className="header">
        <div className="header__logo">
          <Link to="/" className="nav__link">
            Najdi se v <span>IT</span>
          </Link>
        </div>
        <nav>
          <ul className="nav--flex">
            <li className="nav__li">
              <Link to="/" className="nav__link">
                Home{' '}
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
      </div>
      <nav className="mobile">
        <ul className="nav--flex">
          <li className="nav__li">
            <Link to="/" className="nav__link">
              Home{' '}
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
    </header>
  );
};
