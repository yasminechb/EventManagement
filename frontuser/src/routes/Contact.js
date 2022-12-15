import Hero from "../components/Hero" ;
import contactImg from"../assests/img3.jpg"
import Navbar from "../components/Navbar" ;
import Footer from "../components/Footer" ;
import ContactForm from "../components/ContactForm";
function Contact() {
    return(
        <>
               
        <Navbar />
        <Hero
      cName="hero-mid"
      heroImg={contactImg}
      title= "Contactez nous ! "
      
      url="/"
      btnClass = "hide"
      />
      <ContactForm/>
      <Footer/>
        </>
    )
    }
    
    export default Contact ; 