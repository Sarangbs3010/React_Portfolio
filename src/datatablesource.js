export const userRows = [
    {
        id: 1,
        username: "Snow",
        img: "https://images.pexels.com/photos/688660/pexels-photo-688660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        status: "active",
        email: "snow@gmail.com",
        age: 35,
    }, 
    {
        id: 2,
        username: "Snow",
        img: "https://images.pexels.com/photos/688660/pexels-photo-688660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        status: "active",
        email: "snow@gmail.com",
        age: 35,
    },
    {
        id: 3,
        username: "Snow",
        img: "https://images.pexels.com/photos/688660/pexels-photo-688660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        status: "pending",
        email: "snow@gmail.com",
        age: 35,
    },
    {
        id: 4,
        username: "Snow",
        img: "https://images.pexels.com/photos/688660/pexels-photo-688660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        status: "passive",
        email: "snow@gmail.com",
        age: 35,
    },
    {
        id: 5,
        username: "Snow",
        img: "https://images.pexels.com/photos/688660/pexels-photo-688660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        status: "pending",
        email: "snow@gmail.com",
        age: 35,
    },
    {
        id: 6,
        username: "Snow",
        img: "https://images.pexels.com/photos/688660/pexels-photo-688660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        status: "pending",
        email: "snow@gmail.com",
        age: 35,
    },
    {
        id: 7,
        username: "Snow",
        img: "https://images.pexels.com/photos/688660/pexels-photo-688660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        status: "passive",
        email: "snow@gmail.com",
        age: 35,
    },
    {
        id: 8,
        username: "Snow",
        img: "https://images.pexels.com/photos/688660/pexels-photo-688660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        status: "active",
        email: "snow@gmail.com",
        age: 35,
    },
    {
        id: 9,
        username: "Snow",
        img: "https://images.pexels.com/photos/688660/pexels-photo-688660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        status: "active",
        email: "snow@gmail.com",
        age: 35,
    },
    {
        id: 10,
        username: "Snow",
        img: "https://images.pexels.com/photos/688660/pexels-photo-688660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        status: "passive",
        email: "snow@gmail.com",
        age: 35,
    },
];

export const userCols = [
    { 
        field: 'id', headerName: 'ID', width: 100 
    },
    {
        field: 'user', headerName: 'USER', width: 230,
        renderCell: (params)=>{
            return(
                <div className="cellWithImage">
                    <img src={params.row.img} className="cellImg" alt="avatar"/>
                    {params.row.username}
                </div>
            )
        }
    },
    { 
        field: 'email', headerName: 'EMAIL', width: 350 
    },
    { 
        field: 'age', headerName: 'AGE', width: 100 
    },
    { 
        field: 'status', headerName: 'STATUS', width: 150 ,
        renderCell: (params) =>{
            return(
                <div className={`cellWithStatus ${params.row.status}`}>
                    {params.row.status}
                </div>
            )
        }
    },
];
