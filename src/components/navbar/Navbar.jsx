import React, { useContext } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ListIcon from '@mui/icons-material/List';
import './navbar.scss';
import { DarkModeContext } from '../../context/darkModeContext';

function Navbar() {
  const {dispatch} = useContext(DarkModeContext);
  
  return (
    <div className='navbar'>
        <div className="navContainer">
            <div className="search">
                <input type="text" placeholder='Search...'/>
                <SearchIcon className='seacrhIcon'/>
            </div>
            <div className="items">
                <div className="item">
                    <LanguageIcon className='icon'/>
                    English
                </div>
                <div className="item">
                    <DarkModeIcon 
                        className='icon'
                        onClick = {() => {
                            dispatch({type:'TOGGLE'})
                        }}
                    />
                </div>
                <div className="item">
                    <FullscreenExitIcon className='icon'/>
                </div>
                <div className="item">
                    <NotificationsIcon className='icon'/>
                    <div className="counter">1</div>
                </div>
                <div className="item">
                    <ChatBubbleIcon className='icon'/>
                    <div className="counter">1</div>
                </div>
                <div className="item">
                    <ListIcon className='icon'/>
                </div>
                <div className="item">
                    <img 
                        src="https://images.pexels.com/photos/16922807/pexels-photo-16922807/free-photo-of-red-dress.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=""
                        className='avatar' 
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar