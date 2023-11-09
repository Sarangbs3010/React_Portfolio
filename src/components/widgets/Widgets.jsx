import React from 'react'
import './widgets.scss';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonIcon from '@mui/icons-material/Person';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Widgets({type}) {
    let data;
    //temporary data
    const amount = 231;
    const diff = 50

    switch(type){
        case "users" : 
            data = {
                title : "USERS",
                isMoney : false,
                link : "See All Users",
                icon : (
                    <PersonIcon className='icon' style={{color:"crimson"}}/>
                )
            }
            break;
        case "balance" : 
            data = {
                title : "BALANCE",
                isMoney : false,
                link : "See Details",
                icon : (
                    <AccountBalanceWalletIcon className='icon' style={{color:"blue"}}/>
                )
            }
            break;
        case "earnings" : 
            data = {
                title : "EARNINGS",
                isMoney : true,
                link : "View Your Earnings",
                icon : (
                    <MonetizationOnIcon className='icon' style={{color:"darkgreen"}}/>
                )
            }
            break;
        case "orders" : 
            data = {
                title : "ORDERS",
                isMoney : false,
                link : "View All Orders",
                icon : (
                    <ShoppingCartIcon className='icon' style={{color:"gold"}}/>
                )
            }
            break;
        default:
            break;
    }

  return (
    <div className="widget">
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">{data.isMoney?"$":""}{amount}</span>
            <span className="link">{data.link}</span>
        </div>
        <div className="right">
            <div className="percentage positive">
                <KeyboardArrowUpOutlinedIcon />
                {diff}%
            </div>
           {data.icon}
        </div>
    </div>
  )
}

export default Widgets