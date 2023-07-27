import React,{useState,useEffect} from "react";
import Payment from "../../../components/user/Payment";
import { request } from "../../../auth/Axios";
function PaymentSection() {
  const [loanDetails, setLoanDetails] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [isLoading,setIsLoading]=useState(true);

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
          setLoanDetails(data);
          console.log(data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log("Error fetching user profile:", error);
        });
    }
  }, [loggedInUser]);
  

  const fetchUserProfileData = (id) => {
    return request('get', `/loans/${id}`)
      .then((response) => response.data)
      .catch((error) => {
        throw new Error("Failed to fetch user profile");
      });
  };

  return (
    <div className="user-container">
      <div className="user-dashboard-container">
        {isLoading ? <div>Loading...</div>: loanDetails.loanStatus==='Approved' ?
        <Payment loanDetails={loanDetails}/> : <div>NO PAYMENTS!!</div>
        } 
      </div>
    </div>
  );
}



export default PaymentSection;
