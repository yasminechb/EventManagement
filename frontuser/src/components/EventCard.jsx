//<>
import "./EventStyles.css"


const EventCard = (props)=>{
    const name = props.EventName
    const organisateur = props.Organisateur
    const date = props.Date
    const description = props.Description
    const image= props.Image
   
    return (

    <div className="event">
        <img src={image}/>
        <h2>Name: {name}</h2>
        <h3>Organisateur: {organisateur}</h3>
        <small>{date}</small>
        <p>{description}</p>
    </div>
   )
}

export default EventCard