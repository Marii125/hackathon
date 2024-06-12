import './styles.css';

export const ProfileImage = ({ imagepath }) => {
  console.log(imagepath);
  return (
    <img
      className="position__image"
      src={imagepath}
      alt="profile photo of woman"
    />
  );
};
