import { Footer } from '../../components/Footer/footer';
import { Header } from '../../components/Header/header';
import { useState } from 'react';
import './style.css';
import { Outlet } from 'react-router-dom';
import React from 'react';
export const Root = () => {
  const [coordsX, setCoordsX] = useState(0);
  const [coordsY, setCoordsY] = useState(0);

  const mouseMove = (e) => {
    let clientX = e.clientX;
    if (clientX === 0) {
      clientX = 1;
    }
    let clientY = e.clientY;
    if (clientY === 0) {
      clientY = 1;
    }
    let x = -clientX / 2;
    let y = -clientY / 2;
    setCoordsX(x);
    setCoordsY(y);
  };
  return (
    <>
      <Header />
      <div className="outlet" onMouseMove={mouseMove}>
        <Outlet context={[coordsX, setCoordsX, coordsY, setCoordsY]} />
      </div>
      <Footer />
    </>
  );
};
