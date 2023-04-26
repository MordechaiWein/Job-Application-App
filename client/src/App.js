import React, { useState, useContext } from 'react';
import Login from './Login';
import Home from './Home';
import Navigation from './Navigation';
import { MyContext } from "./MyContext";
import { Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  
  const {user} = useContext(MyContext)
  
  if (!user) return <Login/>

  return (
    <div>
      <Navigation />
      <Switch> 
        <Route exact path="/" >
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
