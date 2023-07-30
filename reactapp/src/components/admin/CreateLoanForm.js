// import { Close } from '@mui/icons-material'
import React,{useState} from 'react';
import axios from 'axios';
import { request } from '../../auth/Axios';

export default function CreateLoanForm({onClose}) {
  const [image,setImage]=useState('');
  const [name,setName]=useState('');
  const [interest,setInterest]=useState('');
  const [information,setInformation]=useState('');
  

  const handleLoan= async (e) =>{
    e.preventDefault();
    const loan={
      image:image,
      name:name,
      interest:interest,
      information:information
    };
    console.log(loan);
    try {
      const response = await request('post', "/loan/create-loans", loan);
    } catch (error) {
      console.log(error); 
    }
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

  return (
    <>
    <div className='notification-form-container'>
            <div className='notification-form-content'>
                <div className='notification-form'>
                <span className='notification-title'>Create Loan</span>
                    {/* <span className='notification-close' onClick={onClose}><Close/></span> */}
                    <br/>
                    <input 
                      type='file' 
                      accept='image/*' 
                      className='notification-subject' 
                      placeholder='Upload Image'
                      onChange={handleImageUpload}
                    />
                    <br/>
                    <input 
                      type='text' 
                      className='notification-subject' 
                      placeholder='Loan Name'
                      value={name}
                      onChange={(e)=>setName(e.target.value)}
                    />
                    <br/>
                    <input 
                      type='text' 
                      className='notification-subject' 
                      placeholder='Interest Rate'
                      value={interest}
                      onChange={(e)=>setInterest(e.target.value)}
                    />
                    <br/>
                    <textarea 
                      rows={8} 
                      className='notification-message' 
                      placeholder='Enter Loan information'
                      value={information}
                      onChange={(e)=>setInformation(e.target.value)}
                    />
                    <br/>
                    <div className='notification-send-button' onClick={(e)=>{handleLoan(e); onClose();}}>Create Loan</div>
                </div>
            </div>
    </div>
    </>
  )
}