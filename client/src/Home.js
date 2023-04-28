import React, { useContext } from "react";
import HomeCard from "./HomeCard";
import { MyContext } from "./MyContext";

function Home() {

    const {user, applications} = useContext(MyContext)
    const JobApplications = applications.map(application => <HomeCard key={application.id} application={application}/>) 
    
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