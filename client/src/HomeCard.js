import React, { useState, useContext } from "react";
import { MyContext } from "./MyContext";

function HomeCard({application}) {

    const {eraseApplication, editApplication } = useContext(MyContext)
    const [editFlag, setEditFlag] = useState(true)
    const [errors, setErrors] = useState([])
    const [data, setData] = useState({
        first_name: application.first_name,
        last_name: application.last_name,
        age: application.age,
        work_experience: application.work_experience,
        phone_number: application.phone_number,
        email_address: application.email_address,
    })
    
    function handleSubmit(e) {
        e.preventDefault()
        fetch(`/applications/${application.id}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        })
        .then((response) => {
            if (response.ok) {
                response.json().then(data => {
                    setEditFlag(true)
                    editApplication(data)
                    setErrors([])
                })
            } else {
                response.json().then(data => {
                    setErrors(data.errors)
                })
            }
        })
    }

    function handleChange(event) {
        setData({...data,[event.target.name]: event.target.value})
    }

    function handleClick() {
        fetch(`/applications/${application.id}`, {
            method: "DELETE" 
        })
        .then(response => response.json())
        .then(data => eraseApplication(data))
    }
    
    return (
        <div>
            <div className="homeCard">
                <h1 className="nameCard">{application.application_name} Application</h1>
                <button className="homeButtons" onClick={() => setEditFlag(!editFlag)}>Edit</button>
                <button className="homeButtons" onClick={handleClick}>Delete</button>
                <li className="italic">{application.first_name} {application.last_name} &nbsp; {application.phone_number} &nbsp; {application.email_address} &nbsp; {application.work_experience}</li> 
            </div>
            {editFlag ? 
                "" 
                : 
                <div className="applicationForm">
                    <h1 className="appCenter">{application.application_name} Application Form</h1> 
                    <h4 className="appCenter">We are an Equal Opportunity Employer and committed to excellence through diversity</h4>
                    <hr className="hr"/>
                    <br/>
                    <h2 className="personalInformation">Personal Information</h2>
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
            }
        </div>
    )
}

export default HomeCard
