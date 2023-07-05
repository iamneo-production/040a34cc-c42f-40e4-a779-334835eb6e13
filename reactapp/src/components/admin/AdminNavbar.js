import React from 'react';
import {Link, Outlet} from 'react-router-dom';
import './AdminNavbar.css';
import logo from '../../images/logo2.jpg';
import {Dashboard, Description, Logout, People, Settings, Payment } from '@mui/icons-material';
export default function AdminNavbar() {
  return (
    <>
    <nav className="admin-navbar">
        <div className="admin-navbar-logo">
            <Link to="/" className="admin-navbar-link">
                <img className='admin-navbar-logo' src={logo} alt='logo'/>
            </Link>
        </div>
        <ul className='admin-navbar-nav'>
            <li className='admin-navbar-item active'>
                <Link to="/" className="admin-navbar-link">
                    <Dashboard className="admin-navbar-icon"/>
                    <span className="admin-navbar-text">Dashboard</span>
                </Link>
            </li>
            <li className='admin-navbar-item'>
                <Link to="/users" className="admin-navbar-link">
                    <People className="admin-navbar-icon" />
                    <span className="admin-navbar-text">Users</span>
                </Link>
            </li>
            <li className='admin-navbar-item'>
                <Link to="/applications" className="admin-navbar-link">
                    <Description className="admin-navbar-icon"/>
                    <span className="admin-navbar-text">Applications</span>
                </Link>
            </li>
            <li className='admin-navbar-item'>
                <Link to="/admin-loans" className="admin-navbar-link">
                    <Description className="admin-navbar-icon"/>
                    <span className="admin-navbar-text">Loans</span>
                </Link>
            </li>
            <li className='admin-navbar-item'>
                <Link to="/transactions" className="admin-navbar-link">
                    <Payment className='admin-navbar-icon' />
                    <span className="admin-navbar-text">Transactions</span>
                </Link>
            </li>
            <li className='admin-navbar-item'>
                <Link to="/settings" className="admin-navbar-link">
                    <Settings className="admin-navbar-icon"/>
                    <span className="admin-navbar-text">Settings</span>
                </Link>
            </li>
            <li className='admin-navbar-item'>
                <Link to="/logout" className="admin-navbar-link">
                    <Logout className='admin-navbar-icon'/>
                    <span className="admin-navbar-text">Logout</span>
                </Link>
            </li>
        </ul>
    </nav>
    <div>
        <Outlet/>
    </div>
    </>
  )
}
