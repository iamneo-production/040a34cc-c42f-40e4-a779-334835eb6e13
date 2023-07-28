import React, { useState, useEffect } from "react";
import { request } from "../../../auth/Axios";
import "./EditProfile.css";

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [email, setEmail] = useState("");
  

  useEffect(() => {
    const loginUser = async () => {
      try {
        const response = await request('get', '/currentUser');
        setLoggedInUser(response.data);
        setEmail(response.data.user.email);
      } catch (error) {
        console.log("Error fetching current user:", error);
      }
    };

    loginUser();
  }, []);

  return (
    <div>
      {loggedInUser && (
        <EditProfile
          loggedInUser={loggedInUser}
          email={email}
        />
      )}
    </div>
  );
};

const EditProfile = ({ loggedInUser, email }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const [messagep, setMessagep] = useState("");
  const [passwordMismatch, setPasswordMismatch] = useState(false);

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage("");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [message]);

  useEffect(() => {
    if (messagep) {
      const timer = setTimeout(() => {
        setMessagep("");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [messagep]);

  useEffect(() => {
    if (passwordMismatch) {
      const timer = setTimeout(() => {
        setPasswordMismatch("");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [passwordMismatch]);

  const handlePasswordChange = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmNewPassword) {
      setPasswordMismatch(true);
      return;
    }

    try {
      const response = await request('post', "register/change-password", {
        email: email,
        oldPassword: currentPassword,
        newPassword: newPassword
      });

      setMessage(response.data); 
    } catch (error) {
      setMessage(error.response.data); 
    }
  };

  const handleInfoChange = async (e) => {
    e.preventDefault();

    try {
      const response = await request('put', `users/updateProfile/${loggedInUser.user.id}`, {
        firstName: firstName,
        lastName: lastName,
        address: address,
        phoneNumber: phoneNumber
      });
      setMessagep(response.data);
       
    } catch (error) {
      setMessagep(error.response.data); 
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="user-settings-form">
            <h3>Change Personal Information</h3>
            <form onSubmit={handleInfoChange}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone Number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Save Changes
              </button>
            </form>
            <br></br>
            {messagep && <div className="success-message">{messagep}</div>}
          </div>

          <div className="user-settings-form">
            <h3>Change Password</h3>
            <form onSubmit={handlePasswordChange}>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Current Password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="New Password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirm New Password"
                  value={confirmNewPassword}
                  onChange={(e) => setConfirmNewPassword(e.target.value)}
                />
                
              </div>
              <button type="submit" className="btn btn-primary">
                Change Password
              </button>
            </form>
            <br></br>
            {passwordMismatch && <div className="error-message">Passwords do not match.</div>}
            {message && <div className="success-message">{message}</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;