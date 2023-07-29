import React, { useEffect, useState } from "react";
import { Container, Card } from "react-bootstrap";
import profileImage from "../../images/userimg.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Profile.css";
import { request } from "../../auth/Axios";

const UserProfileCard = ({ firstName, lastName, email, phoneNumber, address }) => {
  return (
    <div className="container">
      <Container style={{ paddingTop: "30px" }}>
        <Row>
          <Col className="col-md-4">
            <Card className="user-profile-card" id="myCard3">
              <Card.Body>
                <Card.Title className="text-center mb-4">
                  User Profile
                </Card.Title>
                <img
                  src={profileImage}
                  alt="Profile"
                  className="img-fluid rounded-circle"
                  style={{ width: "150px", height: "150px" }}
                />
                <Card.Text>
                  <div>
                    <br />
                    <label>First Name:</label>
                    <input
                      type="text"
                      value={firstName}
                      readOnly
                      className="form-control"
                    />
                  </div>
                  <div>
                    <br />
                    <label>Last Name:</label>
                    <input
                      type="text"
                      value={lastName}
                      readOnly
                      className="form-control"
                    />
                  </div>
                  <div>
                    <br />
                    <label>Email:</label>
                    <input
                      type="email"
                      value={email}
                      readOnly
                      className="form-control"
                    />
                  </div>
                  <div>
                    <br />
                    <label>Phone Number:</label>
                    <input
                      type="text"
                      value={phoneNumber}
                      readOnly
                      className="form-control"
                    />
                  </div>
                  <div>
                    <br />
                    <label>Address:</label>
                    <textarea
                      value={address}
                      readOnly
                      className="form-control"
                    />
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const App = () => {
  const [userProfile, setUserProfile] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    const loginUser = async () => {
      try {
        const response = await request('get', '/currentUser');
        setLoggedInUser(response.data);
      } catch (error) {
        console.log("Error fetching current user:", error);
      }
    };

    loginUser();
  }, []);

  useEffect(() => {
    if (loggedInUser) {
      window.id=loggedInUser.user.id;
      fetchUserProfileData(loggedInUser.user.id) 
        .then((data) => {
          setUserProfile(data);
        })
        .catch((error) => {
          console.log("Error fetching user profile:", error);
        });
    }
  }, [loggedInUser]);
  

  const fetchUserProfileData = (id) => {
    return request('get', `/users/${id}`)
      .then((response) => response.data)
      .catch((error) => {
        throw new Error("Failed to fetch user profile");
      });
  };      
  
  return (
    <div className="App">
      {userProfile ? (
        <UserProfileCard {...userProfile} />
      ) : (
        <p>Loading user profile...</p>
      )}
    </div>
  );
};

export default App;