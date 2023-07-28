import React, { useState,useEffect } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import "./Analysis.css";
import { request } from "../../auth/Axios";

const Analysis = ({analysisData}) => {
  const [principal, setPrincipal] = useState(analysisData.principalAmount);
  const [interestRate, setInterestRate] = useState(analysisData.interestRate);
  const [tenureYears, setTenureYears] = useState(analysisData.loanTenure);
  const [emi, setEmi] = useState(0);
  const [interest, setInterest] = useState(0);
  const [dueAmount, setDueAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [tenureMonths, setTenureMonths] = useState(0);
  const [isLoading,setIsLoading]=useState(false);

  useEffect(()=>{
    console.log(analysisData);
    calculateEMI();
  },[])
  const calculateEMI = () => {
    const p = parseFloat(principal);
    const r = parseFloat(interestRate) / 100 / 12;
    const n = parseFloat(tenureYears) * 12;
    const emiAmount = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalInterest = emiAmount * n - p;
    const due = emiAmount.toFixed(2) * n;
    const total = p + totalInterest;

    setEmi(emiAmount.toFixed(2));
    setInterest(totalInterest.toFixed(2));
    setDueAmount(due.toFixed(2));
    setTotalAmount(total.toFixed(2));
    setTenureMonths(n);
    setIsLoading(false);
  };

  const COLORS = ["#0088FE", "#FF8042", "green"];
  const data = [
    { name: "Principal", value: parseInt(analysisData.principalAmount-analysisData.principalAmountPaid) },
    { name: "Interest", value: parseInt(analysisData.interestAmount-analysisData.interestAmountPaid) },
    { name: "Total Amount Paid", value: parseInt(analysisData.totalAmountRepaid) },
  ];
  return (
    <>
    {isLoading ? <div>Loading...</div>:
    <div className="card" id="myCard">
      <div className="container" id="myContainer">

        <table className="result-table">
          <tbody>
            <tr>
              <td>EMI:</td>
              <td>{emi}</td>
            </tr>
            <tr>
              <td>Total Interest:</td>
              <td>{interest}</td>
            </tr>
            <tr>
              <td>Due Amount:</td>
              <td>{dueAmount}</td>
            </tr>
            <tr>
              <td>Total Amount:</td>
              <td>{totalAmount}</td>
            </tr>
            <tr>
              <td>Tenure in Months:</td>
              <td>{tenureMonths}</td>
            </tr>
            <tr>
              <td>Total Amount Paid:</td>
              <td>{parseFloat(analysisData.totalAmountRepaid).toFixed(2)}</td>
            </tr>
            <tr>
              <td>Balance Amount:</td>
              <td>{parseFloat(analysisData.principalAmount+analysisData.interestAmount-analysisData.totalAmountRepaid).toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
        <span style={{width:"10px",height:"10px",backgroundColor:"#0088FE",fontSize:"10px"}}>
          &nbsp;&nbsp;&nbsp;&nbsp;</span>
          <span style={{fontSize:"12px"}}>&nbsp; Principal Amount</span><br/>
        <span style={{width:"10px",height:"10px",backgroundColor:"#FF8042",fontSize:"10px"}}>
        &nbsp;&nbsp;&nbsp;&nbsp;</span ><span style={{fontSize:"12px"}}>&nbsp; Interest Amount</span><br/>
        <span style={{width:"10px",height:"10px",backgroundColor:"green",fontSize:"10px"}}>
        &nbsp;&nbsp;&nbsp;&nbsp;</span><span style={{fontSize:"12px"}}>&nbsp; Amount Paid</span>
        <br/><br/>

        <div className="chart-container">
          <ResponsiveContainer>
            <PieChart>
            <Pie
                data={data}
                dataKey="value"
                outerRadius={80}
                fill="#8884d8"
                label
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  }</>
  );
};

export default Analysis;
