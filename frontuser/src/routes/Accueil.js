import Navbar from "../components/Navbar" ;
import Hero from "../components/Hero" ;
import Footer  from "../components/Footer" ;
import Destination from "../components/Destination";
function Accueil() {
return(
    <>
        
      <Hero
      cName="hero"
      heroImg="https://images.pexels.com/photos/1666816/pexels-photo-1666816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      title= "Vos meilleurs evenement"
      texte="Choisissez votre evenement préféré."
      buttonText="Consulter maintenant"
      url="http://localhost:3001/evenements"
      btnClass = "show"
      />
     <Destination/>
    </>
)
}

export default Accueil ; 