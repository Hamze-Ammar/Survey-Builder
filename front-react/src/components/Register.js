import React from "react";
import { useState, useEffect } from "react";
import classes from "./Register.module.css";
import { Link } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  //Registering User
  const registerUser = async (credentials) => {
    const res = await fetch("http://127.0.0.1:8000/api/v1/user/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
    const data = await res.json();
    //console.log(data);
  };

  //Add Data to Backend on Submit
  const onSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password || !password_confirmation) {
      alert("Please fill all fields!");
      return;
    }
    registerUser({ name, email, password, password_confirmation });
    setName("");
    setEmail("");
    setPassword("");
    setRememberMe(false);
  };

  return (
    <div className={classes.containerRegister}>
      <form className={classes.modalContent} onSubmit={onSubmit}>
        <div className={classes.container}>
          <h1>Sign Up</h1>
          <p>Please fill in this form to create an account.</p>
          <hr className={classes.hr} />

          <label htmlFor="name">
            <b>Name</b>
          </label>
          <input
            type="text"
            placeholder="Enter Your Name"
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
          />

          <label htmlFor="email">
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

          <label htmlFor="psw">
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

          <label htmlFor="psw-repeat">
            <b>Repeat Password</b>
          </label>
          <input
            type="password"
            placeholder="Repeat Password"
            name="psw-repeat"
            value={password_confirmation}
            onChange={(e) => {
              setPasswordConfirmation(e.target.value);
            }}
            required
          />

          <label>
            <input
              type="checkbox"
              name="remember"
              checked={rememberMe}
              value={rememberMe}
              onChange={(e) => {
                setRememberMe(e.currentTarget.checked);
              }}
            />{" "}
            Remember me
          </label>

          <p>
            By creating an account you agree to our{" "}
            <a href="#">Terms & Privacy</a>.
          </p>

          <div className={classes.clearfix}>
            <Link to="/">
              <button type="button" className={classes.cancelbtn}>
                Cancel
              </button>
            </Link>
            <button type="submit" className={classes.signupbtn}>
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
