import { profilesData } from '../../data/dataProfilesCreater';
import { Profile } from '../../components/Profile/profile';
import './style.css';
export const AboutUs = () => {
  return (
    <div className="about-us">
      {Object.values(profilesData).map((creator) => {
        return (
          <div
            key={creator.id}
            className="about-us__container about-us__container--border"
          >
            <Profile
              imagepath={creator.imagepath}
              title={creator.title}
              description={creator.description}
              git={creator.gitHub}
              linkedin={creator.linkedin}
            />
          </div>
        );
      })}
    </div>
  );
};
