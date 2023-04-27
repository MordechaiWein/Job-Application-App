import React, { useContext, useState } from "react";
import { MyContext } from "./MyContext";

function Admin() {

    const {user} = useContext(MyContext)
    const [flag, setFlag] = useState(true)
    const [admin, setAdmin] = useState("")
   

    function handleSubmit(e) {
        e.preventDefault()
        setAdmin("Thank you! your request has been submitted")
        setFlag(true)
    }

    function handleClick() {
        setFlag(false)
        setAdmin("")
    }

    if (user.admin === false) return (
        <div>
            <div className="App">
                <h1>Welcome to the Admin Page</h1>
                <h2>Only admins may add job opportunities to this website</h2>
                <h3>Become an admin today!</h3>
                <br/>
                <button className="becomeAdmin"  onClick={handleClick}>Become an admin</button>
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
                <form className="adminForm">
                    <label className="label">Job Name</label>
                    <br/>
                    <br/>
                    <input className="input" input type="text" name="" value=""/>
                    <br/>
                    <br/>
                    <label className="label">Job Description</label>
                    <br/>
                    <br/>
                    <textarea className="textInput" input type="text" name="" value=""/>
                    <br/>
                    <br/>
                    <label className="label">Salary</label>
                    <br/>
                    <br/>
                    <input className="input" input type="text" name="" value=""/>
                    <br/>
                    <br/>
                    <input className="adminSubmit" type="submit"/>
                </form>
           </div>
       
        </div>
    )
}

export default Admin