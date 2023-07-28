import React,{useState} from 'react'
import './TableComponent.css';
import { DataGrid } from '@mui/x-data-grid';

export default function TableComponent(props) {
    const [searchTerm,setSearchTerm]=useState('');
    //const [filteredUsers,setFilteredUsers]=useState([]);

    const handleSearch=(event)=>{
        const value=event.target.value;
            setSearchTerm(value);
        }
        const filtered=props.rows && props.rows.filter((user)=>
            (user.paymentDate && user.paymentDate.includes(searchTerm)) || 
            (user.firstName && user.firstName.toLowerCase().includes(searchTerm.toLowerCase())) ||
            (user.email && user.email.toLowerCase().includes(searchTerm.toLowerCase())) ||
            (user.loanName && user.loanName.toLowerCase().includes(searchTerm.toLowerCase())) ||
            (user.name && user.name.toLowerCase().includes(searchTerm.toLowerCase()))
        );
        console.log(filtered);
        console.log(props.rows);
        //setFilteredUsers(filtered);
  return (
    <>
    <div className='user-table-container'> 
        <div className='user-search-bar'>
            <input 
                type='text'
                placeholder='Search...'
                value={searchTerm}
                onChange={handleSearch}
            />
        </div>
        <DataGrid
            rows={filtered}
            columns={props.columns}
            initialState={{
            pagination: {
                paginationModel: { page: 0, pageSize: 8 },
            },
            }}
            pageSize={8}
            rowsPerPageOptions={[8]}
            pageSizeOptions={[5, 10, 15]}
            checkboxSelection
        />
      </div>
    </>
  )
}
