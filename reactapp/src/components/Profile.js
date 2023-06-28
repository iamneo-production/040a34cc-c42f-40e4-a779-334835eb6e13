import React from "react";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import profileImage from "../Images/userimg.jpg";

function Profile() {
  return (
    <>
      <Table>
        <tr>
          <th>
            <DropdownButton id="dropdown-basic-button-1" title="Services">
              <Dropdown.Item href="#/action-1">Apply for Loan</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Check status</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Contact Us</Dropdown.Item>
              <Dropdown.Item href="#/action-4">Edit Profile</Dropdown.Item>
              <Dropdown.Item href="#/action-5">Delete Profile</Dropdown.Item>
            </DropdownButton>
          </th>
        </tr>
      </Table>

      <Container style={{ paddingTop: "30px" }}>
        <h1 style={{ padding: 10, textAlign: "center" }}>User Profile Page</h1>
        <br></br>
        <Row className="justify-content-md-center">
          <Col className="col-md-4">
            <Card style={{ position: "centre", width: "18rem" }}>
              <img
                src={profileImage}
                alt="Profile"
                className="img-fluid rounded-circle"
                style={{ width: "150px", height: "150px" }}
              />
              <Card.Body>
                <Card.Title style={{ padding: 20, textAlign: "center" }}>
                  User Details
                </Card.Title>
                <Card.Text>
                  <Form.Control
                    type="text"
                    placeholder="Name -> "
                    aria-label="Disabled input example"
                    disabled
                    readOnly
                  />
                  <br />
                  <Form.Control
                    type="text"
                    placeholder="User ID -> "
                    aria-label="Disabled input example"
                    disabled
                    readOnly
                  />
                  <br />
                  <Form.Control
                    type="text"
                    placeholder="Email-Id -> "
                    aria-label="Disabled input example"
                    disabled
                    readOnly
                  />
                  <br />
                  <Form.Control
                    type="text"
                    placeholder="Mobile Number -> "
                    aria-label="Disabled input example"
                    disabled
                    readOnly
                  />
                  <br />
                </Card.Text>
                <Button variant="primary">LOGOUT</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Profile;
