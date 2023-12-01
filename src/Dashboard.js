import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard(){
 const navigate=useNavigate()
        const [logout,setLogout]=useState(false)

useEffect(()=>{
    if(!localStorage.getItem("auth")) navigate('/login')
},[logout])


    const handleLogout=(e)=>{
        e.preventDefault()
        localStorage.removeItem("auth")
        setLogout(true)

    }
return(
    <div className="dashboard">
        <h2>
            i am Dashboard page
        </h2>
        <button onClick={handleLogout}>logout</button>
    </div>
)
}

export default Dashboard ;