import React from 'react';
import LoanDetails from './LoanDetails';
import LoanCard from './LoanCard';
export default function Loans() {
  return (
    <>
    <div className="user-loan-page">
      <h2>Education Loans</h2>
      <div className="loan-card-container">
        {LoanDetails.map((loan, index) => (
          <LoanCard key={index} loan={loan} />
        ))}
      </div>
    </div>
    </>
  )
}
