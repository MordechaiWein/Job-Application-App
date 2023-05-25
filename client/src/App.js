import React, { useContext } from 'react';
import Login from './Login';
import JobPage from './JobPage';
import Home from './Home';
import JobForm from './JobForm';
import Edit from './Edit';
import Navigation from './Navigation';
import Admin from './Admin';
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
        <Route exact path="/jobpage" >
          <JobPage/>
        </Route>
        <Route path="/jobs/:id">
          <JobForm />
        </Route>
        <Route path="/admin">
          <Admin/>
        </Route>
        <Route path="/:id">
          <Edit/>
        </Route>
     </Switch>
    </div>
  );
}

export default App;
