import React from "react";
import "./SignUpPage.css";

const SignUpPage = () => {
  return (
    <div className="signUp-container">
      <form className="signUpForm">
        <h2>SignUp</h2>
        <label htmlFor="FullName">
          Full Name: <input type="text" />
        </label>
        <label htmlFor="email">
          Email: <input type="text" />
        </label>
        <label htmlFor="password">
          Password: <input type="password" />
        </label>
        <button>Sign Up</button>
        <p>
          Already Registered? <a>Login</a>
        </p>
      </form>
    </div>
  );
};

export default SignUpPage;
