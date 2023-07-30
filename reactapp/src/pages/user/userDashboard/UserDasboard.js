import React,{useState,useEffect} from "react";
import "./UserDashboard.css";
import Profile from "../../../components/user/Profile";
import Loanstatus from "../../../components/user/LoanStatus";
import Paymenthis from "../../../components/user/Paymenthis";
import { request } from "../../../auth/Axios";
import List from "../../../components/admin/List";

export default function UserDashboard() {
  const [transactions,setTransactions]=useState(null);
    const [isLoading,setIsLoading]=useState(true);
    const [loggedInUser, setLoggedInUser] = useState(null);
    const [loanStatus,setLoanStatus]=useState(null);
    const [isStatusLoading,setIsStatusLoading]=useState(true);

  useEffect(() => {
    const loginUser = async () => {
      try {
        const response = await request('get', '/currentUser');
        setLoggedInUser(response.data);
      } catch (error) {
        console.log("Error fetching current user:", error);
      }
    };

    loginUser();
  }, []);

  useEffect(() => {
    if (loggedInUser) {
      window.id=loggedInUser.user.id;
      fetchUserProfileData(loggedInUser.user.id) 
        .then((data) => {
          setTransactions(data.reverse());
          console.log(data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log("Error fetching user profile:", error);
        });
    }
    if (loggedInUser) {
      window.id=loggedInUser.user.id;
      fetchUserLoanStatusData(loggedInUser.user.id) 
        .then((data) => {
          setLoanStatus(data.reverse());
          console.log(data);
          setIsStatusLoading(false);
        })
        .catch((error) => {
          console.log("Error fetching user profile:", error);
        });
    }

  }, [loggedInUser]);

  const fetchUserLoanStatusData = (id) => {
    return request('get', `/loan-applications/user/${id}`)
      .then((response) => response.data)
      .catch((error) => {
        throw new Error("Failed to fetch user profile");
      });
  };
  

  const fetchUserProfileData = (id) => {
    return request('get', `/payments/${id}`)
      .then((response) => response.data)
      .catch((error) => {
        throw new Error("Failed to fetch user profile");
      });
  };

  return (
    <>
    <div className="user-container">
      <div className="user-dashboard-container">
      <Profile />
      {isStatusLoading ? <div>Loading...</div> :
        Object.keys(loanStatus).length!==0 ?
          <Loanstatus status={loanStatus}/> :
          <div style={{color:"#000080",fontSize:"24px",textAlign:"center",marginTop:"30px",marginBottom:"10px"}}>NO LOAN APPLIED</div>
      }
      {isLoading ? <div>Loading...</div> :
          Object.keys(transactions).length!==0 ?
          <div>
            <div style={{color:"#000080",fontSize:"24px",textAlign:"center",marginTop:"30px",marginBottom:"10px"}}>PAYMENT HISTORY</div>
            <List transactions={transactions}/>
          </div> :
          <div style={{color:"#000080",fontSize:"24px",textAlign:"center",marginTop:"30px",marginBottom:"10px"}}>NO PAYMENT HISTORY</div>
        }
      </div>
      </div>
    </>
  );
}
