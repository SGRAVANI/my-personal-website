import ContextData from "./ContextData";
import React from 'react'
import { useState } from "react";

export default function DataInContext(props) {
    let[likeCount,setLikeCount]=useState(0)
    function incrementLikes()
    {
        setLikeCount(likeCount+1);
    }
  return (
    <ContextData.Provider value={{likeCount,incrementLikes}}>
        {props.children}
    </ContextData.Provider>
  )
}
