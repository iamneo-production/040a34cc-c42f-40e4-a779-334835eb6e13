import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import './LoanCard.css';

const LoanCard = ({ loan }) => {
    const [showForm, setShowForm] = useState(false);

    const navigate=useNavigate();
  
    const handleMoreInfo = () => {
      setShowForm(true);
    };
  
    const handleApply = () => {
      navigate('/login');
    };
  
    const handleFormClose = () => {
      setShowForm(false);
    };
  
    return (
      <div className="loan-card">
        <div className="loan-image">
          <img src={loan.image} alt={loan.title} />
        </div>
        <div className="loan-details">
          <h3>{loan.title}</h3>
          <p>Interest: {loan.interest}</p>
          <div className="buttons">
            <button className="more-info-btn" onClick={handleMoreInfo}>
              More Information
            </button>
            <button className="apply-btn" onClick={handleApply}>
              Apply
            </button>
          </div>
        </div>
        {showForm && (
          <div className="loan-form">
            <div className="form-content">
              <h3>{loan.title}</h3>
              <p>(Interest : {loan.interest})</p>
              <p className='loan-information'>{loan.information}</p>
              <div className='information-buttons'>
              <button className="apply-btn" onClick={handleApply}>
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
