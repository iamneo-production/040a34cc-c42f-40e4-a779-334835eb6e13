import React from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import { Button } from "react-bootstrap";
const Loanstatus = ({status}) => {

  return (
    <Container style={{ paddingLeft: "10px", paddingTop: "30px" }}>
      <div style={{color:"#000080",fontSize:"24px",textAlign:"center",marginTop:"30px",marginBottom:"10px"}}>
        LOAN STATUS
      </div>
      <br></br>
      <br></br>
      <Table
        style={{
          width: "90%",
          height: "100px",
          boxShadow: "2px 4px 10px 1px rgba(201,201,201,0.47)",
          justifyContent: "center",
          marginBottom:"30px",
        }}
      >
        <thead>
          <tr>
            <th>S.NO</th>
            <th>Apply Date</th>
            <th>Status</th>
            {/* <th>View Report</th> */}
          </tr>
        </thead>
        <tbody>
          {status.map((item, index) => {
            return (
              <tr>
                <td>{index+1}</td>
                <td>{item.applyDate}</td>
                <td>{item.status}</td>
                {/* <td>
                  <Button variant="success">View Report</Button>
                </td> */}
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default Loanstatus;
