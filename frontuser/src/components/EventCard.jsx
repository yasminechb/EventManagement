//<>
import "./EventStyles.css"


const EventCard = (props)=>{
    const name = props.EventName
    const organisateur = props.Organisateur
    const date = props.Date
    const description = props.Description
    const image = "/"
    return (<div className="event">
        <h1>Name: {name}</h1>
        <h3>Organisateur: {organisateur}</h3>
        <small>{date}</small>
        <p>{description}</p>
    </div>)
}

export default EventCard