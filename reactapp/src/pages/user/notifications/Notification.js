import React,{useState,useEffect} from 'react'
import NotificationCard from '../../../components/user/NotificationCard';
import { request } from '../../../auth/Axios';

export default function Notification() {
    const [notifications,setNotifications]=useState(null);
    const [isLoading,setIsLoading]=useState(true);

    useEffect(()=>{
        const notification = async () => {
            try {
              const response = await request('get', `/notifications/${window.id}`);
              setNotifications(response.data);
              console.log(response.data);
              setIsLoading(false);
            } catch (error) {
              console.log("Error fetching current user:", error);
              setIsLoading(false);
            }
        };
        notification();
    },[])
  return (
    <>
    <div className="user-container">
      <div className="user-dashboard-container">
        {isLoading ? <div>Loading...</div>:
          Object.keys(notifications).length!==0 ? (notifications.map((notification,index)=>(
            <NotificationCard key={index} notification={notification}/>
          ))) : <div>NO NOTIFICATIONS!!</div>
        }
      </div>
    </div>
    </>
  )
}
