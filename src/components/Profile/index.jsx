import { ProfileImage } from '../ProfileImage';
import { Description } from '../Description';

export const Profile = ({ imagepath, description, title }) => {
  return (
    <div>
      <ProfileImage imagepath={imagepath} />
      <Description description={description} title={title} />
    </div>
  );
};
