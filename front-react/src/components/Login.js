import React from "react";
import { useState, useEffect } from "react";
import classes from "./Login.module.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [token, setToken] = useState("");

  let navigate = useNavigate(); 
  const routeChange = (x) =>{
    let path;
    x ? path = `/admin`:  path = `/` ; 
    navigate(path);
  }

    //Login User
    const loginUser = async (credentials) => {
    const res = await fetch("http://127.0.0.1:8000/api/v1/user/login", {
        method: "POST",
        headers: {
        "Content-type": "application/json",
        },
        body: JSON.stringify(credentials),
    });
    const data = await res.json();
    //console.log(data);
    data.error ? alert("User Not Found") : alert("You are now signed in!");
    data.access_token && localStorage.setItem('access_token', data.access_token);
    data.type == '1' ? routeChange(true) : routeChange(false)  ;
    };

  //Add Data to Backend on Submit
  const onSubmit = (e) => {
    e.preventDefault();
    if ( !email || !password ) {
      alert("Please fill all fields!");
      return;
    }
    loginUser({ email, password});
    setEmail("");
    setPassword("");
  };

  return (
    <div className={classes.loginContainer}>
      <h1 style={{ textAlign: "center" }}>Sign In</h1>
      <hr />

      <form onSubmit={onSubmit}>
        <div  className={classes.containerLogin}>
          <label for="email">
            <b>Email</b>
          </label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />

          <label for="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />

          <button type="submit">Login</button>
          <label>
            <input type="checkbox" name="remember" /> Remember me
          </label>
        </div>

        <div
          
          className={classes.containerLogin}
        >
          <Link to="/"><button type="button" className={classes.cancelbtnn}>
            Cancel
          </button></Link>
          <span  className={classes.psw}>
            Forgot <a href="#">password?</a>
          </span>
        </div>
      </form>
    </div>
  );
}
