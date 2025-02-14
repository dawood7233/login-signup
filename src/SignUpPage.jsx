import React, { useState } from "react";
import "./SignUpPage.css";
import { Link } from "react-router-dom";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUpPage = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!fullname || !email || !password) {
      setError("All fields are required.");
      return;
    }
    if (!validateEmail(email)) {
      setError("Invalid email format.");
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("Account Created");
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        setError("The email address is already in use by another account.");
      } else if (err.code === "auth/invalid-email") {
        setError("Invalid email format.");
      } else {
        setError(err.message);
      }
    }
  };

  return (
    <div className="signUp-container">
      <form className="signUpForm" onSubmit={handleSubmit}>
        <h2>SignUp</h2>
        {error && <p className="error">{error}</p>}
        <label htmlFor="FullName">
          Full Name: <input type="text" onChange={(e) => setFullname(e.target.value)} />
        </label>
        <label htmlFor="email">
          Email: <input type="text" onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label htmlFor="password">
          Password: <input type="password" onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit">Sign Up</button>
        <p>
          Already Registered? <Link to={"/login"}>Login</Link>
        </p>
      </form>
    </div>
  );
};

export default SignUpPage;
