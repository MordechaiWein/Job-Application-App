import React, { useState, useEffect } from "react";

const MyContext =  React.createContext() 

function MyProvider({children}) {

    const [user, setUser] = useState(null)
    const [jobs, setJobs] = useState([])
    const [applications, setApplications] = useState([])

    useEffect(() => {
        fetch("/me")
        .then((response) => {
            if (response.ok) {
                response.json().then(data => setUser(data))
            }
        })
    },[])

    useEffect(() => {
        fetch('/jobs')
        .then(response => response.json())
        .then(data => setJobs(data))
    },[])

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
    
    return (
        <MyContext.Provider value={{ user, setUser, jobs, setJobs, applications, eraseApplication, editApplication, setApplications }}>
            {children}
        </MyContext.Provider>
    ) 

}

export { MyProvider, MyContext}