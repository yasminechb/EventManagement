//<>
import "./EventStyles.css"


const EventCard = (props)=>{
    const name = props.EventName
    const organisateur = props.Organisateur
    const date = props.Date
    const description = props.Description
   
    return (
    <div class="row">
    <div class="column">
    <div className="event">
        <h2>Name: {name}</h2>
        <h3>Organisateur: {organisateur}</h3>
        <small>{date}</small>
        <p>{description}</p>
    </div>
    </div>
    </div>)
}

export default EventCard