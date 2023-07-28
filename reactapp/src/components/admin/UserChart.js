import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
export default function UserChart({userDetail}) {
  const COLORS = ["#0088FE", "#FF8042",  "green"];
  const data = [
    { name: "Principal", value: parseInt(userDetail.principalAmount-userDetail.principalAmountPaid) },
    { name: "Interest", value: parseInt(userDetail.interestAmount-userDetail.interestAmountPaid) },
    { name: "Total Amount Paid", value: parseInt(userDetail.totalAmountRepaid) },
  ];
  return (
    <>
    <div className='chart'>
    <div className='chart-title'>
            Loan Details
        </div>
        <span style={{width:"10px",height:"10px",backgroundColor:"#0088FE",fontSize:"10px"}}>
          &nbsp;&nbsp;&nbsp;&nbsp;</span>
          <span style={{fontSize:"12px"}}>&nbsp; Principal Amount</span><br/>
        <span style={{width:"10px",height:"10px",backgroundColor:"#FF8042",fontSize:"10px"}}>
        &nbsp;&nbsp;&nbsp;&nbsp;</span ><span style={{fontSize:"12px"}}>&nbsp; Interest Amount</span><br/>
        <span style={{width:"10px",height:"10px",backgroundColor:"green",fontSize:"10px"}}>
        &nbsp;&nbsp;&nbsp;&nbsp;</span><span style={{fontSize:"12px"}}>&nbsp; Amount Paid</span>
        <ResponsiveContainer width="100%" aspect={3/2}>
            <PieChart>
            <Pie
                data={data}
                dataKey="value"
                outerRadius={120}
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
    </>
  )
}
