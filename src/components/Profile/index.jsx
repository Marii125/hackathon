import { ProfileImage } from '../ProfileImage';
import { Description } from '../Description';
import './style.css';

export const Profile = ({ imagepath, description, title }) => {
  return (
    <>
      <ProfileImage imagepath={imagepath} />
      <Description description={description} title={title} />
    </>
  );
};
