import React from 'react'
import './SignIn.css';


const SignIn = () => {
  return (
 
        <>
           <div className="formulaire"/>
        <form className='yass'>
    <h2>Sign Up!</h2>
    <div className='yass'>
      <fieldset className='yass'>
        <legend>Create Account</legend>
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
      <button>Submit</button>
      <button type="button" onClick={ () => this.changeView("logIn")}>Have an Account?</button>
      
      
      

      
      </form>
      </>
           );
    
            
      }
    
    
      export default SignIn ;

