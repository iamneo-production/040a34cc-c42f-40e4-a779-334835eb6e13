import React, { useState, useEffect } from "react";
import "./Payment.css";
import { request } from "../../auth/Axios";

const PaymentComponent = ({loanDetails}) => {
  console.log(loanDetails);
  const loanAmount = loanDetails.principalAmount; // 10 lakhs
  const interestRate = loanDetails.interestRate/100; // 9%
  const loanDurationMonths = loanDetails.loanTenure*12; // 2 years
  const date=loanDetails.loanStartDate;
  const dateArray=date.split('-');
  const day=Number(dateArray[2]);
  const month=Number(dateArray[1]);
  const year=Number(dateArray[0]);

  const monthlyInterestRate = interestRate / 12;
  const monthlyPayment =
    (loanAmount *
      monthlyInterestRate *
      Math.pow(1 + monthlyInterestRate, loanDurationMonths)) /
    (Math.pow(1 + monthlyInterestRate, loanDurationMonths) - 1);

  const [payments, setPayments] = useState([]);
  const [startMonth, setStartMonth] = useState(month);
  const [startYear, setStartYear] = useState(year);

  useEffect(() => {
    const calculateDueAmounts = () => {
      const paymentData = [];

      for (let i = 0; i < loanDurationMonths; i++) {
        const currentMonth = startMonth + i + loanDetails.noOfPayments;
        const currentYear = startYear + Math.floor((startMonth + i - 1) / 12);
        const remainingMonths = loanDurationMonths - i - 1;
        const remainingLoanAmount = calculateRemainingLoanAmount(
          loanAmount,
          monthlyInterestRate,
          remainingMonths
        );
        const dueAmount = monthlyPayment;
        const monthName = getMonthName(currentMonth);

        paymentData.push({
          month: currentMonth,
          year: currentYear,
          monthName: monthName,
          dueAmount: dueAmount.toFixed(2),
          isPaid: false,
        });
      }

      setPayments(paymentData);
    };

    calculateDueAmounts();
  }, [startMonth, startYear]);

  const handlePayment = async(month) => {
      const payment={
        loanId:loanDetails.loanId,
        userId:loanDetails.userId,
        amount:parseFloat(loanDetails.emi).toFixed(2),
        paymentMethod:"Net Banking",
        loanName:loanDetails.loanName
      };
      console.log(payment);
      try {
        const response = await request('post', "/payments", payment);
        console.log(response.data);
      } catch (error) {
        console.log(error); 
      }
      setPayments((prevPayments) =>
      prevPayments.map((payment) =>
        payment.month === month ? { ...payment, isPaid: true } : payment
      )
    );
    alert("Payment Successfull!!");
  };

  const getMonthName = (monthNumber) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
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
    <div className="container">
      <h2>Payment</h2>
      <div className="payment-upper">
      <div id="startMonth">Loan Amount:{loanAmount}</div>
      <div id="mydiv1">
        <label htmlFor="startMonth">Start Month:</label>
        <select id="startMonth" value={startMonth} onChange={handleMonthChange}>
          {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
            <option key={month} value={month} disabled>
              {getMonthName(month)}
            </option>
          ))}
        </select>
      </div>
      <div className="start-month" id="mydiv1">
        <label htmlFor="startYear">Start Year:</label>
        <input
          type="number"
          id="startYear"
          value={startYear}
          onChange={handleYearChange}
          min={2023}
          max={new Date().getFullYear() + 10}
          disabled
        />
      </div>
      </div>
      <table className="payment-table">
        <thead>
          <tr>
            <th>Month</th>
            <th>Due Amount</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment) => (
            <tr key={payment.month}>
              <td>
                {payment.monthName} 5th {payment.year}
              </td>
              <td>₹{payment.dueAmount}</td>
              <td>{payment.isPaid ? "Paid" : "Pending"}</td>
              <td>
                {!payment.isPaid && (
                  <button onClick={() => handlePayment(payment.month)}>
                    Pay
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const calculateMonthlyPayment = (
  loanAmount,
  monthlyInterestRate,
  loanDurationMonths
) => {
  const monthlyRate = 1 + monthlyInterestRate;
  const monthlyRatePower = Math.pow(monthlyRate, loanDurationMonths);
  const monthlyPayment =
    (loanAmount * monthlyInterestRate * monthlyRatePower) /
    (monthlyRatePower - 1);
  return monthlyPayment;
};

const calculateRemainingLoanAmount = (
  loanAmount,
  monthlyInterestRate,
  remainingMonths
) => {
  const monthlyRate = 1 + monthlyInterestRate;
  const monthlyRatePower = Math.pow(monthlyRate, remainingMonths);
  const remainingLoanAmount =
    loanAmount * monthlyRatePower -
    (monthlyRatePower - 1) / monthlyInterestRate;
  return remainingLoanAmount;
};

export default PaymentComponent;
