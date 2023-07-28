import React,{useState,useEffect} from 'react'
import './UserDetails.css';
import UserInfo from '../../../components/admin/UserInfo';
import UserChart from '../../../components/admin/UserChart';
import List from '../../../components/admin/List';
import NotificationForm from '../../../components/admin/NotificationForm';
import { request } from '../../../auth/Axios';

export default function UserDetails() {
  const [notificationForm,setNotificationForm]=useState(false);
  const [userDetail,setUserDetail]=useState(null);
  const [isLoading,setIsLoading]=useState(true);
  const [transactions,setTransactions]=useState(null);

  const path=window.location.pathname;
  const pathSegments=path.split('/');
  const id=pathSegments[pathSegments.length-1];

  useEffect(()=>{
    const userDetails = async () => {
      try {
        const response = await request('get', `/userloans/${id}`);
        setUserDetail(response.data);
        console.log(response.data);
        setIsLoading(false);
      } catch (error) {
          console.log("Error fetching current user:", error);
        }
    };
    const transactionDetails = async () => {
      try {
        const response = await request('get', `/payment/${id}`);
        setTransactions(response.data);
        console.log(response.data);
        //setIsLoading(false);
      } catch (error) {
          console.log("Error fetching current user:", error);
        }
    };
    userDetails();
    transactionDetails();
    },[])

    const handleNotificationForm=()=>{
        setNotificationForm(true);
    }
  return (
    <>
    <div className='admin-container'>
        <div className='admin-dashboard-container'>
          {isLoading ? <div>Loading...</div> : userDetail.loanStatus && userDetail.loanStatus==='Approved' ?
          <div>
            <div className='user-info-top'>
                <div className='user-info-left'>
                    <UserInfo onClick={handleNotificationForm} userDetail={userDetail} /> 
                </div>
                <div className='user-info-right'>
                    <UserChart userDetail={userDetail}/>
                </div>
            </div>
            <div className='user-info-bottom'>
            <div className='list-container'>
            <div className='list-title'>
              Transactions
            </div>
              <List transactions={transactions}/>
            </div>
          </div>
        </div>
        : <div style={{fontSize:"16"}}>NO DEBT!!</div>
      }
        {
            notificationForm &&
            <NotificationForm onClose={()=> setNotificationForm(false)}/>
        }
      </div>
    </div>
    </>
  )
}
