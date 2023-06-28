import React, { useState } from "react";
import "./Login.css";
import LoginImage from "./LoginImage.jpeg";

const Login = () => {
  const [forgotPassword, setForgotPassword] = useState(false);
  const [email, setEmail] = useState("");

  const handleForgetPassword = () => {
    setForgotPassword(true);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSendEmail = () => {
    // Code to send the auto-generated email and handle password change
    console.log("Sending email to:", email);
    // Reset the forget password state and email field
    setForgotPassword(false);
    setEmail("");
  };

  return (
    <div className="">
      <title>Login Page</title>

      <div class="container">
        <div class="content img1">
          <div class="image">
            <img
              className=""
              style={{ height: "420px" }}
              src={LoginImage}
              alt="img not found"
            />
          </div>
          <div className="formContent">
            <div className="">
              <div class="login">
                <div style={{ fontSize: "larger" }}>Login</div>
              </div>
              {!forgotPassword ? (
                <form>
                  <div className="formContent">
                    <div className="formLabel">
                      <label for="email" style={{ minWidth: "80px" }}>
                        Email
                      </label>
                      <input
                        type="email"
                        placeholder="Email"
                        id="email"
                        onChange={handleEmailChange}
                        value={email}
                      />
                    </div>

                    <div className="formLabel">
                      <label for="pass" style={{ minWidth: "80px" }}>
                        Password
                      </label>
                      <input
                        type="password"
                        placeholder="Password"
                        id="pass"
                      />
                    </div>
                    <div
                      className="password-reset"
                      style={{
                        textAlign: "end",
                        fontSize: "smaller",
                        color: "#473C3C",
                      }}
                    >
                      <label onClick={handleForgetPassword}>
                        Forget Password?
                      </label>
                    </div>
                  </div>
                  <div className="button" style={{ textAlign: "center" }}>
                    <button>Login</button>
                  </div>
                </form>
              ) : (
                <div>
                  <div className="formContent">
                    <div className="formLabel">
                      <label for="email" style={{ minWidth: "80px" }}>
                        Email
                      </label>
                      <input
                        type="email"
                        placeholder="Email"
                        id="email"
                        onChange={handleEmailChange}
                        value={email}
                      />
                    </div>
                  </div>
                  <div className="button" style={{ textAlign: "center" }}>
                    <button onClick={handleSendEmail}>Send</button>
                  </div>
                </div>
              )}

              <div className="br">
                <hr />
                <span style={{ color: "grey" }}>OR</span>
                <hr />
                <br />
                <br />
              </div>
              <div className="fr" style={{ fontSize: "smaller" }}>
                <span style={{ color: "#473C3C" }}>
                  Don't have an account?{" "}
                  <a href="/Signup" > 
                    Sign Up
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
