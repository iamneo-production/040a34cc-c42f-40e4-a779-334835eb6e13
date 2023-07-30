// import { KeyboardArrowDown, KeyboardArrowUp, MoreVert } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import './Featured.css';
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';
import { request } from '../../auth/Axios';

export default function Featured() {
  const [totalRepays, setTotalRepays] = useState(0);
  const [todayRepay, setTodayRepay] = useState(0);
  const [yesterdayRepay, setYesterdayRepay] = useState(0); 
  const [lastMonthRepay, setLastMonthRepay] = useState(0);
  const [prevLastMonthRepay, setPrevLastMonthRepay] = useState(0); 
  const [loanProgress, setLoanProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await request('get', '/payment');
        const paymentsData = response.data;
        
        const totalAmount = paymentsData.reduce((total, payment) => total + payment.amount, 0);
        setTotalRepays(totalAmount);

        const today = new Date().toISOString().slice(0, 10);
        const todayAmount = paymentsData
          .filter((payment) => payment.paymentDate === today)
          .reduce((total, payment) => total + payment.amount, 0);
        setTodayRepay(todayAmount);

    
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayDate = yesterday.toISOString().slice(0, 10);
        const yesterdayAmount = paymentsData
          .filter((payment) => payment.paymentDate === yesterdayDate)
          .reduce((total, payment) => total + payment.amount, 0);
        setYesterdayRepay(yesterdayAmount);

        const currentDate = new Date();
        currentDate.setMonth(currentDate.getMonth() - 1);
        const lastMonth = currentDate.toISOString().slice(0, 7);
        const lastMonthAmount = paymentsData
          .filter((payment) => payment.paymentDate.startsWith(lastMonth))
          .reduce((total, payment) => total + payment.amount, 0);
        setLastMonthRepay(lastMonthAmount);


        const prevLastMonth = new Date();
        prevLastMonth.setMonth(prevLastMonth.getMonth() - 2);
        const prevLastMonthDate = prevLastMonth.toISOString().slice(0, 7);
        const prevLastMonthAmount = paymentsData
          .filter((payment) => payment.paymentDate.startsWith(prevLastMonthDate))
          .reduce((total, payment) => total + payment.amount, 0);
        setPrevLastMonthRepay(prevLastMonthAmount);

        const loanResponse = await request('get', '/userloans');
        const userLoansData = loanResponse.data;

        const currentDateTime = new Date().getTime();
        const totalLoans = userLoansData.length;
        const overdueLoans = userLoansData.filter((loan) => new Date(loan.loanNextDueDate).getTime() > currentDateTime).length;
        const percentage = (overdueLoans / totalLoans) * 100;
        setLoanProgress(percentage);

        setIsLoading(false);
      } catch (error) {
        console.log("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const getTargetClassName = () => {
    return totalRepays > 25000 ? "featured-chart-result-positive" : "featured-chart-result-negative";
  };

  const getTodayRepayClassName = () => {
    return todayRepay > yesterdayRepay ? "featured-chart-result-positive" : "featured-chart-result-negative";
  };

  const getLastMonthRepayClassName = () => {
    return lastMonthRepay > prevLastMonthRepay ? "featured-chart-result-positive" : "featured-chart-result-negative";
  };

  return (
    <>
      <div className='featured'>
        <div className='top'>
          <h1 className='featured-title'>
            Total Transactions
          </h1>
          {/* <MoreVert fontSize='small' /> */}
        </div>
        <div className='bottom'>
          <div className='featuredChart'>
            <CircularProgressbar value={loanProgress} text={`${loanProgress.toFixed(0)}%`} strokeWidth={5} />
          </div>
          <p className='featured-chart-title'>Total Repays</p>
          <p className='featured-chart-amount'>Rs {parseInt(totalRepays)}</p>
          <p className='featured-chart-desc'>Previous transactions processing.</p>
          <div className='featured-chart-summary'>
            <div className='featured-chart-item'>
              <div className='featured-chart-title'>Target</div>
              <div className={`featured-chart-result ${getTargetClassName()}`}>
                {/* {totalRepays > 25000 ? <KeyboardArrowUp fontSize='small' /> : <KeyboardArrowDown fontSize='small' />} */}
                <div className='resultAmount'>Rs 25000</div>
              </div>
            </div>
            <div className='featured-chart-item'>
              <div className='featured-chart-title'>Today</div>
              <div className={`featured-chart-result ${getTodayRepayClassName()}`}>
                {/* {todayRepay > yesterdayRepay ? <KeyboardArrowUp fontSize='small' /> : <KeyboardArrowDown fontSize='small' />} */}
                <div className='resultAmount'>Rs {parseInt(todayRepay)}</div>
              </div>
            </div>
            <div className='featured-chart-item'>
              <div className='featured-chart-title'>Last Month</div>
              <div className={`featured-chart-result ${getLastMonthRepayClassName()}`}>
                {/* {lastMonthRepay > prevLastMonthRepay ? <KeyboardArrowUp fontSize='small' /> : <KeyboardArrowDown fontSize='small' />} */}
                <div className='result-amount'>Rs {parseInt(lastMonthRepay)}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  }