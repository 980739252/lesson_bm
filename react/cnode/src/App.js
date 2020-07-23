import React from 'react';
import {BrowserRouter,Router} from 'react-router-dom'
import Login from './Login'
import Collect from './Collect'
import logo from './logo.svg';
import  PrivateRoute from './PrivateRoute'
import './App.css';

function App() {
  return (
        <BrowserRouter>
        header
        <Router path="/login" commponent={Login}/>
       < PrivateRoute path="/login"/>
        </BrowserRouter>
  );
}

export default App;
