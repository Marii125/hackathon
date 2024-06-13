import { Footer } from '../../components/Footer/footer';
import { Header } from '../../components/Header/header';
import './style.css';
import { Outlet } from 'react-router-dom';
export const Root = () => {
  return (
    <>
      <Header />
      <div className="outlet">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
