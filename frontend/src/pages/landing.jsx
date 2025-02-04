import React from "react";
import "../App.css"
import {Link, useNavigate} from "react-router-dom"
export default function LandingPage(){
    const router=useNavigate();
    return(
        <div className="landingPageContainer">
            <nav>
                <div className="navHeader">
                    <h2>Booloom</h2>
                </div>
                <div className="navList">
                    <p onClick={()=>{
                        router("/aljk23")
                    }}>Join as Guest</p>
                    <p onClick={()=>{
                        router("/auth")
                    }}>Register</p>
                    <div onClick={()=>{
                        router("/auth")
                    }}role="button" >
                        <p>Login</p>
                    </div>
                </div>
            </nav>

            <div className="landingMainContainer">
                <div>
                    <h1><span style={{color:"#ff9839"}}> Connect</span> with your loved Onces </h1>
                    <p>Cover a distance by Booloom</p>
                    <div role="button">
                        <Link to={"/auth"}>Get Started</Link>
                          
                    </div>
                </div>
                <div>
                    <img src="/mobile.png" alt=""/>
                </div>
            </div>
            
        </div>
    )
}
