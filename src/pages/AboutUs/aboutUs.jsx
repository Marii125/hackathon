import { profilesData } from "../../data/dataProfilesCreater";
import { Profile } from "../../components/Profile";


export const AboutUs = () => {


  return (

    Object.values(profilesData).map((creator) => {
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
