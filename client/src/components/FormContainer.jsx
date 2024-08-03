import React from "react";
import SocialIcons from "./SocialIcons";

function FormContainer({ type }) {
  return (
    <div className={`form-container ${type}`}>
      <form action="" method="POST">
        <h1>{type === "sign-up" ? "Create Account" : "Sign In"}</h1>
        <SocialIcons />
        <span>
          {type === "sign-up"
            ? "or use your email for registration"
            : "or use your email and password"}
        </span>
        {type === "sign-up" && <input type="text" placeholder="Name" />}
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        {type === "sign-in" && <a href="#">Forget your password?</a>}
        <button id="main-btn">{type === "sign-up" ? "Sign Up" : "Sign In"}</button>
      </form>
    </div>
  );
}

export default FormContainer;
