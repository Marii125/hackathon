import { Link } from 'react-router-dom';
import './style.css';
import { Navigation } from '../navigation/navigation';
export const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/" className="nav__link">
          Najdi se v <span>IT</span>
        </Link>
      </div>
      <Navigation />
    </header>
  );
};
