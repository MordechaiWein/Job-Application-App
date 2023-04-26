import React, { useState, useContext } from 'react';
import Login from './Login';
import Jobs from './Jobs';
import MyApplications from './MyApplications';
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
          <MyApplications/>
        </Route>
        <Route exact path="/jobs" >
          <Jobs/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
