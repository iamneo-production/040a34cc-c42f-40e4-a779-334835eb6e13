import React from 'react'
import './Chart.css';
import { AreaChart, Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
const data = [
    { name:"January", Total: 320000},
    { name:"February", Total: 200000},
    { name:"March", Total: 550000},
    { name:"April", Total: 220000},
    { name:"May", Total: 560000},
    { name:"June", Total: 300000},
  ];
export default function Chart() {
  return (
    <>
    <div className='chart'>
        <div className='chart-title'>
            Last 6 Months (Transactions)
        </div>
        <ResponsiveContainer width="100%" aspect={2/1}>
            <AreaChart 
                width={730} 
                height={250} 
                data={data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
            <defs>
                <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                </linearGradient>
            </defs>
            <XAxis dataKey="name" stroke='gray'/>
            <CartesianGrid strokeDasharray="3 3" className='chart-grid'/>
            <Tooltip />
            <Area type="monotone" dataKey="Total" stroke="#8884d8" fillOpacity={1} fill="url(#total)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
    </>
  )
}
