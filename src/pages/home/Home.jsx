import React from 'react'
import './home.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Widgets from '../../components/widgets/Widgets';
import Featured from '../../components/featured/Featured';
import Charts from '../../components/charts/Charts';
import ListTable from '../../components/table/ListTable';

function Home() {
  return (
    <div className='home'>
        <Sidebar />
        <div className="homeContainer">
            <Navbar />
            <div className="widgets">
                <Widgets type="users"/>
                <Widgets type="orders"/>
                <Widgets type="earnings"/>
                <Widgets type="balance"/>
            </div>
            <div className="chartsContainer">
                <Featured />
                <Charts aspect={2/1} title="Last 6 Months Revenue"/>
            </div>
            <div className="listContainer">
              <div className="listTitle">Latest Transactions</div>
              <ListTable />
            </div>
        </div>
    </div>
  )
}

export default Home