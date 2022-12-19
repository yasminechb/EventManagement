import "./ContactFormStyles.css"
function ContactForm() {
  return (
    <div className="from-container">
      <h1>Contactez Nous </h1>
      <form>
        <input placeholder="Name"/>
        <input placeholder="Email"/>
        <input placeholder="Objet"/>
         <textarea placeholder="Message " rows="4">  </textarea>
         <buttom className="btn">Envoyer</buttom>
      </form>
    </div>
  );
}

export default ContactForm;