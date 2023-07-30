import React from 'react';
import './NotificationCard.css';

export default function NotificationCard({notification}) {
  return (
    <>
    <div className='notification-card-container'>
        <div className='notification-card-content'>
            <div className='notification-card-subject'>
                {notification.subject}
            </div>
            <div className='notification-card-message'>
                {notification.message}
            </div>
            <div className='notification-card-bottom'>
                <div className='notification-card-date'>
                    {notification.date}
                </div>
                <div className='notification-card-time'>
                    {notification.time}
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
