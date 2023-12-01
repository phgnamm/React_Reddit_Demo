import React from 'react'
import "./header.css";
import { useSelector } from 'react-redux';
const Header = (props) => {
  const {setEdit} =props;
  const user = useSelector((state)=>state.user);
  const handleEdit = ()=>{
    setEdit(true);
  }
  return (
  <>
  <header style={{backgroundColor: `${user.themeColor}`, backgroundImage: `linear-gradient(180deg,${user.themeColor} 10%,#E9967A 65%,#181818 100%)`}}>
   <div className="info-container">
        <div className="info-edit" onClick={handleEdit}>
            Edit
        </div>
        <img src={user.avaUrl} alt="" className="info-ava" />
        <div className="info-username">{user.name}</div>
        <div className="infor-age">{user.age} </div>
        <div className="info-about">{user.about}</div>   
    
    </div>
  </header>
  </>
  )
}

export default Header