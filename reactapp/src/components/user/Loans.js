import React,{useState,useEffect} from 'react';
import axios from 'axios';
import LoanCard from './LoanCard';
import { request } from '../../auth/Axios';
export default function Loans() {
  const [loanDetails,setLoanDetails]=useState(null);
  const [isLoading,setIsLoading]=useState(true);

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


  return (
    <>
    <div className="user-loan">
      <h2 style={{color:'#000080'}}>Education Loans</h2>
      {isLoading && <div>Loading...</div>}
      <div className="loan-card-container">
        {loanDetails && loanDetails.map((loan, index) => (
          <LoanCard key={index} loan={loan} />
        ))}
      </div>
    </div>
    </>
  )
}
