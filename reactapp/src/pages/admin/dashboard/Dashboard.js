import React,{useState,useEffect} from 'react'
import './Dashboard.css'
import Widgets from '../../../components/admin/Widgets'
import { DescriptionOutlined, NotificationsOutlined, PaymentOutlined, PersonOutlined } from '@mui/icons-material';
import Featured from '../../../components/admin/Featured';
import Chart from '../../../components/admin/Chart';
import List from '../../../components/admin/List';
import AdminNavbar from '../../../components/admin/AdminNavbar';
import { request } from '../../../auth/Axios';

export default function Dashboard() {
  const [usersCount, setUsersCount] = useState(0);
  const [applicationsCount, setApplicationsCount] = useState(0);
  const [transactionsCount, setTransactionsCount] = useState(0);
  const [dueCount, setDueCount] = useState(0);
    const [transactions,setTransactions]=useState(null);
    const [isLoading,setIsLoading]=useState(true);

    useEffect(()=>{

      const fetchWidgetData = async () => {
        try {
         
          const usersResponse = await request('get', '/users');
          setUsersCount(usersResponse.data.length);
         
          const applicationsResponse = await request('get', '/loan-applications');
          setApplicationsCount(applicationsResponse.data.length);
  
          const dueResponse = await request('get', '/userloans/due');
          setDueCount(dueResponse.data.length);
          
          const transactionsResponse = await request('get', '/payment');
          setTransactionsCount(transactionsResponse.data.length);
        } catch (error) {
          console.log("Error fetching widget data:", error);
        }
      };
  
        const transaction = async () => {
            try {
              const response = await request('get', '/payment');
              const fullTransactions=response.data.reverse();
              const len=Object.keys(fullTransactions).length;
              if(len>5){
                const slicedTransactions=fullTransactions.slice(0,5);
                setTransactions(slicedTransactions);
              }
              else{
                setTransactions(fullTransactions);
              }
              console.log(transactions);
              setIsLoading(false);
            } catch (error) {
                console.log("Error fetching current user:", error);
              }
          };
          transaction();
          fetchWidgetData();
    },[])

    const widgetDetails = [
      {
        id: 1,
        title: "USERS",
        counter: usersCount,
        link: "See all users",
        to:"/admin/users",
        icon: <PersonOutlined
          className='widget-icon'
          style={{ color: "crimson", backgroundColor: "rgba(255,0,0,0.2)" }}
        />
      },
      {
        id: 2,
        title: "APPLICATIONS",
        counter: applicationsCount,
        link: "See all applications",
        to:'/admin/applications',
        icon: <DescriptionOutlined
          className='widget-icon'
          style={{ color: "purple", backgroundColor: "rgba(128,0,128,0.2)" }}
        />
      },
      {
        id: 3,
        title: "TRANSACTIONS",
        counter: transactionsCount,
        link: "See all transactions", 
        to:"/admin/transactions",  
        icon: <PaymentOutlined
          className='widget-icon'
          style={{ color: "green", backgroundColor: "rgba(0,128,0,0.2)" }}
        />
      },
      {
        id: 4,
        title: "DUE PAYMENTS",
        counter: dueCount, 
        link: "See all due payments",
        to:"/admin/dueList",
        icon: <NotificationsOutlined
          className='widget-icon'
          style={{ color: "red", backgroundColor: "rgba(249, 128, 140, 0.8)" }}
        />
      },
    ];

  return (
    <>
    <div className="admin-container"> 
    <div className='admin-dashboard-container'>
    <div className='widgets'>
            {
              widgetDetails.map((item) => (
                <Widgets
                  key={item.id}
                  title={item.title}
                  counter={item.counter}
                  link={item.link}
                  percentage={item.percentage}
                  icon={item.icon}
                  to={item.to}
                />
              ))
            }
      </div>
      <div className="charts">
        <Featured/>
        <Chart/>
      </div>
      <div className='list-container'>
        <div className='list-title'>
            Latest Transactions
        </div>
        {isLoading ? <div>Loading...</div> :
            <List transactions={transactions}/>
        }
      </div>
    </div>
    </div>
    </>
  )
}
