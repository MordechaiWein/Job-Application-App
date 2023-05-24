import React, { useState, useEffect } from "react";

const MyContext =  React.createContext() 

function MyProvider({children}) {

    const [user, setUser] = useState(null)
    const [jobs, setJobs] = useState([])
    
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

    function editJobUsers(data) {
        const jobList = jobs.map(job => {
            if (job.id === data.job_id) {
                return {...job, users: [...job.users, user]}
            }
            return job
        })
        setJobs(jobList)
    }

    function eraseJobUser(data) {
        const jobUsersToDisplay = jobs.map(job => { 
            if (job.id === data.job_id) {
                return {...job, users: job.users.filter(user => user.id !== data.user_id)}
            } else {
                return job
            }
        })
        setJobs(jobUsersToDisplay)
    }
    
    return (
        <MyContext.Provider value={{ user, setUser, jobs, setJobs, eraseApplication, editApplication, editJobUsers, eraseJobUser}}>
            {children}
        </MyContext.Provider>
    ) 
}

export { MyProvider, MyContext}











