import React, { useContext } from "react";
import { MyContext } from "./MyContext";
import { useParams } from "react-router-dom";

function Application() {

    const params = useParams()
    
    const {jobs} = useContext(MyContext)
    
    // const jobName = jobs.find(job => parseInt(params.id) === job.id)


    return (
        <div>
            <h1></h1>
            <form>

            </form>
        </div>
    )
}

export default Application