import React, { useContext } from "react";
import ApplicationCard from "./ApplicationCard";
import { MyContext } from "./MyContext";

function Home() {

    const {user, applications} = useContext(MyContext)
    const JobApplications = applications.map(application => <ApplicationCard key={application.id} application={application}/>)
    
    
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