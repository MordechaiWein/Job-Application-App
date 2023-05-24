import React, { useContext } from "react";
import HomeCard from "./HomeCard";
import { MyContext } from "./MyContext";
import 'bootstrap/dist/css/bootstrap.min.css';


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
            <br/>
            <div className="row">
                <div className="col">
                    <h3>Job Name</h3>
                </div>
                <div className="col">
                <h3>Name</h3>
                </div>
                <div className="col">
                <h3>Phone</h3>
                </div>
                <div className="col">
                <h3>Email</h3>
                </div>
                <div className="col">
                <h3>Experience</h3>
                </div>
                <div className="col">
                <h3>Edit</h3>
                </div>
                <div className="col">
                <h3>Delete</h3>
                </div>
                <hr/>
            </div>
            {JobApplications}
        </div>
    )
}

export default Home