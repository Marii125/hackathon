import { Link } from 'react-router-dom';
import './style.css';
import { useState } from 'react';
export const NavigationMobile = () => {
  const [open, setOpen] = useState(false);

  const onOpenMenu = () => {
    setOpen(true);
  };

  const onCloseMenu = () => {
    setOpen(false);
  };

  const openClass = open ? 'navigation__mobile-menu--open' : '';

  return (
    <nav className="navigation__mobile">
      <button onClick={onOpenMenu} className="navigation__mobile__hamburger">
        <i className="fa-solid fa-bars"></i>
      </button>
      <ul
        onClick={onCloseMenu}
        className={'navigation__mobile-menu ' + openClass}
      >
        <li className="nav__li">
          {' '}
          <span className="nav__link">X</span>
        </li>
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
            Questionnaire
          </Link>
        </li>
        <li className="nav__li">
          <Link to="/position" className="nav__link">
            Positions
          </Link>
        </li>
      </ul>
    </nav>
  );
};
