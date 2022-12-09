import ContextData from "./ContextData";
import React from 'react'
import { useState,useEffect } from "react";

export default function DataInContext(props) {
    let[likeCount,setLikeCount]=useState(0)
    let [userData,setUserData]=useState(null);
    let [load,setLoad]=useState(false);
    function incrementLikes()
    {
        setLikeCount(likeCount+1);
    }
    useEffect(() => {
    setLoad(true);
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((r)=>{
     
     return r.json();
     
    })
    .then((data)=>{
      setUserData(data);
      setLoad(false);
    })
    
    }, [])
    function loading()
    {
      if(load)
      {
      return (<div style={{height:"100vh"}} className=" d-flex justify-content-center align-items-center">
        <div>Loading...</div></div>)
      }
    
    else {
      return props.children;
    }
  }
  return (
    <ContextData.Provider value={{likeCount,incrementLikes,userData,load}}>
        {loading()}
    </ContextData.Provider>
  )
}
