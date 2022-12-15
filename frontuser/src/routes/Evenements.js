import Hero from "../components/Hero" ;
import eventImg from"../assests/img2.jpg"
import Navbar from "../components/Navbar" ;
import Footer from "../components/Footer" ;
function Evenements(props) {
    console.log(props)      
    return(
        <>
        <Navbar />
        <Hero
      cName="hero-mid"
      heroImg={eventImg}
      title= "Nos événements  "
      
      url="/"
      btnClass = "hide"
      />
      <h1>nom de l'event{props.name}</h1>
      <Footer/>
         
        
        </>
    )
    }
    
    export default  Evenements; 