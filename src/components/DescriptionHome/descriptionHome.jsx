import { Link } from 'react-router-dom';
import './style.css';
export const DescriptionalHome = () => {
  return (
    <>
      <p className="container__description">
        Změna profese je pro každého z nás velký krok. Pokud tě zajímá svět IT,
        po vyplnění krátkého dotazníku ti úkážeme , která profese v IT se k tobě
        nejvíce hodí.
      </p>
      <h3 className="container__caption">JAK NA TO?</h3>
      <p className="container__description">
        {' '}
        Odpovídej popravdě, zvol takovou odpoveď, která je ti nejbližší.
      </p>
      <Link to="/questionnaire" className="container__link-questionnaire">
        CHCI SPUSTIT DOTAZNÍK!
      </Link>
    </>
  );
};
