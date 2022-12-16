import Hero from "../components/Hero" ;
import eventImg from"../assests/img2.jpg"
import Navbar from "../components/Navbar" ;
import Footer from "../components/Footer" ;
import EventCard from "../components/EventCard";
import axios from "axios"
import {useState} from "react"
import {useQuery} from "react-query"
// const data = [
//   {
//     id: "6678686",
//     EventName: "Event 1",
//     Date: "06/10/2022",
//     Description: "fazezzraezaeaze",
//     Organisateur: "Adnen"
//   },
//   {
//     id: "52352",
//     EventName: "Event 2",
//     Date: "08/15/1625",
//     Description: "dsfkdnfoe",
//     Organisateur: "opt"
//   }
// ]
/* Boucle Infi : ( a voir use effect )
const GetDataOfEvents = ()=>{
  const [Events,setEvents] = useState(null)
  const resultat = axios.get("http://localhost:3002/findevents").then((obj)=>{
    return obj.data
  }).then((all_events)=>{
    setEvents(all_events)
  })
  return Events
}*/

function Evenements(props) {
   
    const request_result = useQuery(["dsqdqksnlk"],async ()=>{
      const res = await axios.get("http://localhost:3002/findevents")
      return res.data
    })

    if(request_result.isLoading)
      return <h1>Loading !!!</h1> 
    if(request_result.error)
      return <h1>Error ! </h1>
    const all_events = request_result.data  
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

        {all_events.map((evenement)=>{
          return (
            < EventCard {...evenement} />
          )
        })}

      </>
    )
    }
    
    export default  Evenements; 