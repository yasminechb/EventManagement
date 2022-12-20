import React from 'react'
import './SignIn.css';


const SignIn = () => {
  return (
 
        <>
<div className="formulaire"/>
  <form className='form'>
    <h2>Sign Up!</h2>
      <div className='yass'>
      <fieldset className='fieldset'>
        <ul className='lul'>
          <li>
            <label for="username">Username:</label>
            <input type="text" id="username" required/>
          </li>
          <li>
            <label for="email">Email:</label>
            <input type="email" id="email" required/>
          </li>
          <li>
            <label for="password">Password:</label>
            <input type="password" id="password" required/>
          </li>
        </ul>
      </fieldset>
      </div>
      <button onclick= "window.open(`http://localhost:3006/home)">Submit</button>
      <button onclick="window.location.href = 'http://localhost:3006/home';">Cliquez Ici</button>
      
      
      
      

      
      </form>
      </>
           );
    
            
      }
    
    
      export default SignIn ;

