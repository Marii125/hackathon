import { ProfileImage } from '../ProfileImage/profileImage';
import { Description } from '../Description/description';
import { Link } from 'react-router-dom';
import './styles.css';

export const Profile = ({ imagepath, description, title, git, linkedin }) => {
  return (
    <div className="profile">
      <div className="profile__info profile__info--padding">
        <ProfileImage imagepath={imagepath} />
        <Description description={description} title={title} />
        <div className="link">
          {git !== null ? (
            <Link to={git} target="_blank" className="link__git">
              <i class="fa-brands fa-github"></i>
            </Link>
          ) : (
            ''
          )}
          {linkedin !== null ? (
            <Link to={linkedin} target="_blank" className="link__linkedin">
              <i class="fa-brands fa-linkedin"></i>
            </Link>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
};
