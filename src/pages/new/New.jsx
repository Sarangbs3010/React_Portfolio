import React, { useState } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import './new.scss';

function New({inputs , title}) {
  const initialImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAXVBMVEXl5eUAAADq6uqUlJTo6Oju7u7Z2dne3t66urrDw8OJiYmioqJ7e3upqanGxsZWVlYyMjJRUVFubm6Dg4NpaWl4eHhMTExAQEAtLS1dXV0KCgqxsbEXFxchISGQkJDcfo/pAAADDklEQVR4nO3c6XKCMBiFYRMTQFHctbXL/V9mxyrgUgLqWJIv7/NXxskhAbLBYAAAAAAAAAAAAAAAAAAAAAAAAAAAkEa79V2859l86JLbvgv4LPut3L4Dj2jzloBKhV2L9qM1oFIfAUfUWYeASmXB3m500SmgUkWgEXWy75hwnwQZ0aSfHQMq9Zmavot7PzP46hxQqa+B7xH/6Kzs7gio1M7r7o6xyfSms7K4K6BSi5t/mCbWk4q1xezONF3NCi8elXbyonwHEw8i2vcXBlTqvfeIL63Bg75r0XTttjyu6Pd2Y191k6nN+q3E5OUBlUr6DKin/5Bw2uejXw//IeGw14RtcxThJ5RfhyQkobSE88VyMpksF3ORCd9WWartkU6z1ZuwhOtC6/P+pdG6WAtKuP5rtG5s0i2j/wnno4bZCGNHXa5I7xNuTHMJtdmEn3DqHvzY9r675wmzttGdbV3b8DvhVUDzOw96eVW2RvQ64UUT1TbN8vF4nGepPS90W0P1OeHmLKAe5Nvqh20+OCu2dd9uPE44r5uj0fnVQlR+1liN86HhccJRVTSd3K5i7OolNT0KM+G6aqMNCeozYF29G38TJmUzbKyiKqJxzdl5m7CqQkfxq5PgqkRvE1Zz1Y6VxF1ViY65c18TvpXl0q4tNXl1VPN40deEq6pcjoBqX/3TKriE2amROquwrkTT3HfzNWF6OsRuGw852Jb3ozS0hPOyWM0lvzwTurFf42nCxaluHK3vqGzNtnFrg6cJl6eELZdhfSHaZWAJy8VpPW5JOC4TNi6X+5rwVCzBCcXXofzrUP69VP7zUH6fJoJ+abexhSoPsuGNLeSPD+WP8SOYp5E/1xbBfKn8Oe+rdYvL3/Yi1i3krz1FsH4YwRpwBOv4EezFiGA/TQR7opT8fW2/GYXvTTwo95dqoftLj2TvEX4cCUlIQhJKTyj+/UP575BG8B6w/He55b+PH8E3FSL4LkYE3zZp+D7N8/z5Ps1By8cRH9N3KAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAvH4AHoU0VY5sEU4AAAAASUVORK5CYII=";
  const [image , setImage] = useState("");
  console.log(image);

  return (
    <div className='new'>
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1 className="title">
            {title}
          </h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img 
              src= {image.length==0?initialImage:URL.createObjectURL(image)}
              alt="avatar" 
              className='leftImg'
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
               <label htmlFor='fileSearch'>
                  Image: <DriveFolderUploadIcon className='icon'/>
                </label>
                <input
                  onChange={(e) => setImage(e.target.files[0])} 
                  type='file' 
                  id='fileSearch' 
                  style={{display : 'none'}}
                />
              </div>
              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeHolder}/>
                </div>
              ))}
              <button>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New