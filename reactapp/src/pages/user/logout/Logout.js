import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { setAuthHeader } from '../../../auth/Axios';

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    setAuthHeader(null); 
    localStorage.removeItem('token');
    localStorage.removeItem('role'); 
    navigate('/');
  }, [navigate]);

  return <div>Logout</div>;
}

export default Logout;