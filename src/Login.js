import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login(){
    const navigate= useNavigate()


    useEffect(()=>{
        if( localStorage.getItem("auth")) navigate('/Dashboard')
    },[])





    const formSubmit=(e)=>{
        e.preventDefault()
        if(e.target.elements.name.value ==="test" || e.target.elements.psw.value ==="test@123"){
            navigate('/Dashboard');
            localStorage.setItem("auth",true)
            console.log("correct")
        }
        else{
            console.log("incorrect")
        }
    }
return(
    <div className="login">
        <h2>
            i am login page
        </h2>
        <form onSubmit={formSubmit}>
            <input type="text" name="name" placeholder="Enter your name"/>
            <input type="password" name="psw" placeholder="Enter your password"/>

            <button type= "submit"> login </button>
        </form>
    </div>
)
}

export default Login ;