import React, { useContext } from 'react';
import Login from './Login';
import Jobs from './Jobs';
import Home from './Home';
import JobForm from './JobForm';
import Navigation from './Navigation';
import Admin from './Admin';
import { MyContext } from "./MyContext";
import { Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  
  const {user} = useContext(MyContext)
  
  if (!user) return  <Login/>

  return (
    <div>
      <Navigation />
      <Switch> 
        <Route exact path="/" >
          <Home />
        </Route>
        <Route exact path="/jobs" >
          <Jobs/>
        </Route>
        <Route path="/jobs/:id">
          <JobForm />
        </Route>
        <Route path="/admin">
          <Admin/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
