import React, { useContext } from "react";
import { MyContext } from "./MyContext";
import JobCard from "./JobCard";

function Jobs() {  

    const {jobs} = useContext(MyContext)
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