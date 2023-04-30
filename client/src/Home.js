import React, { useContext } from "react";
import HomeCard from "./HomeCard";
import { MyContext } from "./MyContext";

function Home() {

    const {user, applications} = useContext(MyContext)
    const JobApplications = applications.map(application => <HomeCard key={application.id} application={application}/>) 
    
    return (
        <div className="homePage">
            <br/>
            <br/>
            <div className="welcome">
                <img className="image" src={user.image_url}/>
                <h2 className="homeName">{user.username}</h2>
            </div>
            <p className="homeBio">{user.bio}</p>
            <br/>
            <h1 className="homeApplication">Your Job Applications:</h1>
            {JobApplications}
        </div>
    )
}

export default Home