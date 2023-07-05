import React from 'react'
import './List.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function List() {
    const rows=[
        {
            id: 1,
            name: "John",
            loanName:"Education loan",
            amount: 2500,
            method: "Net Bank",
            transactionId: "adljkfj19283maxnbc",
            date: "20-06-2023",
            time: "12:35:26", 
        },
        {
            id: 2,
            name: "Steve",
            loanName:"Education loan",
            amount: 2500,
            method: "Net Bank",
            transactionId: "adljkfj19283maxnbc",
            date: "20-06-2023",
            time: "12:35:26", 
        },
        {
            id: 3,
            name: "Warner",
            loanName:"Education loan",
            amount: 2500,
            method: "Net Bank",
            transactionId: "adljkfj19283maxnbc",
            date: "20-06-2023",
            time: "12:35:26", 
        },
        {
            id: 4,
            name: "Stark",
            loanName:"Education loan",
            amount: 2500,
            method: "Net Bank",
            transactionId: "adljkfj19283maxnbc",
            date: "20-06-2023",
            time: "12:35:26", 
        },
        {
            id: 5,
            name: "Finch",
            loanName:"Education loan",
            amount: 2500,
            method: "Net Bank",
            transactionId: "adljkfj19283maxnbc",
            date: "20-06-2023",
            time: "12:35:26", 
        },
    ];
  return (
    <>
    <TableContainer component={Paper} className='table'>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow className='table-heading'>
            <TableCell className="table-cell"><span className="table-row">Transaction Id</span></TableCell>
            <TableCell className="table-cell"><span className="table-row">Name</span></TableCell>
            <TableCell className="table-cell"><span className="table-row">Loan Name</span></TableCell>
            <TableCell className="table-cell"><span className="table-row">Amount</span></TableCell>
            <TableCell className="table-cell"><span className="table-row">Payment Method</span></TableCell>
            <TableCell className="table-cell"><span className="table-row">Date</span></TableCell>
            <TableCell className="table-cell"><span className="table-row">Time</span></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.transactionId}</TableCell>
              <TableCell className="table-cell">{row.name}</TableCell>
              <TableCell className="table-cell">{row.loanName}</TableCell>
              <TableCell className="table-cell">{row.amount}</TableCell>
              <TableCell className="table-cell">{row.method}</TableCell>
              <TableCell className="table-cell">{row.date}</TableCell>
              <TableCell className="table-cell">{row.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  )
}
