import React from "react";

function JobCard({job}) {
    return ( 
        <div>
            <h1>{job.name}</h1>
            <h1>{job.job_description}</h1>
            <h1>{job.pay}</h1>
        </div>
    )
}

export default JobCard