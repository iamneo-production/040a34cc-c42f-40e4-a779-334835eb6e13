import React,{useState,useEffect} from 'react'
import TableComponent from '../../../components/admin/TableComponent'
import {Link} from 'react-router-dom';
import { request } from '../../../auth/Axios';

const userColumns=[
  { field: "id", headerName: "ID", width: 70, headerClassName:"user-table-header" },
  { field: "firstName", headerName: "First Name", width: 130 , headerClassName:"user-table-header"},
  { field: "lastName", headerName: "Last Name", width: 130, headerClassName:"user-table-header" },
  { field: "email", headerName: "Email", width: 280, headerClassName:"user-table-header" },
  { field: "phoneNumber", headerName: "Phone Number", width: 130, headerClassName:"user-table-header" },
  { field: "address", headerName: "Address", width: 130, headerClassName:"user-table-header" },
]
const actionColumn=[
  {
      field:"action",
      headerName:"Action",
      headerClassName:"user-table-header",
      width: 100,
      renderCell:(params)=>{
          return (
              <div className='user-cell-action'>
                  <div>
                      <Link to={`/admin/user/${params.row.id}`} className='user-cell-view-button'> View </Link>
                  </div>
              </div>
          )
      }
  }
]
export default function Users() {
    const [userRows,setUserRows]=useState(null);
    const [isLoading,setIsLoading]=useState(true);

    useEffect(()=>{
        const users = async () => {
            try {
              const response = await request('get', '/users');
              setUserRows(response.data.reverse());
              setIsLoading(false);
            } catch (error) {
              console.log("Error fetching current user:", error);
              setIsLoading(false);
            }
        };
        users();
    },[])


  return (
    <>
    <div className='admin-container'>
      <div className='admin-dashboard-container'>
        {isLoading ? <div>Loading...</div> :
            <TableComponent rows={userRows} columns={userColumns.concat(actionColumn)}/>
        }
      </div>
    </div>
    </>
  )
}
