import React, { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

function Login() {

    const [showLogin, setShowLogin] = useState(true)

    return (
        <div className="loginCenter">
           <h1 className="loginTitle">New Career Network</h1>
           {showLogin ? 
                <div>
                    <SignIn/> 
                    <hr/>
                    <p>Dont have an account? &nbsp; 
                        <button className='logInButton' onClick={() => setShowLogin(false)}>
                            Sign Up
                        </button> 
                    </p>  
                </div>
                : 
                <div>
                    <SignUp/> 
                    <hr/>
                    <p>Already have an account? &nbsp;
                        <button className='logInButton' onClick={() => setShowLogin(true)}>
                            Log In
                        </button> 
                    </p>  
                </div>
            }
        </div>
    )
}

export default Login