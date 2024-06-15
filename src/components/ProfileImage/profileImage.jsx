import './styles.css';

export const ProfileImage = ({ imagepath }) => {
  return (
    <img
      className="profile__image"
      src={imagepath}
      alt="profile photo of woman"
    />
  );
};
