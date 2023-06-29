import React from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import { Button } from "react-bootstrap";
//testing
const Loanstatus = () => {
  const LoanStatus = [
    {
      name: "Abc",
      loanId: 1,
      status: "Approved",
    },
    {
      name: "Abc",
      loanId: 1,
      status: "Approved",
    },
    {
      name: "Abc",
      loanId: 1,
      status: "Approved",
    },
    {
      name: "Abc",
      loanId: 1,
      status: "Approved",
    },
    {
      name: "Abc",
      loanId: 1,
      status: "Approved",
    },
    {
      name: "Abc",
      loanId: 1,
      status: "Approved",
    },
    {
      name: "Abc",
      loanId: 1,
      status: "Approved",
    },
  ];
  return (
    <Container style={{ paddingTop: "30px" }}>
      <h3 style={{ color: "black", padding: 20, textAlign: "center" }}>
        LOAN STATUS
      </h3>
      <br></br>
      <br></br>
      <Table variant="dark" style={{ border: "1px solid " }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Loan Id</th>
            <th>Status</th>
            <th>View Report</th>
          </tr>
        </thead>
        <tbody>
          {LoanStatus.map((item, index) => {
            return (
              <tr>
                <td>{item.name}</td>
                <td>{index}</td>
                <td>{item.status}</td>
                <td>
                  <Button variant="success">View Report</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default Loanstatus;
