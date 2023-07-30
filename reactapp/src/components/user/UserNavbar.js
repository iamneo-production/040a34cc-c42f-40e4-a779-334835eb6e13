import React,{useState} from "react";
import { Link } from "react-router-dom";
import "./UserNavbar.css";
import logo from "../../images/logo2.jpg";
// import {
//   Dashboard,
//   Description,
//   Logout,
//   People,
//   Settings,
//   Payment,
//   AccountBalance,
//   NotificationAddOutlined,
//   NotificationImportant,
// } from "@mui/icons-material";
export default function UserNavbar() {
  const [activePage,setActivePage]=useState('/dashboard');

  const handlePage=(page)=>{
    setActivePage(page);
  }

  return (
    <>
      <nav className="user-navbar">
        <div className="user-navbar-logo">
          <Link to="/dashboard" className="user-navbar-link">
            <img className="user-navbar-logo" src={logo} alt="logo" />
          </Link>
        </div>
        <ul className="user-navbar-nav">
          <li 
            className={activePage==='/dashboard'?"user-navbar-item active":"user-navbar-item"}
            onClick={()=>handlePage('/dashboard')}         
          >
            <Link to="/user/dashboard" className="user-navbar-link">
              {/* <Dashboard className="user-navbar-icon" /> */}
              <span className="user-navbar-text" style={{color:'#000080'}}>Dashboard</span>
            </Link>
          </li>
          <li 
            className={activePage==='/loans'?"user-navbar-item active":"user-navbar-item"}
            onClick={()=>handlePage('/loans')}         
          >
            <Link
              to="/user/loans"
              className="user-navbar-link"
            >
              {/* <AccountBalance className="user-navbar-icon" /> */}
              <span className="user-navbar-text" style={{color:'#000080'}}>Loans</span>
            </Link>
          </li>
          <li 
            className={activePage==='/notifications'?"user-navbar-item active":"user-navbar-item"}
            onClick={()=>handlePage('/notifications')}         
          >
            <Link
              to="/user/notifications"
              className="user-navbar-link"
            >
              {/* <NotificationImportant className="user-navbar-icon" /> */}
              <span className="user-navbar-text" style={{color:'#000080'}}>Notifications</span>
            </Link>
          </li>
          <li 
            className={activePage==='/analysis'?"user-navbar-item active":"user-navbar-item"}
            onClick={()=>handlePage('/analysis')}         
          >
            <Link to="/user/analysis" className="user-navbar-link">
              {/* <Payment className="user-navbar-icon" /> */}
              <span className="user-navbar-text" style={{color:'#000080'}}>Analysis</span>
            </Link>
          </li>
          <li 
            className={activePage==='/payment'?"user-navbar-item active":"user-navbar-item"}
            onClick={()=>handlePage('/payment')}         
          >
            <Link to="/user/payment" className="user-navbar-link">
              {/* <Payment className="user-navbar-icon" /> */}
              <span className="user-navbar-text" style={{color:'#000080'}}>Payment</span>
            </Link>
          </li>
          <li 
            className={activePage==='/editprofile'?"user-navbar-item active":"user-navbar-item"}
            onClick={()=>handlePage('/editprofile')}         
          >
            <Link
              to="/user/editprofile"
              className="user-navbar-link"
            >
              {/* <Settings className="user-navbar-icon" /> */}
              <span className="user-navbar-text" style={{color:'#000080'}}>Edit Profile</span>
            </Link>
          </li>
          <li className="user-navbar-item">
            <Link to="/user/logout" className="user-navbar-link">
              {/* <Logout className="user-navbar-icon" /> */}
              <span className="user-navbar-text">Logout</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}