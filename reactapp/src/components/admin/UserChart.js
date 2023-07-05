import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function UserChart(props) {
  return (
    <>
    <div className='chart'>
    <div className='chart-title'>
            Last 6 Months (Transactions)
        </div>
        <ResponsiveContainer width="100%" aspect={3/2}>
        <BarChart
          width={500}
          height={400}
          data={props.data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" className='chart-grid'/>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="interest" stackId="a" fill="#8884d8" />
          <Bar dataKey="principal" stackId="a" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
    </>
  )
}
