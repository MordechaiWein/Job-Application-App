import React, { useState, useContext } from "react";
import { MyContext } from "./MyContext";
import { Link } from "react-router-dom";

function HomeCard({application}) {

    const {eraseApplication, eraseJobUser} = useContext(MyContext)
    
    function handleClick() {
        fetch(`/applications/${application.id}`, {
            method: "DELETE" 
        })
        .then(response => response.json())
        .then(data => {
            eraseApplication(data)
            eraseJobUser(data)
        })
    }
    
    return (
        <div>
            <div className="gridcontainer">
                <p className="grid1">{application.job.name}</p>
                <p className="grid2">{application.last_name} &nbsp;{application.first_name}</p>
                <p className="grid2">{application.phone_number}</p>
                <p className="grid2">{application.email_address}</p>
                <p className="grid2">{application.work_experience}</p>
                <p className="grid2"> <Link  to={`/${application.id}`}className="homeButtonLink">Edit</Link></p>
                <p className="grid2"> <button className="homeButtons" onClick={handleClick}>Delete</button></p>
            </div>
            <hr/>
        </div>
    )
}

export default HomeCard
