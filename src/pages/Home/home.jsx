import { useEffect } from 'react';
import './style.css';
import { Typewriter } from '../../components/Typewriter/typewriter';
import { DescriptionalHome } from '../../components/DescriptionHome/descriptionHome';

export const Home = () => {
  useEffect(() => {
    const mouseEl = document.querySelector('.mouse');

    document.addEventListener('mousemove', (e) => {
      if (mouseEl !== null) {
        let x = -e.clientX / 2;
        let y = -e.clientY / 2;
        mouseEl.style.setProperty('--x', x + 'px');
        mouseEl.style.setProperty('--y', y + 'px');
      }
    });
  }, []);
  return (
    <>
      <div className="mouse"></div>
      <div>
        <div className="container">
          <div className="text--center">
            <Typewriter text={'CHCEŠ PORADIT NA JAKOU POZICI SE HODÍŠ?'} />
          </div>
          <DescriptionalHome />
        </div>
      </div>
    </>
  );
};
