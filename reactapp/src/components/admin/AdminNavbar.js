import React,{useState} from 'react';
import {Link, Outlet } from 'react-router-dom';
import './AdminNavbar.css';
import logo from '../../images/logo2.jpg';
// import {Dashboard, Description, Logout, People, Settings, Payment, AccountBalance } from '@mui/icons-material';
export default function AdminNavbar() {
    const [activePage,setActivePage]=useState('/dashboard');
    const handlePage=(page)=>{
        setActivePage(page);
    }
  return (
    <>
    <nav className="admin-navbar">
        <div className="admin-navbar-logo">
            <Link to="/admin/dashboard" className="admin-navbar-link" onClick={()=>handlePage('/dashboard')}>
                <img className='admin-navbar-logo' src={logo} alt='logo'/>
            </Link>
        </div>
        <ul className='admin-navbar-nav'>
            <li className={activePage==='/dashboard'?'admin-navbar-item active':'admin-navbar-item'}
                onClick={()=>handlePage('/dashboard')}
            >
                <Link to="/admin/dashboard" className="admin-navbar-link">
                    {/* <Dashboard className="admin-navbar-icon"/> */}
                    <span className="admin-navbar-text" style={{color:'#000080'}}>Dashboard</span>
                </Link>
            </li>
            <li className={activePage==='/users'?'admin-navbar-item active':'admin-navbar-item'} 
                onClick={()=>handlePage('/users')}
            >
                <Link to="/admin/users" className="admin-navbar-link">
                    {/* <People className="admin-navbar-icon" /> */}
                    <span className="admin-navbar-text" style={{color:'#000080'}}>Users</span>
                </Link>
            </li>
            <li className={activePage==='/applications'?'admin-navbar-item active':'admin-navbar-item'} 
                onClick={()=>handlePage('/applications')}
            >
                <Link to="/admin/applications" className="admin-navbar-link">
                    {/* <Description className="admin-navbar-icon"/> */}
                    <span className="admin-navbar-text" style={{color:'#000080'}}>Applications</span>
                </Link>
            </li>
            <li className={activePage==='/loans'?'admin-navbar-item active':'admin-navbar-item'} 
                onClick={()=>handlePage('/loans')}
            >
                <Link to="/admin/loans" className="admin-navbar-link">
                    {/* <AccountBalance className="admin-navbar-icon"/> */}
                    <span className="admin-navbar-text" style={{color:'#000080'}}>Loans</span>
                </Link>
            </li>
            <li className={activePage==='/transactions'?'admin-navbar-item active':'admin-navbar-item'} 
                onClick={()=>handlePage('/transactions')}
            >
                <Link to="/admin/transactions" className="admin-navbar-link">
                    {/* <Payment className='admin-navbar-icon' /> */}
                    <span className="admin-navbar-text" style={{color:'#000080'}}>Transactions</span>
                </Link>
            </li>
            <li className={activePage==='/dueList'?'admin-navbar-item active':'admin-navbar-item'} 
                onClick={()=>handlePage('/dueList')}
            >
                <Link to="/admin/dueList" className="admin-navbar-link">
                    {/* <Payment className='admin-navbar-icon' /> */}
                    <span className="admin-navbar-text" style={{color:'#000080'}}>Dues</span>
                </Link>
            </li>
            <li className={activePage==='/settings'?'admin-navbar-item active':'admin-navbar-item'} 
                onClick={()=>handlePage('/settings')}
            >
                <Link to="/admin/settings" className="admin-navbar-link">
                    {/* <Settings className="admin-navbar-icon"/> */}
                    <span className="admin-navbar-text" style={{color:'#000080'}}>Settings</span>
                </Link>
            </li>
            <li className='admin-navbar-item'>
                <Link to="/admin/logout" className="admin-navbar-link">
                    {/* <Logout className='admin-navbar-icon'/> */}
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