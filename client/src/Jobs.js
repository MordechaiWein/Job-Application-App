import React, {useEffect, useState } from "react";

import JobCard from "./JobCard";

function Jobs() {  

    const [jobs, setJobs] = useState([])
    
    useEffect(() => {
        fetch('/jobs')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setJobs(data)
            
        })
    },[])

    const jobList = jobs.map(job => <JobCard key={job.id} job={job}/>)
    
    return (
        <div>
            <br/>
            <h1 className="apply">Apply for available job opportunities and get hired !</h1>
            <br/>
            {jobList}
        </div>
    )
}

export default Jobs