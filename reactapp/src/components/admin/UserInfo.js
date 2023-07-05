import React from 'react'
import './UserInfo.css';

export default function UserInfo({onClick}) {

  return (
    <>
        <div className='user-info-items'>
            <h1 className='user-info-title'>Information</h1>
            <div className='user-info-item'>
                <span className='item-key'>Name: </span>
                <span className='item-value'>Karthi</span>
            </div>
            <div className='user-info-item'>
                <span className='item-key'>Email: </span>
                <span className='item-value'>Karthi@gmail.com</span>
            </div>
            <div className='user-info-item'>
                <span className='item-key'>Phone Number: </span>
                <span className='item-value'>6383379804</span>
            </div>
            <div className='user-info-item'>
                <span className='item-key'>Loan Amount: </span>
                <span className='item-value'>500000</span>
            </div>
            <div className='user-info-item'>
                <span className='item-key'>Interest Rate: </span>
                <span className='item-value'>8</span>
            </div>
            <div className='user-info-item'>
                <span className='item-key'>Loan Name: </span>
                <span className='item-value'>Education Loan</span>
            </div>
            <div className='user-info-item'>
                <span className='item-key'>Loan Tenure: </span>
                <span className='item-value'>10</span>
            </div>
            <div className='user-info-item'>
                <span className='item-key'>Interest Amount: </span>
                <span className='item-value'>120000</span>
            </div>
            <div className='user-info-item'>
                <span className='item-key'>Total Paid: </span>
                <span className='item-value'>200000</span>
            </div>
            <div className='user-info-item'>
                <span className='item-key'>Total Balance: </span>
                <span className='item-value'>540000</span>
            </div>
            <div className='user-info-item'>
                <span className='item-key'>Start Date: </span>
                <span className='item-value'>12-04-2027</span>
            </div>
            <div className='user-info-item'>
                <span className='item-key'>End Date: </span>
                <span className='item-value'>12-04-2035</span>
            </div>
            <div className='user-info-item'>
                <span className='item-key'>Next Due Date: </span>
                <span className='item-value'>24-07-2023</span>
            </div>
            <button className='send-notification-button' onClick={onClick}>
                Send Notification
            </button>
        </div>
    </>
  )
}
