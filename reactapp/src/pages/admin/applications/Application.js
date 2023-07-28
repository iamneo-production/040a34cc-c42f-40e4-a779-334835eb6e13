import React,{useState,useEffect} from "react";
import './Application.css';
import ApplicationTable from "../../../components/admin/ApplicationTable";
import AdminNavbar from "../../../components/admin/AdminNavbar";
import { request } from "../../../auth/Axios";

// import { jsPDF } from "jspdf";

function Application() {
  const [userApplications,setUserApplications]=useState(null);
  const [userApplications2,setUserApplications2]=useState(null);
  const [userApplications3,setUserApplications3]=useState(null);
  const [isLoading,setIsLoading]=useState(true);
  const [mergeArray,setMergeArray]=useState(null);
  const [image,setImage]=useState(null);

  useEffect(()=>{
    userApplications && userApplications2 && userApplications3 && 
    setMergeArray(()=>(userApplications.map((application,index)=>({
      ...application,
      ...userApplications2[index],
      ...userApplications3[index],
    }))).reverse());
    console.log("success",mergeArray);

  },[userApplications,userApplications2,userApplications3])

  
  useEffect(()=>{
    const loanApplication = async () => {
      try {
        const response = await request('get', '/loan-applications');
        setUserApplications(response.data);
        console.log(response.data);
      } catch (error) {
        console.log("Error fetching current user:", error);
        setIsLoading(false);
      }
    };
    const loanApplication2 = async () => {
      try {
        const response = await request('get', '/loan-applications2');
        setUserApplications2(response.data);
        console.log(response.data);
      } catch (error) {
        console.log("Error fetching current user:", error);
        setIsLoading(false);
      }
    };
    const loanApplication3 = async () => {
      try {
        const response = await request('get', '/image');
        setUserApplications3(response.data);
        console.log(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log("Error fetching current user:", error);
        
      }
    };
    loanApplication();
    loanApplication2();
    loanApplication3();
  },[]);

  return (
    <>
    <div className='admin-container'>
      <div className='admin-dashboard-container'>
      <div className="container" style={{marginTop:'20px'}}>
        <table className=" table table-bordered">
          <thead>
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Date</th>
              <th scope="col">Duration</th>
              <th scope="col">Amount</th>
              <th scope="col">Tenure</th>
              <th scope="col">Report</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? <div>Loading...</div> :
              mergeArray && mergeArray.map((application,index)=>(
                <ApplicationTable key={index} application={application}/>
              ))
            }
            
          </tbody>
        </table>
        </div>
      </div>
      </div>
    </>
  );
}
export default Application;
