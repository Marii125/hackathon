import "./styles.css";

export const ProfileImage = ({ imagepath }) => {

  console.log(imagepath)
  return <img className="image-position" src={imagepath} alt="profile photo of woman" />;
  
};
