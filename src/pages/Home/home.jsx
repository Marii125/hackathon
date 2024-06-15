import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import './style.css';
import { Typewriter } from '../../components/Typewriter/typewriter';
import { DescriptionalHome } from '../../components/DescriptionHome/descriptionHome';

export const Home = () => {
  const [coordsX, setCoordsX, coordsY, setCoordsY] = useOutletContext();

  return (
    <>
      <div
        className="mouse"
        style={{ '--x': coordsX + 'px', '--y': coordsY + 'px' }}
      ></div>
      <div>
        <div className="container">
          <div className="container__text--center">
            <Typewriter text={'CHCEŠ PORADIT NA JAKOU POZICI SE HODÍŠ?'} />
          </div>
          <DescriptionalHome />
        </div>
      </div>
    </>
  );
};
