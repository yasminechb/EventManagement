
import Hero from "../components/Hero" ;
import aproposImg from"../assests/img1.jpg"
import Navbar from "../components/Navbar" ;
import Footer from "../components/Footer" ;
function Apropos() {
    return(
        <>
        
        <Navbar />
        <Hero
      cName="hero-mid"
      heroImg={aproposImg}
      title= "A propos de nous "
      
      url="/"
      btnClass = "hide"
      />
      <Footer/>
    </>

       
    )
    }
    
    export default  Apropos; 