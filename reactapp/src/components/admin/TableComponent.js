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
        const filtered=props.rows.filter((user)=>
            (user.date && user.date.includes(searchTerm)) || 
            user.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
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
