import React, { useEffect, useState } from 'react';
import TableComponent from '../../../components/admin/TableComponent';
import axios from 'axios';
import AdminNavbar from '../../../components/admin/AdminNavbar';
import { request } from '../../../auth/Axios';

const dueColumns = [
  { field: "id", headerName: "Id", width: 70, headerClassName: "user-table-header" },
  { field: "loanName", headerName: "Loan Name", width: 180, headerClassName: "user-table-header" },
  { field: "loanAmount", headerName: "Amount", width: 100, headerClassName: "user-table-header" },
  { field: "interestAmount", headerName: "Interest", width: 120, headerClassName: "user-table-header" },
  { field: "loanNextDueDate", headerName: "Due Date", width: 140, headerClassName: "user-table-header" },
  { field: "emi", headerName: "Pending EMI", width: 100, headerClassName: "user-table-header" },
];

export default function DueList() {
  const [dueRows, setDueRows] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const dueList = async () => {
      try {
        const response = await request('get', '/loans/due');
        setDueRows(response.data);
        console.log(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log("Error fetching current user:", error);
        setIsLoading(false);
      }
    };
    dueList();
  }, []);

  return (
    <>
      <div className='admin-container'>
        <div className='admin-dashboard-container'>
          {isLoading ? <div>Loading...</div> :
            <TableComponent rows={dueRows} columns={dueColumns} />
          }
        </div>
      </div>
    </>
  );
}