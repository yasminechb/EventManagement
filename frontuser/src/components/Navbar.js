import { Component } from "react";
import "./NavbarStyles.css" ; //import the style sheet specific to this component 
import {Link} from "react-router-dom" ;
import {MenuItems} from "./MenuItems";

class Navbar extends Component { // we extend men class component maaneha nekhdou menha f hajet 
    render() {  // we using render because we extends if you have to exdend a coponent you have to render it  
return(           //inside this return we will start creating our navbar 
    <nav className="NavbarItems"> 
     <h1 className="navbar-logo">Planning Paradise</h1>
     <ul className="nav-menu">
        {MenuItems.map((item,index) => {
            return(
<li key={index}>
            <Link className={item.cName} to={item.url}><i className={item.icon}></i> {item.title} </Link>
        </li>
            )
        })}
        <button>se connecter</button>
     </ul>
    </nav>  // nav bar items aana logo ,
);
    }  
}
export default Navbar;