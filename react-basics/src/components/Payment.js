import React, { useState, useEffect } from 'react';
import "./Payment.css";

const PaymentComponent = () => {
  const loanAmount = 1000000; // 10 lakhs
  const interestRate = 0.09; // 9%
  const loanDurationMonths = 24; // 2 years

  const monthlyInterestRate = interestRate / 12;
  const monthlyPayment = (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, loanDurationMonths)) /
    (Math.pow(1 + monthlyInterestRate, loanDurationMonths) - 1);

  const [payments, setPayments] = useState([]);
  const [startMonth, setStartMonth] = useState(1);
  const [startYear, setStartYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const calculateDueAmounts = () => {
      const paymentData = [];

      for (let i = 0; i < loanDurationMonths; i++) {
        const currentMonth = startMonth + i;
        const currentYear = startYear + Math.floor((startMonth + i - 1) / 12);
        const remainingMonths = loanDurationMonths - i - 1;
        const remainingLoanAmount = calculateRemainingLoanAmount(loanAmount, monthlyInterestRate, remainingMonths);
        const dueAmount = monthlyPayment;
        const monthName = getMonthName(currentMonth);

        paymentData.push({
          month: currentMonth,
          year: currentYear,
          monthName: monthName,
          dueAmount: dueAmount.toFixed(2),
          isPaid: false
        });
      }

      setPayments(paymentData);
    };

    calculateDueAmounts();
  }, [startMonth, startYear]);

  const handlePayment = (month) => {
    setPayments((prevPayments) =>
      prevPayments.map((payment) =>
        payment.month === month ? { ...payment, isPaid: true } : payment
      )
    );
  };

  const getMonthName = (monthNumber) => {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return months[(monthNumber - 1) % 12];
  };

  const handleMonthChange = (event) => {
    const selectedMonth = parseInt(event.target.value);
    setStartMonth(selectedMonth);
  };

  const handleYearChange = (event) => {
    const selectedYear = parseInt(event.target.value);
    setStartYear(selectedYear);
  };

  return (
    <div className='container'>
      <h2>Payment</h2>
      <div>Loan Amount:{loanAmount}</div>
      <div className='start-month'>
        <label  htmlFor="startMonth">Start Month:</label>
        <select id="startMonth" value={startMonth} onChange={handleMonthChange}>
          {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
            <option key={month} value={month}>
              {getMonthName(month)}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="startYear">Start Year:</label>
        <input
          type="number"
          id="startYear"
          value={startYear}
          onChange={handleYearChange}
          min={2023}
          max={new Date().getFullYear() + 10}
        />
      </div>
      <table className='payment-table'>
        <thead>
          <tr
>
            
            <th>Month</th>
            <th>Due Amount</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment) => (
            <tr key={payment.month}>
             
              <td >{payment.monthName} 5th {payment.year}</td>
              <td>₹{payment.dueAmount}</td>
              <td>{payment.isPaid ? 'Paid' : 'Pending'}</td>
              <td>
                {!payment.isPaid && (
                  <button onClick={() => handlePayment(payment.month)}>Pay</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const calculateMonthlyPayment = (loanAmount, monthlyInterestRate, loanDurationMonths) => {
  const monthlyRate = 1 + monthlyInterestRate;
  const monthlyRatePower = Math.pow(monthlyRate, loanDurationMonths);
  const monthlyPayment = (loanAmount * monthlyInterestRate * monthlyRatePower) / (monthlyRatePower - 1);
  return monthlyPayment;
};

const calculateRemainingLoanAmount = (loanAmount, monthlyInterestRate, remainingMonths) => {
    const monthlyRate = 1 + monthlyInterestRate;
    const monthlyRatePower = Math.pow(monthlyRate, remainingMonths);
    const remainingLoanAmount = (loanAmount * monthlyRatePower) - ((monthlyRatePower - 1) / monthlyInterestRate);
    return remainingLoanAmount;
  };
  
  export default PaymentComponent;