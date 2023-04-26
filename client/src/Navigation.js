import React, { useContext } from "react";
import { MyContext } from "./MyContext";
import { NavLink } from "react-router-dom";

function Navigation() {

    const {setUser, user} = useContext(MyContext)
    const linkStyles = {
        
        display: "inline-block",
        padding: "20px",
        margin: "0 0px 6px",
        fontWeight: "bold",
        textDecoration: "none",
        color: "white",
      }

    function handleClick() {
        fetch("/logout", {
            method: "DELETE"
        })
        .then(setUser(null))
    }

    return (
        <div className="navigation">
          <h1 className="navTitle">New Career Network</h1>
          <div className="right">
            <NavLink to="/" exact style={linkStyles} > Home </NavLink>
            <NavLink to="/applications" exact style={linkStyles}> My Applications </NavLink>
            <button className="logout"onClick={handleClick}>Log Out</button>
          </div>
        
        </div>
    )
}

export default Navigation