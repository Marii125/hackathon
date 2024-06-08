import { Footer } from '../../components/Footer/footer';
import { Navigation } from '../../components/navigation/navigation';
import './style.css';
import { Link, Outlet } from 'react-router-dom';
export const Root = () => {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
};
