import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "./MyContext";
import JobCard from "./JobCard";

function Home() {  

    const [jobs, setJobs] = useState("")
    const {user} = useContext(MyContext)

    useEffect(() => {
        fetch('/jobs')
        .then(response => response.json())
        .then(data => setJobs(data))
    },[])

    const jobList = jobs.map(job => <JobCard key={job.id} job={job}/>)


    return (
        <div>
            <br/>
            <br/>
            <img className="profileImage" src={user.image_url}/>
            <h2>{user.username}</h2>
            <p>{user.bio}</p>
            {jobList}
        </div>
    )
}

export default Home