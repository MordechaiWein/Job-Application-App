import React, { useState, useContext} from "react";
import { MyContext } from "./MyContext";
import { useParams, useHistory } from "react-router-dom";

function JobForm() {
    
    const history = useHistory()
    const {user, setUser, jobs, editJobUsers} = useContext(MyContext)
    const params = useParams()
    const [errors, setErrors] = useState([])
    
    const jobName = jobs ? jobs.find(job => parseInt(params.id) === job.id) : [];
    const list = jobName ? jobName.users.map(user => <li className="list" key={user.id}>{user.username}</li>) : [];
   
    const [data, setData] = useState({
        first_name:"",
        last_name:"",
        age:"",
        work_experience:"",
        job_id: parseInt(params.id),
        phone_number:"",
        email_address:""
    })
    
    function handleSubmit(e) {
        e.preventDefault()
        fetch("/applications", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        })
        .then((response) => {
            if (response.ok) {
                response.json().then(data => {
                    setUser({...user, applications: [...user.applications, data]})
                    editJobUsers(data)
                    history.push("/")
                })
            } else {
                response.json().then(data => setErrors(data.errors))
            }
        })
    }
    
    function handleChange(event) {
        setData({...data,[event.target.name]: event.target.value})
    }
    
    return (
        <div className="sameLine">
            <div className="appliers">
                { jobName && jobName.users && jobName.users.length > 0 ? <h2>The following users have applied for the {jobName.name} Job:</h2> : <h2>No Users have applied for this job yet</h2>}
                {list}
            </div>
            <div className="applicationForm">
                {jobName ? <h1 className="appCenter">{jobName.name} Application Form</h1> : "loading"}
                <h4 className="appCenter">We are an Equal Opportunity Employer and committed to excellence through diversity</h4>
                <hr className="hr"/>
                <br/>
                <h2 className="appForm1">Personal Information</h2>
                <form className="appForm" onSubmit={handleSubmit}>
                    <label className='label'>Name</label>
                    <br/>
                    <br/>
                    <input className='homeInput' onChange={handleChange} value={data.first_name} name="first_name" type="text" placeholder="first name"/> <input className='homeInput' onChange={handleChange} value={data.last_name} name="last_name"  type="text" placeholder="last name"/>
                    <br/>
                    <br/>
                    <label className='label'>Phone Number</label> <label className='label1'>Email</label>
                    <br/>
                    <br/>
                    <input className='homeInput' onChange={handleChange} value={data.phone_number} name="phone_number"  type="text"/> <input className='homeInput' onChange={handleChange}  value={data.email_address} name="email_address" type="text" />
                    <br/>
                    <br/>
                    <label className='label' >Age</label>
                    <br/>
                    <br/>
                    <input className='homeInput' onChange={handleChange} value={data.age} name="age" type="number"/>
                    <br/>
                    <br/>
                    <label className='label'>Work experience</label>
                    <br/>
                    <br/>
                    <textarea className='textInput1' onChange={handleChange} value={data.work_experience} name="work_experience"/>
                    <br/>
                    <br/>
                    {!errors ? "" : errors.map((error) => <li key={error} className="generalErrors">{error}</li>)}
                    <label className='label'>Submit Application</label>
                    <br/>
                    <br/>
                    <input className='homeSubmit' type="submit" value="Submit Application"/>
                </form>
            </div>
            <div className="info">
                <h2 className="below">User Information:</h2>
                <div className="space">
                    <h3 className="nameInfo">{data.first_name}</h3>
                    &nbsp; &nbsp;
                    <h3 className="nameInfo">{data.last_name}</h3>
                </div>
                <h3 className="i">{data.phone_number}</h3>
                <h3 className="i">{data.email_address}</h3>
                <h3 className="i">{data.age}</h3>
                <h3 className="i">{data.work_experience}</h3>
            </div>
        </div>
    )
}

export default JobForm


