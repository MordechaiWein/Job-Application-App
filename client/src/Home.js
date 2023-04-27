import React, { useContext, useEffect, useState } from "react";
import ApplicationCard from "./ApplicationCard";
import { MyContext } from "./MyContext";

function Home({applications, eraseApplication, editApplication}) {

    const {user} = useContext(MyContext)
    const JobApplications = applications.map(application => <ApplicationCard key={application.id} application={application} eraseApplication={eraseApplication} editApplication={editApplication}/>)
    
    
    return (
        <div className="homePage">
             <h2>Welcome {user.username}</h2>
            <p>{user.bio}</p>
            <br/>
            <h1>Your Job Applications:</h1>
            {JobApplications}
            <hr/>
        </div>
    )
}

export default Home