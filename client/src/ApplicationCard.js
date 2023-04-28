import React, { useState, useContext } from "react";
import { MyContext } from "./MyContext";

function ApplicationCard({application}) {

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
                <h1 className="aCName">{application.application_name} Application</h1>
                
               
               <button className="aCB" onClick={() => setEditFlag(false)}>Edit</button>
               <button className="aCB" onClick={handleClick}>Delete</button>
               <li className="italic">{application.first_name} {application.last_name}  &nbsp; {application.phone_number} &nbsp; {application.email_address}</li> 
            </div>
            {editFlag ? 
                "" 
            : 
            <div className="applicationForm">
                <h1 className="appCenter">{application.application_name} Application Form</h1> 
                
                <h4 className="appCenter">We are an Equal Opportunity Employer and committed to excellence through diversity</h4>
                <hr className="hr"/>
                <br/>
                <h2 className="appForm1">Personal Information</h2>
                <form className="appForm" onSubmit={handleSubmit}>
                    <label className='label'>Name</label>
                    <br/>
                    <br/>
                    <input className='inputA' onChange={handleChange} value={data.first_name} name="first_name" type="text" placeholder="first name"/> <input className='inputA' onChange={handleChange} value={data.last_name} name="last_name"  type="text" placeholder="last name"/>
                    <br/>
                    <br/>
                    <label className='label'>Phone Number</label> <label className='label1'>Email</label>
                    <br/>
                    <br/>
                    <input className='inputA' onChange={handleChange} value={data.phone_number} name="phone_number"  type="text"/> <input className='inputA' onChange={handleChange}  value={data.email_address} name="email_address" type="text" />
                    <br/>
                    <br/>
                    <label className='label' >Age</label>
                    <br/>
                    <br/>
                    <input className='inputA' onChange={handleChange} value={data.age} name="age" type="number"/>
                    <br/>
                    <br/>
                    <label className='label'>Work experience</label>
                    <br/>
                    <br/>
                    <textarea className='textInput1' onChange={handleChange} value={data.work_experience} name="work_experience"/>
                    <br/>
                    <br/>
                    {!errors ? "" : errors.map((error) => <li key={error} className="errors1">{error} !</li>)}
                    <label className='label'>Submit Application</label>
                    <br/>
                    <br/>
                    <input className='inputASubmit' type="submit" value="Submit Application"/>
                </form>
            </div>
            }
        </div>
    )
}

export default ApplicationCard