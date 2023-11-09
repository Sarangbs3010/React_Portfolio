import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Charts from '../../components/charts/Charts';
import ListTable from '../../components/table/ListTable';
import './single.scss';


function Single() {
  return (
    <div className='single'>
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img 
              src="https://images.pexels.com/photos/2351321/pexels-photo-2351321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="avatar" 
              className="itemImg" 
              />
              <div className="details">
                <h1 className="itemTitle">Jane</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">jane@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+91-987654321</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address</span>
                  <span className="itemValue">No 56 Church Street</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country</span>
                  <span className="itemValue">India</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Charts aspect={3/1} title="User Spending [Last 6 Months]"/>
          </div>
        </div>
        <div className="bottom">
          <h1 className="title center">Information</h1>
          <ListTable />
        </div>
      </div>
    </div>
  )
}

export default Single