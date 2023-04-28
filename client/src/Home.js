import React, { useContext } from "react";
import ApplicationCard from "./ApplicationCard";
import { MyContext } from "./MyContext";

function Home() {

    const {user, applications} = useContext(MyContext)
    const JobApplications = applications ? applications.map(application => <ApplicationCard key={application.id} application={application}/>) : []
    
    return (
        <div className="homePage">
             <h2 className="homeName">👋 Welcome {user.username}</h2>
             <p className="homeBio">{user.bio}</p>
            <br/>
            <h1 className="yja">Your Job Applications:</h1>
            {JobApplications}
           
        </div>
    )
}

export default Home