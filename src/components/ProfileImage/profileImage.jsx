import './styles.css';

export const ProfileImage = ({ imagepath }) => {
  console.log(imagepath);
  return (
    <img
      className="profile__image"
      src={imagepath}
      alt="profile photo of woman"
    />
  );
};
