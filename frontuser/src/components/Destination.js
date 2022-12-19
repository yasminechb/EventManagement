import "./DestinationStyles.css";
import image1 from "../assests/hadhra.jpg"
import image2 from "../assests/hadhra2.jpg"
import image3 from "../assests/weeknd1.jpg"
import image4 from "../assests/weeknd2.jpg"
import image5 from "../assests/Bal.jpg"
import image6 from "../assests/cake.jpg"
import  EventsData from "./EventsData";
const Destination = () => {
    return (
      <div className="destination">
      
        <h1>Nos évenements les plus populaires </h1>
        <p> Ne ratez pas l'opportunité !</p>
       
      <EventsData
      className="first-des"
      heading="Hadhra"
      text="Haḍra est un rituel surérogatoire collectif exécuté par les ordres soufis. Il a souvent lieu le jeudi soir après la prière de nuit, le vendredi après la prière de jumu'ah ou le dimanche soir, et peut également être célébré lors de fêtes islamiques spéciales et lors de rites de passage"
      img1={image1}
      img2={image2}
      />
      <div className="espace">
       <EventsData
      className="first-des"
      heading="Bal 2023"
      text="Haḍra est un rituel surérogatoire collectif exécuté par les ordres soufis. Il a souvent lieu le jeudi soir après la prière de nuit, le vendredi après la prière de jumu'ah ou le dimanche soir, et peut également être célébré lors de fêtes islamiques spéciales et lors de rites de passage"
      img1={image5}
      img2={image6}
      />
      </div>
      <div className="espace"> 
      <EventsData
          className="first-des-reverse"
      heading="The weeknd Concert"
      text=" Abel Tesfaye, dit The Weeknd, est un chanteur, auteur-compositeur-interprète et producteur musical canadien, né le 16 février 1990 à Toronto. Il commence sa carrière musicale en 2009 en publiant anonymement de la musique sur YouTube"
      img1={image3}
      img2={image4}
     
      />  
      
      </div>
    
      
      </div>
    );
  };

  export default Destination;