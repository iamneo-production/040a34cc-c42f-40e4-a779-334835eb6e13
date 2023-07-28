import { Close } from '@mui/icons-material'
import React,{useState} from 'react'
import './NotificationForm.css';
import { request } from '../../auth/Axios';

export default function NotificationForm({onClose}) {
  const [subject,setSubject]=useState('');
  const [message,setMessage]=useState('');

  const path=window.location.pathname;
  const pathSegments=path.split('/');
  const id=pathSegments[pathSegments.length-1];

  const handleNotification=async (e) =>{
    e.preventDefault();
    const notification={
      userId:id,
      subject:subject,
      message:message,
    };
    console.log(notification);
    try {
      const response = await request('post', "/notifications", notification);
    } catch (error) {
      console.log(error); 
    }
  };

  return (
    <>
        <div className='notification-form-container'>
            <div className='notification-form-content'>
                <form className='notification-form'>
                    <span className='notification-title'>Notification Form</span>
                    <span className='notification-close' onClick={onClose}><Close/></span>
                    <input 
                      type='text' 
                      className='notification-subject' 
                      placeholder='Enter your subject'
                      onChange={(e)=>setSubject(e.target.value)}
                    />
                    <br/>
                    <textarea 
                      rows={8} 
                      className='notification-message' 
                      placeholder='Enter your notification message'
                      onChange={(e)=>setMessage(e.target.value)}
                    />
                    <br/>
                    <div className='notification-send-button' onClick={(e)=>{handleNotification(e); onClose();}}>Send Notification</div>
                </form>
            </div>
        </div>
    </>
  )
}
