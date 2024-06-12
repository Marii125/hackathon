import { Positions } from "../../data/dataPositionsCreator";
import { Profile } from "../../components/Profile";
import "./styles.css";


export const Position = () => {



  return (

    Object.values(Positions).map((creator) => {
      return (
<div className="positions--container">
  <div>
        <Profile
        key={creator.title}
        imagepath={creator.imagepath} 
        title={creator.title}
        description={creator.description} 
        />
</div></div>


      )}),

  
 
  );
};
