import React,{useState} from 'react';
import { Facebook,Twitter,Instagram,Email,Phone, YouTube } from '@mui/icons-material';
import './Footer.css';

const Footer = () => {
    const [queryDescription, setQueryDescription] = useState('');
    const handleQuerySubmit = () => {
        const email = 'virtusa@educationloanportal.com';
        const subject = 'Query from Education Loan Portal';
        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(queryDescription)}`;
        window.location.href = mailtoLink;
      };


  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <p className="footer-subtitle">Connect With Us</p>
          <div className="footer-social-media">
            <a href="#" className="footer-icon">
                <Facebook style={{fontSize:30,color:'#3b5998'}} className="material-icons"/>
            </a>
            <a href="#" className="footer-icon">
                <Twitter style={{fontSize:30,color:'#00acee'}} className="material-icons"/>
            </a>
            <a href="#" className="footer-icon">
                <Instagram style={{fontSize:30,color:'#e95950'}} className="material-icons"/>
            </a>
            <a href="#" className="footer-icon">
                <YouTube style={{fontSize:30,color:'#c4302b'}} className="material-icons"/>
            </a>
          </div>
        </div>
        <div className="footer-section">
            <p className="footer-subtitle">Write To Us</p>
            <textarea rows={3} cols={30}
                  className="footer-textarea"
                  type="text"
                  placeholder="Enter your query"
                  value={queryDescription}
                  onChange={(e) => setQueryDescription(e.target.value)}
            ></textarea><br/><br/>
             <button className='query-button' onClick={handleQuerySubmit}>Send Query</button>
        </div>
        <div className="footer-section">
          <p className="footer-subtitle">Legal Notices</p>
          <ul className="footer-links">
          <li><a href="#" className="footer-notice">Terms and Conditions</a></li>
          <li><a href="#" className="footer-notice">Disclaimer</a></li>
          <li><a href="#" className="footer-notice">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-text">&copy; 2023 Virtusa Education Loan Portal. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;