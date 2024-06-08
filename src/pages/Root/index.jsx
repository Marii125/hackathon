import './style.css';
import { Link, Outlet } from 'react-router-dom';
export const Root = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about-us">About us</Link>
        <Link to="/questionnaire">questionnaire</Link>
        <Link to="/position">position</Link>
      </nav>
      <Outlet />
    </>
  );
};
