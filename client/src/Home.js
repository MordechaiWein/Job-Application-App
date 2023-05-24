import React, { useContext } from "react";
import HomeCard from "./HomeCard";
import { MyContext } from "./MyContext";



function Home() {

    const {user} = useContext(MyContext)
    const JobApplications = user.applications.map(application => <HomeCard key={application.id} application={application}/>)
    
    return (
        <div className="homePage">
            <br/>
            <br/>
            <div className="welcome">
                <img className="image" src="https://wallpapers.com/images/featured/40lkhq7b7tl3p1qw.jpg" alt="Fox"/>
                <h2 className="homeName">{user.username}</h2> &nbsp;&nbsp;&nbsp;<h2 className="check">✔</h2>
            </div>
            <p className="homeBio">{user.bio}</p>
            <br/>
            <h1 className="homeApplication">Your Job Applications:</h1>
            <hr/>
           <div className="gridcontainer">
                <h2 className="grid1">Job Name</h2>
                <h2 className="grid2">Name</h2>
                <h2 className="grid2" >Phone</h2>
                <h2 className="grid2">Email</h2>
                <h2 className="grid2">Experience</h2>
                <h2 className="grid2">Edit</h2>
                <h2 className="grid2">Delete</h2>
           </div>
           <hr/>
            {JobApplications}
        </div>
    )
}

export default Home