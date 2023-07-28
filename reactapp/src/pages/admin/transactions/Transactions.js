import React,{useEffect,useState} from 'react'
import TableComponent from '../../../components/admin/TableComponent';
import axios from 'axios';
import AdminNavbar from '../../../components/admin/AdminNavbar';
import { request } from '../../../auth/Axios';
const transactionColumns=[
  { field: "id", headerName: "Id", width: 70, headerClassName:"user-table-header" },
  { field: "name", headerName: "Name", width: 130 , headerClassName:"user-table-header"},
  { field: "email", headerName: "Email Id", width: 180, headerClassName:"user-table-header" },
  { field: "loanName", headerName: "Loan Name", width: 180, headerClassName:"user-table-header" },
  { field: "amount", headerName: "Amount", width: 100, headerClassName:"user-table-header" },
  { field: "paymentMethod", headerName: "Payment Method", width: 150, headerClassName:"user-table-header" },
  { field: "paymentDate", headerName: "Date", width: 100, headerClassName:"user-table-header" },
  { field: "paymentTime", headerName: "Time", width: 100, headerClassName:"user-table-header" },
]

export default function Transactions() {
    const [transactionRows,setTransactionRows]=useState(null);
    const [isLoading,setIsLoading]=useState(true);

    useEffect(()=>{
        const transactions = async () => {
            try {
              const response = await request('get', '/payment');
              setTransactionRows(response.data.reverse());
              console.log(response.data);
              setIsLoading(false);
            } catch (error) {
              console.log("Error fetching current user:", error);
              setIsLoading(false);
            }
        };
        transactions();
    },[])
  return (
    <>
    <div className='admin-container'>
        <div className='admin-dashboard-container'>
            {isLoading ? <div>Loading...</div> :
                <TableComponent rows={transactionRows} columns={transactionColumns}/>
            }
        </div>
    </div>
    </>
  )
}
