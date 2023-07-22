import { Close } from '@mui/icons-material'
import React from 'react'
import './NotificationForm.css';

export default function NotificationForm({onClose}) {
  return (
    <>
        <div className='notification-form-container'>
            <div className='notification-form-content'>
                <form className='notification-form'>
                    <span className='notification-title'>Notification Form</span>
                    <span className='notification-close' onClick={onClose}><Close/></span>
                    <input type='text' className='notification-subject' placeholder='Enter your subject'/>
                    <br/>
                    <textarea rows={8} className='notification-message' placeholder='Enter your notification message'/>
                    <br/>
                    <div className='notification-send-button'>Send Notification</div>
                </form>
            </div>
        </div>
    </>
  )
}
