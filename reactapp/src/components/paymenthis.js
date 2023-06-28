import React from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
const Paymenthis = () => {
  //  Sample data
  const PaymentHistory = [
    {
      paymentid: "101",
      date: "11/02/22",
      amount: 1000,
      status: "Approved",
    },
    {
      paymentid: "102",
      date: "11/03/22",
      amount: 1000,
      status: "Approved",
    },
    {
      paymentid: "103",
      date: "11/04/22",
      amount: 1000,
      status: "Approved",
    },
    {
      paymentid: "104",
      date: "11/05/22",
      amount: 1000,
      status: "Approved",
    },
    {
      paymentid: "105",
      date: "11/06/22",
      amount: 1000,
      status: "Approved",
    },
    {
      paymentid: "106",
      date: "11/07/22",
      amount: 1000,
      status: "Approved",
    },
    {
      paymentid: "107",
      date: "11/08/22",
      amount: 1000,
      status: "Approved",
    },
  ];
  return (
    <Container style={{ paddingTop: "30px" }}>
      <h1 style={{ color: "black", padding: 20, textAlign: "center" }}>
        Payment History
      </h1>
      <br></br>
      <br></br>
      {/* Sample Name and Id */}
      <p>
        Name - Priyanshu Roy <br></br>
        User Id - 102
        <br></br>
      </p>
      <br></br>
      <Table variant="dark" style={{ border: "1px solid " }}>
        <thead>
          <tr>
            <th>Payment Id</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {PaymentHistory.map((item, index) => {
            return (
              <tr>
                <td>{item.paymentid}</td>
                <td>{item.date}</td>
                <td>{item.amount}</td>
                <td>{item.status}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default Paymenthis;
