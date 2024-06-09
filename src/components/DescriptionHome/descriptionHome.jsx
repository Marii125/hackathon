import { Link } from 'react-router-dom';
import './style.css';
export const DescriptionalHome = () => {
  return (
    <>
      <p className="description">
        Změna profese je pro každého z nás velký krok. Pokud tě zajímá svět IT
        po vyplnění krátkého dotazníku ti úkážeme , která profese v IT se k tobě
        nejvíce hodí.
      </p>
      <h3 className="caption">JAK NA TO?</h3>
      <p className="description">
        {' '}
        Odpovídej popravdě, zvol takovou odpoveď, která je ti nejbližší.
      </p>
      <Link to="/questionnaire" className="link__dotaznik">
        CHCI SPUSTIT DOTAZNÍK!
      </Link>
    </>
  );
};
