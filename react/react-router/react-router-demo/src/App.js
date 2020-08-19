import React from 'react';
import Link from './Link';
import Route from './Router'
import {BrowserRouter} from './BrowserRouter'
import logo from './logo.svg';
import './App.css';
function User(){
  return 'User'
}
function About(){
  return 'About'
}
function Home(){
  return 'Home'
}
function App() {
  return (
    <BrowserRouter>
    <div >
      <li><Link to="/user"/>user</li>
      <li><Link to="/about"/>about</li>

      <Route path="/" component="Home" />
    </div>
    </BrowserRouter>
    
  );
}

export default App;
