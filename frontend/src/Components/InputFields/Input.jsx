import React from 'react'
import "../Edit/edit.css";
import "../Posts/post.css"
const Input = (props) => {
    const {data, setData, lable,inputTyle,classStyle} = props;
  return (
    <>
    <lable>{lable}</lable>
    {inputTyle ==="textarea" ? (
        <textarea type="text" className={classStyle} placeholder={data} onChange={(e)=>{setData(e.target.value)}}/>
    ): (
        <input type="text" placeholder={data} onChange={(e)=>setData(e.target.value)}/>
    )}
    
    </>
  )
}

export default Input