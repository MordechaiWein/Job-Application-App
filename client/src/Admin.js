import React, { useContext, useState } from "react";
import { MyContext } from "./MyContext";

function Admin() {

    const {user} = useContext(MyContext)
    const [flag, setFlag] = useState(true)

    if (user.admin === false) return (
        <div>
            <div className="App">
                <h1>Welcome to the Admin Page</h1>
                <h2>Only admins may add job opportunities to this website</h2>
                <h3>Become an admin today!</h3>
                <br/>
                <button onClick={() => setFlag(false)}>Become an admin</button>
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
                        <form>
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
            <h1>hello</h1>
        </div>
    )
}

export default Admin