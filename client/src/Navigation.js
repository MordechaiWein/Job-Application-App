import React, { useContext } from "react";
import { MyContext } from "./MyContext";
import { NavLink, useHistory } from "react-router-dom";

function Navigation() {
  
  const {setUser} = useContext(MyContext)
  const history = useHistory()
  const linkStyles = {
    padding: "20px",
    margin: "0 0px 6px",
    fontWeight: "bold",
    fontSize: "20px",
    textDecoration: "none",
    color: "white",
  }

  function handleClick() {
    fetch("/logout", {
      method: "DELETE"
    })
    .then(setUser(null), history.push("/"))
  }

  return (
    <div className="navigation">
      <div className="logoCenter">
        <img className="logoImage" src="https://img.icons8.com/?size=512&id=n57TZxD4nPYO&format=png" alt="logo"/>
        <h1 className="navTitle">New Career Network</h1>
      </div>
      <div className="right">
        <NavLink to="/" exact style={linkStyles}> Home </NavLink>
        <NavLink to="/jobpage" exact style={linkStyles}> Jobs </NavLink>
        <NavLink to="/admin" exact style={linkStyles}> Admin </NavLink>
        <button className="logout" onClick={handleClick}>Log Out</button>
      </div>
    </div>
  )
}

export default Navigation