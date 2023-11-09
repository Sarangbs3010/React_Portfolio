import React, { useContext } from 'react'
import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import AssessmentIcon from '@mui/icons-material/Assessment';
import LogoutIcon from '@mui/icons-material/Logout';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import InboxIcon from '@mui/icons-material/Inbox';
import BookIcon from '@mui/icons-material/Book';
import {Link} from 'react-router-dom';
import { DarkModeContext } from '../../context/darkModeContext';

function Sidebar() {

  const {dispatch} = useContext(DarkModeContext);
    
  return (
    <div className='sidebar'>
        <div className="top">
            <Link style={{textDecoration:'none'}} to="/">
                <span className="logo">Admin</span>
            </Link>
        </div>
        <hr />
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <li>
                    <DashboardIcon className='icon' />
                    <span>Dashboard</span>
                </li>
                <p className="title">LISTS</p>
                <Link style={{textDecoration:'none',color:'black'}} to="/users">
                    <li>
                        <PersonIcon className='icon' />
                        <span>Users</span>
                    </li>
                </Link>
                <li>
                    <Link style={{textDecoration:'none',color:'black'}} to="/products">
                        <WarehouseIcon className='icon'/>
                        <span>Products</span>
                    </Link>
                </li>
                <li>
                    <InboxIcon className='icon'/>
                    <span>Orders</span>
                </li>
                <li>
                    <DeliveryDiningIcon className='icon'/>
                    <span>Deliveries</span>
                </li>
                <p className="title">USEFUL</p>
                <li>
                    <AssessmentIcon className='icon'/>
                    <span>Stats</span>
                </li>
                <li>
                    <NotificationsIcon className='icon'/>
                    <span>Notifications</span>
                </li>
                <p className="title">SERVICES</p>
                <li>
                    <LocalHospitalIcon className='icon'/>
                    <span>System Health</span>
                </li>
                <li>
                    <BookIcon className='icon'/>
                    <span>Logs</span>
                </li>
                <li>
                    <SettingsIcon className='icon'/>
                    <span>Settings</span>
                </li>
                <p className="title">USER</p>
                <li>
                    <AccountCircleOutlinedIcon className='icon'/>
                    <span>Profile</span>
                </li>
                <li>
                    <LogoutIcon className='icon'/>
                    <span>LogOut</span>
                </li>
            </ul>
        </div>
        <div className="bottom">
            <div className="colorOption" onClick={() => dispatch({type: 'LIGHT'})}></div>
            <div className="colorOption" onClick={() => dispatch({type: 'DARK'})}></div>
        </div>
    </div>
  )
}

export default Sidebar