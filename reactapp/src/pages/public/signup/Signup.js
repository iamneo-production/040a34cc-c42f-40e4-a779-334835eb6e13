import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Signup.css";
import SignupImage from "../../../images/sign-up.jpeg";

const Signup = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError("");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [error]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { fname, lname, email, pass, cpass, address, mno } =
      event.target.elements;

    if (
      !fname.value ||
      !lname.value ||
      !email.value ||
      !pass.value ||
      !cpass.value ||
      !address.value ||
      !mno.value
    ) {
      setError("Please enter all fields");
      return;
    }

    // Compare password and confirm password
    if (pass.value !== cpass.value) {
      setError("Password should be the same");
      return;
    }

    const registrationRequest = {
      firstName: fname.value,
      lastName: lname.value,
      email: email.value,
      password: pass.value,
      phoneNumber: mno.value,
      address: address.value,
      role: "USER",
    };

    try {
      const response = await axios.post(
        "http://localhost:8090/register",
        registrationRequest
      );
      if (response.status === 200) {
        setMessage(response.data);
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      setError(error.response.data.message);
    }
  };
  return (
    <div className="main signup-scrollable-content">
      <div className="left">
        <img className="signup-image" src={SignupImage} alt="img not found" />
      </div>

      <div className="right">
        <form className="signup" onSubmit={handleSubmit}>
          <h3
            style={{ paddingTop: "5px", fontSize: "25px", textAlign: "center" }}
          >
            SIGN UP
          </h3>

          <div className="signup-content">
            <div>
              <label className="signup-label" htmlFor="fname">
                First Name
              </label>
              <input className="signup-input" type="text" id="fname" />
            </div>

            <div>
              <label className="signup-label" htmlFor="lname">
                Last Name
              </label>
              <input className="signup-input" type="text" id="lname" />
            </div>

            <div>
              <label className="signup-label" htmlFor="email">
                Email
              </label>
              <input className="signup-input" type="email" id="email" />
            </div>

            <div>
              <label className="signup-label" htmlFor="pass">
                Password
              </label>
              <input className="signup-input" type="password" id="pass" />
            </div>

            <div>
              <label className="signup-label" htmlFor="cpass">
                Confirm Password
              </label>
              <input className="signup-input" type="password" id="cpass" />
            </div>

            <div>
              <label className="signup-label" htmlFor="address">
                Address
              </label>
              <input className="signup-input" type="text" id="address" />
            </div>

            <div>
              <label className="signup-label" htmlFor="mno">
                Phone Number
              </label>
              <input className="signup-input" type="text" id="mno" />
            </div>
          </div>

          <div className="signup-btn">
            <button className="signup-button" type="submit">
              Sign up
            </button>
            <button className="signup-button">Cancel</button>
          </div>
          <br />
          {message && (
            <div className="success-message" align="center">
              <span style={{ color: "green" }}>{message}</span>
            </div>
          )}
          {error && (
            <div className="error-message" align="center">
              <span style={{ color: "red" }}>{error}</span>
            </div>
          )}

          <div className="br">
            <hr />
            <span style={{ color: "grey" }}>OR</span>
            <hr />
          </div>

          <div className="fr">
            {/*<img style={{height:"40px",width:"40px",margin:"0",padding:"10px",cursor:"pointer"}} src="/img/google 1.png" alt=""/> */}
            <span style={{ color: "grey" }}>
              Already have an account?{" "}
              <span
                style={{
                  color: "#5bc6ce",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
                onClick={() => navigate("/login")}
              >
                Login
              </span>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
