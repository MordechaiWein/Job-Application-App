import React, { useState, useEffect } from "react";

const MyContext =  React.createContext() 

function MyProvider({children}) {

    const [user, setUser] = useState(null)
    const [jobs, setJobs] = useState([])
    
    useEffect(() => {
        fetch("/me")
        .then((response) => {
            if (response.ok) {
                response.json().then(data => {
                    setUser(data)
                   
                })
            }
        })
    },[])

    useEffect(() => {
        fetch('/jobs')
        .then(response => response.json())
        .then(data => setJobs(data))
    },[])
    
    function eraseApplication(erasedApplication) {
        const applicationsToDisplay = user.applications.filter(application => application.id !== erasedApplication.id)
        setUser( {...user, applications: applicationsToDisplay } )
    }
    
    function editApplication(updatedApplication) {
        const updateApplication = user.applications.map((application) => {
            if (application.id === updatedApplication.id) {
                return updatedApplication
            } else {
                return application
            }
        })
        setUser( {...user, applications: updateApplication } )
    }
    
    return (
        <MyContext.Provider value={{ user, setUser, jobs, setJobs, eraseApplication, editApplication }}>
            {children}
        </MyContext.Provider>
    ) 
}

export { MyProvider, MyContext}

