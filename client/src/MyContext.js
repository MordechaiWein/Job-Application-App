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
        .then(data => {
            console.log(data)
            setJobs(data)
            
        })
    },[])
    

    return (
        <MyContext.Provider value={{user, setUser, jobs}}>
            {children}
        </MyContext.Provider>
    ) 

}

export { MyProvider, MyContext}