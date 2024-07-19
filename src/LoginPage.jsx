import React, { useState } from "react";
import "./SignUpPage.css";
import { Link } from "react-router-dom";
import { auth } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("All fields are required.");
      return;
    }
    if (!validateEmail(email)) {
      setError("Invalid email format.");
      return;
    }
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("Login successful");
      window.location.href = "https://www.google.com"; // Redirect to Google after successful login
    } catch (err) {
      if (err.code === "auth/user-not-found") {
        setError("No user found with this email.");
      } else if (err.code === "auth/wrong-password") {
        setError("Incorrect password.");
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
        <h2>Login</h2>
        {error && <p className="error">{error}</p>}
        <label htmlFor="email">
          Email: <input type="text" onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label htmlFor="password">
          Password: <input type="password" onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit">Login</button>
        <p>
          Don't have an account? <Link to={"/signup"}>Register</Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;