import React from 'react'
import { Link } from 'react-router-dom'
import "./DropDownStyles.css"
export default function DropDown() {
  return (
    <>
    <div className='drop-down'>
        <ul>
            <li>
                <Link to='/profile' className='link'>
                    Profile
                </Link>
            </li>
            <li>
                <Link to='/settings' className='link'>
                    Profile
                </Link>
            </li>
            <li>
                <Link to='/Payment-History' className='link'>
                    Payment History
                </Link>
            </li>
            <li>
                <Link to='/logout' className='link'>
                    Logout
                </Link>
            </li>
        </ul>
        </div>
    </>
  )
}
