import React, { useContext, useState } from "react";
import { MyContext } from "./MyContext";
import { useHistory } from "react-router-dom";

function Admin() {

    const {user, jobs, setJobs} = useContext(MyContext)
    const history = useHistory()
    const [flag, setFlag] = useState(true)
    const [admin, setAdmin] = useState("")
    const [errors, setErrors] = useState([])
    const [data, setData] = useState({
        name:"",
        job_description:"",
        pay:""
    })
    
    function handleSubmit(e) {
        e.preventDefault()
        setAdmin("Thank you! your request has been submitted")
        setFlag(true)
    }

    function handleClick() {
        setFlag(false)
        setAdmin("")
    }

    function handleChange(event) {
        setData({...data,[event.target.name]: event.target.value})
    }

    function adminSubmit(e) {
        e.preventDefault()
        fetch("/jobs", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        })
        .then((response) => {
            if (response.ok) {
                response.json().then(data => {
                    setJobs([...jobs, data])
                    history.push("/jobpage")
                })
            } else {
                response.json().then(data => setErrors(data.errors))
            }
        })
    }

    if (user.admin === false) return (
        <div>
            <div className="App">
                <h1>Welcome to the Admin Page</h1>
                <h2>Only admins may add job opportunities to this website</h2>
                <h3>Become an admin today!</h3>
                <br/>
                <button className="becomeAdmin" onClick={handleClick}>Become an admin</button>
                <h1>{admin}</h1>
            </div>
            <br />
            {flag ? 
                "" 
                : 
                <div>
                    <br/>
                    <br/>
                    <div className="adminRequest">
                        <h2>Admin Request</h2>
                        <form onSubmit={handleSubmit}>
                            <label className="label">tell us why you should become an admin</label>
                            <br/>
                            <br/>
                            <textarea className="textInput" type="text"/>
                            <br/>
                            <br/>
                            <input className="adminSubmit" type="submit"/>
                        </form>
                    </div>
                </div>
            }
        </div>
    )

    return (
        <div>
            <div className="App">
                <h1>Hello {user.username}</h1>
                <h2>You can add job opportunities to our website here</h2>
           </div>
           <div>
                <form className="adminForm" onSubmit={adminSubmit}>
                    <label className="label">Job Name</label>
                    <br/>
                    <br/>
                    <input onChange={handleChange} className="input" input type="text" name="name" value={data.name}/>
                    <br/>
                    <br/>
                    <label className="label">Job Description</label>
                    <br/>
                    <br/>
                    <textarea onChange={handleChange}  className="textInput" input type="text" name="job_description" value={data.job_description}/>
                    <br/>
                    <br/>
                    <label className="label">Pay</label>
                    <br/>
                    <br/>
                    <input onChange={handleChange} className="input" input type="text" name="pay" value={data.pay}/>
                    <br/>
                    <br/>
                    {errors.map(error => <li key={error} className="generalErrors">{error}</li>)}
                    <br/>
                    <input className="adminSubmit" type="submit"/>
                </form>
           </div>
        </div>
    )
}

export default Admin