import React, { useState, useContext } from "react";
import { MyContext } from "./MyContext";

function SignUp() {

    const {setUser} = useContext(MyContext)
    const [errors, setErrors] = useState([])
    const [data, setData] = useState({
        username:"",
        password:"",
        password_confirmation:"",
        image_url:"",
        bio:"",
        admin: false
    })
    
    function handleSubmit(e) {
        e.preventDefault()
        fetch("/signup", {
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
                <br/>
                <input onChange={handleChange} className='input' type="text" name="username" value={data.username}/>
                <br />
                <label className='label'>Password</label>
                <br />
                <input onChange={handleChange} className='input' type="password" name="password" value={data.password}/>
                <br/>
                <label className='label'>Password Confirmation</label>
                <br />
                <input onChange={handleChange} className='input' type="password" name="password_confirmation" value={data.password_confirmation}/>
                <br />
                <label className='label'>Profile Image</label>
                <br />
                <input onChange={handleChange} className='input' type="text" name="image_url" value={data.image_url}/>
                <br />
                <label className='label'>Bio</label>
                <br />
                <textarea onChange={handleChange} className='textInput' name="bio" value={data.bio}/>
                <input className='submit' type="submit" value="Sign Up"/>
                {errors.map((error) => <p key={error} className="errors"><p className="exclamtion">❗️</p>{error}</p>)}
            </form> 
        </div>
    )
}

export default SignUp