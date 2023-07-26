import { Close } from '@mui/icons-material'
import React from 'react'

export default function CreateLoanForm({onClose}) {
  return (
    <>
    <div className='notification-form-container'>
            <div className='notification-form-content'>
                <div className='notification-form'>
                <span className='notification-title'>Create Loan</span>
                    <span className='notification-close' onClick={onClose}><Close/></span>
                    <br/>
                    <input type='file' accept='image/*' className='notification-subject' placeholder='Upload Image'/>
                    <br/>
                    <input type='text' className='notification-subject' placeholder='Loan Name'/>
                    <br/>
                    <input type='text' className='notification-subject' placeholder='Interest Rate'/>
                    <br/>
                    <textarea rows={8} className='notification-message' placeholder='Enter Loan information'/>
                    <br/>
                    <div className='notification-send-button'>Create Loan</div>
                </div>
            </div>
    </div>
    </>
  )
}
