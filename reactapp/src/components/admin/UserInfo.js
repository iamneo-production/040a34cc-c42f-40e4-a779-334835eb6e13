import React,{useState,useEffect} from 'react'
import './UserInfo.css';
import { request } from '../../auth/Axios';

export default function UserInfo({onClick,userDetail}) {
    useEffect(()=>{
        console.log(userDetail);
    },[]);

  return (
    <>
        <div className='user-info-items'>
            <h1 className='user-info-title'>Information</h1>
            <div className='user-info-item'>
                <span className='item-key'>Loan Amount: </span>
                <span className='item-value'>{parseFloat(userDetail.principalAmount).toFixed(2)}</span>
            </div>
            <div className='user-info-item'>
                <span className='item-key'>Interest Rate: </span>
                <span className='item-value'>{userDetail.interestRate}%</span>
            </div>
            <div className='user-info-item'>
                <span className='item-key'>Loan Name: </span>
                <span className='item-value'>{userDetail.loanName}</span>
            </div>
            <div className='user-info-item'>
                <span className='item-key'>Loan Tenure: </span>
                <span className='item-value'>{userDetail.loanTenure}</span>
            </div>
            <div className='user-info-item'>
                <span className='item-key'>Interest Amount: </span>
                <span className='item-value'>{parseFloat(userDetail.interestAmount).toFixed(2)}</span>
            </div>
            <div className='user-info-item'>
                <span className='item-key'>Total Paid: </span>
                <span className='item-value'>{parseFloat(userDetail.totalAmountRepaid).toFixed(2)}</span>
            </div>
            <div className='user-info-item'>
                <span className='item-key'>Total Balance: </span>
                <span className='item-value'>{parseFloat(userDetail.principalAmount+userDetail.interestAmount-userDetail.totalAmountRepaid).toFixed(2)}</span>
            </div>
            <div className='user-info-item'>
                <span className='item-key'>Start Date: </span>
                <span className='item-value'>{userDetail.loanStartDate}</span>
            </div>
            <div className='user-info-item'>
                <span className='item-key'>End Date: </span>
                <span className='item-value'>{userDetail.loanEndDate}</span>
            </div>
            <div className='user-info-item'>
                <span className='item-key'>Next Due Date: </span>
                <span className='item-value'>{userDetail.loanNextDueDate}</span>
            </div>
            <button className='send-notification-button' onClick={onClick}>
                Send Notification
            </button>
        </div>
    </>
  )
}
