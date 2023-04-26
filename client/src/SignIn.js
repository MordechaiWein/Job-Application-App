import React, { useState, useContext } from "react";
import { MyContext } from "./MyContext";

function SignIn() {

    const {setUser} = useContext(MyContext)
    const [errors, setErrors] = useState(null)
    const [data, setData] = useState({
        username:"",
        password:""
    })

    function handleSubmit(e) {
        e.preventDefault()
        fetch("/login", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        })
        .then((response) => {
            if (response.ok) {
                response.json().then(data => setUser(data))
            } else {
                response.json().then(data => setErrors(data.errors))
            }
        })
    }

    function handleChange(event) {
        setData({...data,[event.target.name]: event.target.value})
    }



    return (
        <div>
         <form onSubmit={handleSubmit}>
            <label className='label'>Username</label>
            <br />
            <input onChange={handleChange} className='input' type="text" name="username" value={data.username}/>
            <br />
            <label className='label'>Password</label>
            <br />
            <input onChange={handleChange} className='input' type="password" name="password" value={data.password}/>
            <br/>
            <input className='submit' type="submit" value="Login"/>
            { !errors ? "" : <p className="errors"><p className="exclamtion">❗️</p>{errors}</p>}
         </form>
        </div>
    )
}

export default SignIn