import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './listtable.scss';

function ListTable() {
  const tableData = [
    {
        id : 112342,
        product : "Acer Nitro 5",
        img: "https://m.media-amazon.com/images/I/91U5Ler19jL._SX679_.jpg",
        customer : "John Smith",
        date: "1 March",
        amount : 785,
        method: "Cash On Delivery",
        status: "Approved" 
    },
    {
        id : 223457,
        product : "Playstation 5",
        img: "https://m.media-amazon.com/images/I/51mWHXY8hyL._SX679_.jpg",
        customer : "Mike Smith",
        date: "14 March",
        amount : 900,
        method: "Online Payment",
        status: "Pending" 
    },
    {
        id : 234123,
        product : "Razer Blade 15",
        img: "https://m.media-amazon.com/images/I/81inkGnge8L._SX679_.jpg",
        customer : "Jane Lil",
        date: "2 October",
        amount : 920,
        method: "Online",
        status: "Approved" 
    },
    {
      id : 765481,
      product : "Asus ROG Strix",
      img: "https://m.media-amazon.com/images/I/81ahHX9wU1L._SX522_.jpg",
      customer : "Harlod Cunn",
      date: "23 July",
      amount : 2000,
      method: "Cash On Delivery",
      status: "Cancelled" 
  }
  ]  
  return (
    <TableContainer component={Paper} className='table'>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow className='tableHeadRow'>
            <TableCell className='tableCell'>Tracking ID</TableCell>
            <TableCell className='tableCell'>Product</TableCell>
            <TableCell className='tableCell'>Customer</TableCell>
            <TableCell className='tableCell'>Date</TableCell>
            <TableCell className='tableCell'>Amount</TableCell>
            <TableCell className='tableCell'>Payment Method</TableCell>
            <TableCell className='tableCell'>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow key={row.id} className='tableBodyRow'>
              <TableCell className='tableBody'>{row.id}</TableCell>
              <TableCell className='tableBody'>
                <div className="cell">
                  <img src={row.img} alt="Product Image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className='tableBody'>{row.customer}</TableCell>
              <TableCell className='tableBody'>{row.date}</TableCell>
              <TableCell className='tableBody'>{row.amount}</TableCell>
              <TableCell className='tableBody'>{row.method}</TableCell>
              <TableCell className='tableBody'>
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default ListTable