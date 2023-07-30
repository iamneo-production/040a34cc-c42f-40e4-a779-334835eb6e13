import React from 'react'
import { useState,useRef } from 'react'
//import { CalculatorContext } from './CalculatorContext';
import Draggable from 'react-draggable';
import './Calculator.css';
// import CloseIcon from '@mui/icons-material/Close';
// import { CalculateOutlined, CalculateRounded } from '@mui/icons-material';

export default function Calculator() {
    //const {isCalculatorVisible} = useContext(CalculatorContext);
    const [isCalculatorVisible,setIsCalculatorVisible]=useState(false);
    const [loanAmount,setLoanAmount]=useState('');
    const [interestRate,setInterestRate]=useState('');
    const [loanTenure,setLoanTenure]=useState('');
    const [monthlyPayment,setMonthlyPayment]=useState(0);
    const [totalInterest,setTotalInterest]=useState(0);
    const [totalRepayment,setTotalRepayment]=useState(0);
    const nodeRef=useRef(null);

    const toggleCalculatorVisible=()=>{
        setIsCalculatorVisible(!isCalculatorVisible);
        console.log(1);
    }
    const calculateLoan=()=>{
        const principal=parseFloat(loanAmount);
        const rate=(parseFloat(interestRate))/100/12;
        const time=parseFloat(loanTenure)*12;
        //const compundFrequency=12;
        //const compoundPeriods=time*compundFrequency;
        //const compoundInterestRate=Math.pow(1+rate/compundFrequency,compoundPeriods)-1;
        const monthly=(principal*rate*Math.pow(1+rate,time))/(Math.pow(1+rate,time)-1);
        const interest=monthly*time-principal;
        const repayment=monthly*time;

        setMonthlyPayment(Math.round(monthly));
        setTotalInterest(Math.round(interest));
        setTotalRepayment(Math.round(repayment));
    }



  return (
    <>
    {/* <span className='calculator-button' onClick={toggleCalculatorVisible}><CalculateOutlined style={{color:'#000080'}} /> </span> */}
    {isCalculatorVisible && (
        <Draggable
            nodeRef={nodeRef}
            
        >
        <div ref={nodeRef} className="calculator-container" >
        <div 
            className='calculator-header'  
        >
            Education Loan Calculator
        </div>
        {/* <span onClick={toggleCalculatorVisible} className='calculator-close-icon'><CloseIcon/></span> */}
        <div className='calculator-body'>
            <div className='input-group'>
                <label style={{marginLeft:'0'}}>Loan Amount : </label>
                <input
                    type='number'
                    value={loanAmount}
                    onChange={(e)=>setLoanAmount(e.target.value)}
                />
            </div>
            <div className='input-group'>
                <label style={{marginLeft:'0'}}>Interest Rate : </label>
                <input
                    type='number'
                    step="0.01"
                    value={interestRate}
                    onChange={(e)=>setInterestRate(e.target.value)}
                />
            </div>
            <div className='input-group'>
                <label style={{marginLeft:'0'}}>Loan Tenure : </label>
                <input
                    type='number'
                    value={loanTenure}
                    onChange={(e)=>setLoanTenure(e.target.value)}
                />
            </div>
            <button className='calculate-loan-button' onClick={calculateLoan}>Calculate</button>
            <div className='result'>
                <p>Monthly Payment : Rs{monthlyPayment}</p>
                <p>Total Interest : Rs{totalInterest}</p>
                <p>Total Repayment : Rs{totalRepayment}</p>
            </div>
        </div>
    </div>
    </Draggable>
    )}
    </>
  )
}
