import { ProfileImage } from '../ProfileImage';
import { Description } from '../Description';
import { Link } from 'react-router-dom';
import './styles.css';

export const Profile = ({ imagepath, description, title, git }) => {
  return (
    <div className="profile__info profile__info--padding">
      <ProfileImage imagepath={imagepath} />
      <Description description={description} title={title} />

      {git !== null ? (
        <Link to={git} target="_blank" className="nav__link--git">
          <i class="fa-brands fa-github"></i>
        </Link>
      ) : (
        ''
      )}
    </div>
  );
};
