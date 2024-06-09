import { ProfileImage } from '../ProfileImage';
import { Description } from '../Description';
import "./styles.css";



export const Profile = ({imagepath, description, title}) => {
  return (
    <div className="profiledesign">
      <ProfileImage imagepath={imagepath} />
      <Description description={description} title={title} />
    </div>
  );
};
