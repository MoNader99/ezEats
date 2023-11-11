import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './containers/HomePage/HomePage';
import LoginPage from './components/LoginPage/LoginPage';
import SignupPage from './components/SignupPage/SignupPage';


const Parse = require("parse");

const app_id = process.env.REACT_APP_PARSE_APP_ID;
const host_url = process.env.REACT_APP_PARSE_HOST_URL;
const javascript_key = process.env.REACT_APP_PARSE_JAVASCRIPT_KEY;
Parse.initialize(app_id,javascript_key);
Parse.serverURL= host_url;

function App() {

  // checking the connection with back4app
  /*
  const fetchAllVehciles = async ()=>{
    const query = new Parse.Query("B4aVehicle")
    const data = await query.find();

    data.forEach((item:any) => {
      console.log(item);
    });npm s
  }
  fetchAllVehciles();
  */

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/*" element={<HomePage/>} />
          <Route path="/Login" element={<LoginPage/>} />
          <Route path="/SignUp" element={<SignupPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
