import React,{useState} from 'react'
import Loans from '../../../components/admin/Loans'
import CreateLoanForm from '../../../components/admin/CreateLoanForm';
import AdminNavbar from '../../../components/admin/AdminNavbar';

export default function LoansInAdmin() {
  const [isCreateLoanForm,setIsCreateLoanForm]=useState(false);

  const handleCreateLoanForm=()=>{
    setIsCreateLoanForm(true);
  }

  return (
    <>
        <div className='admin-container'>
            <div className='admin-dashboard-container'>
                <Loans onClick={handleCreateLoanForm}/>
                {
                  isCreateLoanForm && <CreateLoanForm onClose={()=> setIsCreateLoanForm(false)}/>
                }
            </div>
        </div>
    </>
  )
}
