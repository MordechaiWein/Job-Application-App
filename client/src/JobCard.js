import React from "react";
import { Link } from "react-router-dom";

function JobCard({job}) {
    
    return ( 
        <div className="card">
            <Link className="link" to={`/jobs/${job.id}`}>
                <h1 className="jobName">{job.name}</h1>
                <h1 className="jobDescription">{job.job_description}</h1>
                <h1 className="jobDescription">{job.pay}</h1>
            </Link>
        </div>
    )
}

export default JobCard