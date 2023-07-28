import React,{useEffect} from 'react'
import './List.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function List({transactions}) {
  useEffect(()=>{
    console.log(transactions);
  },[]);
    
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
          {transactions ? transactions.map((row,index) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell className="table-cell">{row.name}</TableCell>
              <TableCell className="table-cell">{row.loanName}</TableCell>
              <TableCell className="table-cell">{parseFloat(row.amount).toFixed(2)}</TableCell>
              <TableCell className="table-cell">{row.paymentMethod}</TableCell>
              <TableCell className="table-cell">{row.paymentDate}</TableCell>
              <TableCell className="table-cell">{row.paymentTime}</TableCell>
            </TableRow>
          )):<div>NO TRANSACTIONS</div>}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  )
}
