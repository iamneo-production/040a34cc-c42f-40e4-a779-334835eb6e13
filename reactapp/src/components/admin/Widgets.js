import React from 'react'
import './Widgets.css';
import { KeyboardArrowUp} from '@mui/icons-material';
export default function Widgets(props) {
  return (
    <div className='widget'>
      <div className='left'>
        <span className='title'>{props.title}</span>
        <span className='counter'>{props.counter}</span>
        <span className="widget-link">{props.link}</span>
      </div>
      <div className='right'>
        <div className='percentage'>
            <KeyboardArrowUp/>
            {props.percentage}
        </div>
        {props.icon}
      </div>
    </div>
  )
}
