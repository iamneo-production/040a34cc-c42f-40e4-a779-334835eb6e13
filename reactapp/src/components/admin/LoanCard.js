import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './LoanCard.css';
// import { Close } from '@mui/icons-material';
import { request } from '../../auth/Axios';

const LoanCard = ({ loan }) => {
    const [showForm, setShowForm] = useState(false);
    const [editForm,setEditForm]=useState(false);
    const [image,setImage]=useState(loan.image);
    const [name,setName]=useState(loan.name);
    const [interest,setInterest]=useState(loan.interest);
    const [information,setInformation]=useState(loan.information);
    const id=loan.id;

    const handleMoreInfo = () => {
      setShowForm(true);
    };
  
    const handleApply = () => {
      // Handle apply button click
    };
  
    const handleFormClose = () => {
      setShowForm(false);
    };

    const handleImageUpload=(e)=>{
      const file=e.target.files[0];
      const reader=new FileReader();
      reader.onload=()=>{
        const base64=reader.result;
        setImage(base64);
      };
      reader.readAsDataURL(file);
    }

    const handleEdit= async (e)=>{
      e.preventDefault();
      const loan={
        image:image,
        name:name,
        interest:interest,
        information:information
      };
      console.log(id);
      console.log(loan);
      try {
        const response = await request('put', `/loan/update-loans/${id}`,loan);
        console.log(response.data);
      } catch (error) {
        console.log("Error fetching current user:", error);
      }
      setEditForm(false);
    }

    const handleDelete= async (e)=>{
      try {
        const response = await request('delete', `/loan/delete-loans/${id}`);
        console.log("Loan deleted");
      } catch (error) {
        console.log("Error fetching current user:", error);
      }
      setEditForm(false);
    }
  
  
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
              Info
            </button>
            
              <button className="apply-btn" onClick={()=>setEditForm(true)}>
                Edit
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
              
            
              {/* {isAdmin &&
              <button className="apply-btn" onClick={handleApply}>
                Edit
              </button>
              } */}
              <button className="close-btn" onClick={handleEdit}>
                Edit
              </button>
              <button className="close-btn" onClick={handleFormClose}>
                Close
              </button>
              </div>
            </div>
          </div>
        )}
        {
          editForm && (
            <div className="loan-edit-form">
            <div className="edit-form-content">
                <span className='edit-loan-title'>Edit Loan</span>
                    {/* <span className='edit-form-close' onClick={()=>setEditForm(false)}><Close/></span> */}
                    <br/>
                    <div className='edit-box'>
                      <label className='edit-loan-label'>Image : </label>
                      <input 
                        type='file' 
                        accept='image/*' 
                        className='edit-loan-image' 
                        placeholder='Upload Image'
                        onChange={handleImageUpload}
                      />
                    </div>
                    <br/>
                    <div className='edit-box'>
                      <label className='edit-loan-label'>Title : </label>
                      <input 
                        type='text' 
                        className='edit-loan-input' 
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                      />
                    </div>
                    <br/>
                    <div className='edit-box'>
                      <label className='edit-loan-label'>Interest : </label>
                      <input 
                        type='text' 
                        className='edit-loan-input' 
                        value={interest}
                        onChange={(e)=>setInterest(e.target.value)}
                      />
                    </div>
                    <br/>
                    <div className='edit-box'>
                      <label className='edit-loan-label'>Information : </label>
                      <textarea 
                        rows={8} 
                        className='edit-loan-message' 
                        value={information}
                        onChange={(e)=>setInformation(e.target.value)}
                      />
                    </div>
                    <br/>
                    <div className='edit-action'>
                    <span className='edit-send-button' onClick={handleEdit}>Edit Loan</span>
                    <button className='btn btn-danger' onClick={handleDelete}>Delete Loan</button>
                    </div>
                </div>
            </div>
          )
        }
      </div>
    );
  };  

export default LoanCard;