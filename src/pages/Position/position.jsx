import { Positions } from '../../data/dataPositionsCreator';
import { Profile } from '../../components/Profile/profile';
import './styles.css';

export const Position = () => {
  return (
    <div className="positions">
      {Object.values(Positions).map((creator) => {
        return (
          <div key={creator.title} className="positions__container">
            <div className="positions__box ">
              <Profile
                imagepath={creator.imagepath}
                title={creator.title}
                description={creator.description}
                git={null}
                linkedin={null}
              />
            </div>
          </div>
        );
      })}
      ,
    </div>
  );
};
