import { KeyboardArrowDown, KeyboardArrowUp, MoreVert } from '@mui/icons-material'
import React from 'react'
import './Featured.css';
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';

export default function Featured() {
  return (
    <>
    <div className='featured'>
        <div className='top'>
            <h1 className='featured-title'>
                Total Transactions
            </h1>
            <MoreVert fontSize='small'/>
        </div>
        <div className='bottom'>
            <div className='featuredChart'>
                <CircularProgressbar value={70} text={"70%"} strokeWidth={5}/>
            </div>
            <p className='featured-chart-title'>Total Repays made today</p>
            <p className='featured-chart-amount'>Rs 245k</p>
            <p className='featured-chart-desc'>Previous transactions processing.</p>
            <div className='featured-chart-summary'>
                <div className='featured-chart-item'>
                    <div className='featured-chart-title'>Target</div>
                    <div className='featured-chart-result featured-chart-result-negative'>
                        <KeyboardArrowDown fontSize='small'/>
                        <div className='resultAmount'>Rs25.6k</div>
                    </div>
                </div>
                <div className='featured-chart-item'>
                    <div className='featured-chart-title'>Last Week</div>
                    <div className='featured-chart-result featured-chart-result-positive'>
                        <KeyboardArrowUp fontSize='small'/>
                        <div className='resultAmount'>Rs25.6k</div>
                    </div>
                </div>
                <div className='featured-chart-item'>
                    <div className='featured-chart-title'>Last Month</div>
                    <div className='featured-chart-result featured-chart-result-positive'>
                        <KeyboardArrowUp fontSize='small'/>
                        <div className='result-amount'>Rs25.6k</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
