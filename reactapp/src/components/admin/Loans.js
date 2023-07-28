import React,{useState,useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import LoanCard from './LoanCard';
import axios from 'axios';
import { request } from '../../auth/Axios';

export default function Loans({onClick}) {
  const [loanDetails,setLoanDetails]=useState('');
  const [isLoading,setIsLoading]=useState(true);
  const [searchTerm,setSearchTerm]=useState('');

  useEffect(()=>{
    const loans = async () => {
      try {
        const response = await request('get', '/loan/get-loans');
        setLoanDetails(response.data.reverse());
        setIsLoading(false);
      } catch (error) {
        console.log("Error fetching current user:", error);
        setIsLoading(false);
      }
    };
    loans();
  },[])

    
    const handleSearch=(event)=>{
        const value=event.target.value;
            setSearchTerm(value);
        }
        const filtered=loanDetails && loanDetails.filter((loan)=>
            loan.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

    return (
    <>
    <div className='admin-loans'>
    <div className='user-search-bar'>
            <input 
                type='text'
                placeholder='Search...'
                value={searchTerm}
                onChange={handleSearch}
            />
    </div>
      <div className='create-loan-button' onClick={onClick}>Create Loans</div>
    </div>

    <div className="loan-page">
      <div className="loan-card-container">
        {isLoading && <div>Loading...</div> }
        {loanDetails && filtered.map((loan, index) => (
          <LoanCard key={index} loan={loan} />
        ))}
      </div>
    </div>
    </>
  )
}
