import { ProfileImage } from '../ProfileImage';
import { Description } from '../Description';
import './styles.css';

export const Profile = ({ imagepath, description, title }) => {
  return (
    <div className="about-position">
      <ProfileImage imagepath={imagepath} />
      <Description description={description} title={title} />
    </div>
  );
};
