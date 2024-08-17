import React, { useState } from "react";
import { Login } from "./Login";
import { Register } from "./Register";
import "./authPage.css";
export const AuthPage = () => {
    const [islogin, setIsLogin] = useState(true);
    const handleAuthPageToggle = () => {
        setIsLogin((prev) => !prev);
    };          

    return <div className="auth-container">
        {islogin ? (
    <Login switchAuthHandler = {handleAuthPageToggle}/> 
        ) : (
    <Register switchAuthHandler = {handleAuthPageToggle}/>
    )}
    </div>;
};