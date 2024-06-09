import { Footer } from '../../components/Footer/footer';
import { Header } from '../../components/Header/header';
import './style.css';
import { Link, Outlet } from 'react-router-dom';
export const Root = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
