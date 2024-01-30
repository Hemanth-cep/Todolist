import React, { useState } from "react"
import DeleteIcon from '@mui/icons-material/Delete';

function Note(props){

    function handleclick(id){
        var div = document.getElementsByClassName("note")[id]
        div.classList.remove("strike")
        props.ondelete(props.id)
    }

    function handlecomplete(id){
        props.fortaskdone()
       var div = document.getElementsByClassName("note")[id]
       div.classList.add("strike")
    }

    return(
        <div className="note">
            <div>
            <h1 onClick={()=>{handlecomplete(props.id)}}>{props.title}</h1>
            <p onClick={()=>{handlecomplete(props.id)}}>{props.content}</p>
            </div>
            <button onClick={()=>{handleclick(props.id)}}><DeleteIcon /></button>
        </div>
    )
}

export default Note