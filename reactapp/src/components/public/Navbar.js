import React,{useState, useEffect, useRef} from 'react'
import {Outlet} from 'react-router-dom'
import logo from '../../images/logo.jpg';
import './NavbarStyles.css';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DropDown from './DropDown';
import Calculator from './Calculator';

import { HashLink as Link } from 'react-router-hash-link';
// import {Link} from 'react-scroll'

function Navbar() {

    const [openMenu,setOpenMenu]=useState(false);
    const [openDropDown,setOpenDropDown]=useState(false);
    const [activePage,setActivePage]=useState('');

    const handlePageClick=(page)=>{
        setActivePage(page);
    }

    let dropDownRef=useRef();

    useEffect(()=>{
        let handler=(e)=>{
            if(!dropDownRef.current.contains(e.target)){
                setOpenDropDown(false);
                setOpenMenu(false);
            }
        };
        document.addEventListener("mousedown",handler);

        return()=>{
            document.removeEventListener("mousedown",handler);
        }
    });

    const handleClick=()=>{
        setOpenMenu(!openMenu);
    };
    return (
    <>
        <nav ref={dropDownRef} className='navbar-container'>
            <div id="menu" onClick={handleClick}>
                {!openMenu ? <MenuIcon 
                            style={{fontSize:30}} 
                            className="icon"
                          /> : <CloseIcon 
                                    style={{fontSize:30}} 
                                    className="icon"
                                />
                }
            </div>
            <Link to="/" >
                <img style={{maxWidth:'90px'}} src={logo} alt='LOGO'/>
            </Link>
            <div className='public-navbar-items'>
                <ul id="navbar" className={!openMenu ? "#navbar" : "#navbar active"}>
                    <li className='li'>
                        <Link 
                            to='/#home' 
                            className={activePage === '' || activePage === '/#home' ? 'Link activate-link' : 'Link home'} 
                            onClick={()=>handlePageClick("/#home")}
                            smooth 
                            spy={true}
                            duration={500}
                            activeClass='active'
                            offset={-70}
                            activeClassName='selected'
                        >
                            Home
                        </Link>
                    </li>
                    <li className='li'>
                        <Link 
                            to='/#loans' 
                            className={activePage === '/#loans' ? 'Link activate-link' : 'Link loans'} 
                            onClick={()=>handlePageClick("/#loans")}
                            smooth 
                            spy={true}
                            duration={500}
                            activeClass='active'
                            offset={-70}
                            activeClassName='selected'
                        >
                            Loans
                        </Link>
                    </li>
                    <li className='li'>
                        <Link to='/#about' 
                            className={activePage === '/#about' ? 'Link activate-link' : 'Link about'} 
                            onClick={()=>handlePageClick("/#about")}
                            smooth 
                            spy={true}
                            duration={500}
                            activeClass='active'
                            offset={-70}
                            activeClassName='selected'
                        >
                            About Us
                        </Link>
                    </li>
                    <li className='li'>
                        <Link 
                            to='/#testimonial'
                            className={activePage === '/#testimonial' ? 'Link activate-link' : 'Link testimonial'}
                            onClick={()=>handlePageClick("/#testimonial")}
                            smooth 
                            spy={true}
                            duration={500}
                            activeClass='active'
                            offset={-70}
                            activeClassName='selected'
                            >
                            Testimonial
                        </Link>
                    </li>
                    <li className='li'>
                        <Link 
                            to='/#contact' 
                            className={activePage === '/#contact' ? 'Link activate-link' : 'Link contact'} 
                            onClick={()=>handlePageClick("/#contact")}
                            smooth 
                            spy={true}
                            duration={500}
                            activeClass='active'
                            offset={-70}
                            activeClassName='selected'
                        >
                            Contact Us
                        </Link>
                    </li>
                    <li className='li'>
                        <Link to='/login' className='navbar-login-button button-login'>
                            Login
                        </Link>
                    </li>
                    <li className='li'>
                        <Link to='/register' className='navbar-login-button button-register'>
                            Register
                        </Link>
                    </li>
                    <li className='li'>
                        <Calculator/>
                    </li>
                    {/* <li className='li'>
                        <span className='avatar-icon'>
                        <AccountCircleIcon 
                        style={{fontSize:30, color:'#000080',cursor:'pointer'}} 
                        onClick={()=> setOpenDropDown(!openDropDown)}
                        />
                        </span>
                    </li> */}
                </ul>
                {/* <span className='avatar-icon-mobile'>
                <AccountCircleIcon 
                style={{fontSize:30, color:'#000080',cursor:'pointer'}}
                onClick={()=> setOpenDropDown(!openDropDown)}
                />
                </span> */}
            </div>
        </nav>
        {
            openDropDown && <DropDown/>
        }
        <div>
            <Outlet/>
        </div>
   </> 
  )
}
export default Navbar;
