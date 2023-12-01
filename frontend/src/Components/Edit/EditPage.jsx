import React, { useState } from 'react'
import "./edit.css";
import Input from '../InputFields/Input';
import { useDispatch, useSelector } from 'react-redux';
import { update } from '../redux/userSlice';
import { updateUser } from '../redux/apiRequests';
const EditPage = (props) => {
    const { setEdit } = props;
    const avaUlr =[
        "https://i.pinimg.com/originals/e4/6a/c7/e46ac77b22ac005abb1f79b2a37e5675.jpg",
        "https://i.pinimg.com/736x/74/55/51/7455515c56c5790e2103b8e88aec8820.jpg",
        "https://i.pinimg.com/originals/0e/32/18/0e3218732bbbe26aec6458893ed862ac.jpg",
        "https://i.pinimg.com/originals/7b/83/ba/7b83ba6821c5a0a04a620d8770f1cb4d.jpg",
        "https://i.pinimg.com/564x/af/7e/fb/af7efb67907264e5b95b7fd37808c27b.jpg",
        "https://i.pinimg.com/originals/8d/e7/26/8de72634bcf6ec3a62d398e1e06b98f2.jpg",
        "https://i.pinimg.com/originals/c3/d7/7f/c3d77f24313b89249f2bb0915a8497ac.jpg",
        "https://i.pinimg.com/originals/ab/08/e0/ab08e0df187879621c1052883717ae3a.jpg",
        "https://i.pinimg.com/originals/42/37/98/423798d6cc858e5ffb0dbb840e07b4ec.jpg"

    ];
    const user = useSelector((state)=>state.user);
    const dispatch = useDispatch();
    const [name,setName]= useState(user.name);
    const [age,setAge] = useState(user.age);
    const [about,setAbout] = useState(user.about);
    const [theme,setTheme] = useState("");
    const [url,serUrl] = useState(user.avaUlr);
    const handleSubmit =(e)=>{
        e.preventDefault();
        setEdit(false);
        const updatedUser ={
            name: name,
            age:age,
            about:about,
            avaUrl:url,
            themeColor:theme
        };
        updateUser(updatedUser,dispatch);
    };
  return (
    <>
    <form onSubmit={handleSubmit}>
        <section className="edit-container">
            <button className="close">SAVE</button>
            <div className="edit-profile">Edit Profile</div>
            <div className="input-container">
                <Input lable="Display name" data={user.name} setData ={setName}/>
                <Input lable="Age" data={user.age} setData={setAge}/>
                <Input inputTyle="textarea" classStyle="input-about" lable ="About" data={user.about} setData={setAbout}/>
                <label> Profile Picture </label>
                <div className="input-image-container ">
                    {avaUlr.map((url)=>{
                        return(
                        <>
                        <img onClick={(e)=>{serUrl(e.target.src)}} src={url} className="input-image" alt=""/>
                        </>
                        )
                    })}
                </div>
                <lable>Theme</lable>
                <div className="theme-container">                   
                    <input type="color" className="theme-color" onChange={(e)=>{setTheme(e.target.value)}}/>
                </div>
            </div>
        </section>
    </form>
    </>
   
  )
}

export default EditPage