import React, { useState } from 'react'
import Input from '../InputFields/Input'
import "./post.css"
import { useDispatch } from 'react-redux';
import { createPost } from '../redux/postSlice';
const MakePost = (props) => {
    const {setOpenPost} =props;
    const dispatch =useDispatch();
    const [title,setTitle] =useState("Add a title");
    const [desc,setDesc] =useState("Add some descriptions");
    const [selectedIdx,setSelectIdx] =useState(0);
    const tags = ["None","NSFW","Mood","Quotes","Shitpost"];
    const handlePost= ()=>{
      setOpenPost(false);
      const newPost ={
        title:title,
        description:desc,
        tag:selectedIdx,
      };
      dispatch(createPost(newPost));
    };
  return (    
    <section className="makepost-container">
        <div className="makepost-navigation">
            <p className="makepost-save" onClick={handlePost}>
                Post
            </p>
        </div>
        <Input data={title} 
        inputTyle="textarea"
         setData={setTitle} 
         lable="Title" 
         classStyle="makepost-title"/>
         <Input data={desc} 
         inputTyle="textarea" 
         setData={setDesc} lable="Descriptions"
         classStyle="makepost-desc"/>
         <lable> Tags </lable>
         <div className="makepost-tags">
            {tags.map((tag,idx)=>{
              return(
                <button key={idx} className={`${
                  selectedIdx===idx 
                  ? `makepost-tags-selected`
                  : `makepost-tags-${tag}`
                }`}
                onClick={()=>setSelectIdx(idx)}
                >{tag}</button>
              )
            })}

         </div>
    </section>
  )
}

export default MakePost