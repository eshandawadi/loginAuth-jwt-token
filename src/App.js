import React  from 'react';

import logo from './logo.svg';
import './App.css';
import Login from '../src/auth/Login'

// import axios from 'axios';
// import baseURL from './API';

function App() {
  //
  //   axios.post("https://qa-school.krafters.dev/api/login-custom", {
  //     email: email,
  //     password: password
  //   })
  //   .then((response) => {
  //     console.log(response);
  //   });
   
  // }
 
  return (
    <div className="App">
      
      <Login/>

    </div>                   
  );
}


export default App;
