import React from "react";
import "../App.css"
import {Link, useNavigate} from "react-router-dom"
export default function LandingPage(){
    return(
        <div className="landingPageContainer">
            <nav>
                <div className="navHeader">
                    <h2>Booloom</h2>
                </div>
                <div className="navList">
                    <p>Join as Guest</p>
                    <p>Register</p>
                    <button>Login</button>
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
