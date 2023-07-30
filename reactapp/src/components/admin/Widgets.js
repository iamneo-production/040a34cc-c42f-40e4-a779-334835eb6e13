import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Widgets.css';
// import { KeyboardArrowUp} from '@mui/icons-material';
export default function Widgets(props) {
  const navigate=useNavigate();

  const handleLink=(path)=>{
    navigate(path);
  }
  return (
    <div className='widget'>
      <div className='widget-left'>
        <span className='title'>{props.title}</span>
        <span className='counter'>{props.counter}</span>
        <span className="widget-link" onClick={()=>handleLink(props.to)}>{props.link}</span>
      </div>
      <div className='widget-right'>
        <div className='percentage'>
            {/* <KeyboardArrowUp/> */}
            {props.percentage}
        </div>
        {/* {props.icon} */}
      </div>
    </div>
  )
}