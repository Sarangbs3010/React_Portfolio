import React, { useState } from 'react'
import {DataGrid} from '@mui/x-data-grid';
import './datatable.scss';
import {userCols , userRows} from '../../../src/datatablesource.js';
import {Link} from 'react-router-dom';

function Datatable() {
  const [data,setData] = useState(userRows);
  
  const handleDelete = (index)=>{
    for(var j =0 ;j< data.length;j++){
      console.log(data[j].id);
    }
    setData(data.filter(ele => ele.id !== index));
    for(var i =0 ;i< data.length;i++){
      console.log(data[i].id);
    }
  };
    
  const actionCol = [
        {
            field: 'action', headerName: 'ACTION', width: 250,
            renderCell: (params)=>{
                return(
                    <div className="cellAction">
                        <Link to='/users/test' style={{textDecoration:"none"}}>
                          <div className="viewButton">View</div>
                        </Link>
                        <div className="deleteButton" onClick={() => handleDelete(params.row.id)}>
                          Delete
                        </div>
                    </div>
                )
            }
        },
    ]
    
  return (
        <div style={{ height: 600, width: '100%' } } className='datatable'>
            <div className="dataTableTitle">
              <div className="title">
                Add New User
              </div>
              <Link className='link' to='/users/new' style={{textDecoration:'none'}}>
                Add New
              </Link>
            </div>
            <DataGrid
            className='datagrid'
        rows={data}
        columns={userCols.concat(actionCol)}
        initialState={{
          pagination: {
            paginationModel: { page:0, pageSize: 9 },
          },
        }}
        b
        checkboxSelection
      />
        </div>
  )
}

export default Datatable