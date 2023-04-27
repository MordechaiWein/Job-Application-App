import React, { useContext, useEffect, useState } from "react";
import ApplicationCard from "./ApplicationCard";
import { MyContext } from "./MyContext";

function Home({applications, eraseApplication}) {

    const {user} = useContext(MyContext)
    const JobApplications = applications.map(application => <ApplicationCard key={application.id} application={application} eraseApplication={eraseApplication}/>)
    
    
    return (
        <div className="homePage">
             <h2>Welcome: {user.username}</h2>
            <p>Bio: {user.bio}</p>
            <br/>
            <h1>Your Job Applications:</h1>
            {JobApplications}
            <hr/>
        </div>
    )
}

export default Home