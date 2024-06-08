import { Link } from 'react-router-dom';
export const Navigation = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about-us">About us</Link>
      <Link to="/questionnaire">questionnaire</Link>
      <Link to="/position">position</Link>
    </nav>
  );
};
