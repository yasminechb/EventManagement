import React from 'react'
import { useNavigate } from 'react-router-dom';
import './SignIn.css';


const SignIn = () => {
  const usenav = useNavigate()
  return (
 
        <>
<div className="formulaire"/>
  <form className='form'>
    <h2>Sign Up!</h2>
      <div className='yass'>
      <fieldset className='fieldset'>
        <ul className='lul'>
          <li>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" required/>
          </li>
          <li>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" required/>
          </li>
          <li>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" required/>
          </li>
        </ul>
      </fieldset>
      </div>
      <button onClick={(e)=>usenav("/home")}>Submit</button>
      <button onClick={(e)=>usenav("/home")}>Cliquez Ici</button>
      
      
      
      

      
      </form>
      </>
           );
    
            
      }
    
    
      export default SignIn ;

