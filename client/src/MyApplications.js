import React, { useContext } from "react";
import { MyContext } from "./MyContext";

function MyApplications() {

    const {user} = useContext(MyContext)

    return (
        <div>
             <h2>Welcome: {user.username}</h2>
            <p>Bio: {user.bio}</p>
        </div>
    )
}

export default MyApplications