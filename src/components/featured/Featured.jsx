import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import React from 'react'
import './featured.scss';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Featured() {
  return (
    <div className="featured">
        <div className="top">
            <h1 className="title">Total Revenue</h1>
            <MoreVertIcon className='icon'/>
        </div>
        <div className="bottom">
            <div className="featuredBar">
                <CircularProgressbar value={70} text='70%' strokeWidth={3} className='pcb'/>
            </div>
            <p className="title">Total sales made today</p>
            <p className="amount">$420</p>
            <p className="desc">
                Previous transactions processing. Last payments may not be included
            </p>
            <div className="summary">
                <div className="item">
                    <div className="itemTitle">Target</div>
                    <div className="itemResult positive">
                        <KeyboardArrowUpIcon fontSize='small' />
                        <div className="resultAmount">$12.4K</div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Last Week</div>
                    <div className="itemResult positive">
                        <KeyboardArrowUpIcon fontSize='small' />
                        <div className="resultAmount">$12.4K</div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Last Month</div>
                    <div className="itemResult negative">
                        <KeyboardArrowDownIcon fontSize='small' />
                        <div className="resultAmount">$12.4K</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured