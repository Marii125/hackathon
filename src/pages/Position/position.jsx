import { Positions } from "../../data/dataPositionsCreator";
import { Profile } from "../../components/Profile";


export const Position = () => {



  return (

    Object.values(Positions).map((creator) => {
      return (

        <Profile 
        key={creator.title}
        imagepath={creator.imagepath} 
        title={creator.title}
        description={creator.description} 
        />



      )}),

  
 
  );
};
