
import './App.css';
import Greeting from './components/Greeting/Greeting';
import { useState } from 'react'
import React from 'react'

function App() {
   const [formValues, setFormValues] = React.useState({
      name: "",
      email: "",
      hobi: "",
      password: "",
      })
   return ( 
   <div className="card-container">
      <form onSubmit={ (e) => {
      e.preventDefault();
      console.log(formValues.name)
      }}>
        <label htmlFor="html">name</label>
        <input 
        type="text" 
        id="html" 
        name="fav_language" 
        value={formValues.name}
        onChange={(event) => setFormValues(prev => ({...prev,
         name: event.target.value})
        
        )}/>
        <br />
        <label htmlFor="css">email</label>
        <input type="email" id="css" name="fav_language" />
        <br />
        <label htmlFor="javascript">hobi</label>
        <input type="hobi" id="javascript" name="fav_language" />
        <br />
        <br />
        <input type="submit" defaultValue="Submit" />
      </form>
    </div>
   )
}

export default App;
