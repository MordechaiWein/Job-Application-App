import React, { useContext, useEffect, useState } from 'react';
import Login from './Login';
import Jobs from './Jobs';
import Home from './Home';
import Application from './Application';
import Navigation from './Navigation';
import Admin from './Admin';
import { MyContext } from "./MyContext";
import { Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  
  const {user} = useContext(MyContext)
  const [applications, setApplications] = useState([])

  useEffect(() => {
    fetch('/applications')
    .then(response => response.json())
    .then(data => setApplications(data))
  },[])

  function eraseApplication(erasedApplication) {
    const applicationsToDisplay = applications.filter(application => application.id !== erasedApplication.id)
    setApplications(applicationsToDisplay)
  }


  function editApplication(updatedApplication) {
    const updateApplication = applications.map((application) => {
        if (application.id === updatedApplication.id) {
        return updatedApplication
        } else {
        return application
        }
    })
    setApplications(updateApplication)
}
  
  if (!user) return  <Login/>

  return (
    <div>
      <Navigation />
      <Switch> 
        <Route exact path="/" >
          <Home applications={applications} eraseApplication={eraseApplication} editApplication={editApplication}/>
        </Route>
        <Route exact path="/jobs" >
          <Jobs/>
        </Route>
        <Route path="/jobs/:id">
          <Application setApplications={setApplications} applications={applications}/>
        </Route>
        <Route path="/admin">
          <Admin/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
