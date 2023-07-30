import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoanCard.css';
import { request } from '../../auth/Axios';

const LoanCard = ({ loan }) => {
    const [showForm, setShowForm] = useState(false);
    const [userDetail,setUserDetail]=useState(null);
    const navigate=useNavigate();
  
    const handleMoreInfo = () => {
      setShowForm(true);
    };
  
    const handleApplyLoan = async(id) => {
      // Handle apply button click
      try {
        const response = await request('get', `/userloans/${window.id}`);
        response.data ? alert("Loan Already Applied") :
        navigate(`/user/applicationform/${id}`)
      } catch (error) {
          console.log("Error fetching current user:", error);
      } 
    };
  
    const handleFormClose = () => {
      setShowForm(false);
    };
  
    return (
      <div className="loan-card">
        <div className="loan-image">
          <img src={loan.image} alt={loan.name} />
        </div>
        <div className="loan-details">
          <h3>{loan.name}</h3>
          <p>Interest: {loan.interest}</p>
          <div className="buttons">
            <button className="more-info-btn" onClick={handleMoreInfo}>
              More Information
            </button>
            <button className="apply-btn" onClick={()=>handleApplyLoan(loan.id)}>
              Apply
            </button>
          </div>
        </div>
        {showForm && (
          <div className="loan-form">
            <div className="form-content">
              <h3>{loan.name}</h3>
              <p>(Interest : {loan.interest})</p>
              <p className='loan-information'>{loan.information}</p>
              <div className='information-buttons'>
              <button className="apply-btn" onClick={()=>handleApplyLoan(loan.id)}>
                Apply
              </button>
              <button className="close-btn" onClick={handleFormClose}>
                Close
              </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };  

export default LoanCard;
