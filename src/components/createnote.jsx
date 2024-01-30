import React, { useState } from "react"
import Note from "./note"
import AddTaskIcon from '@mui/icons-material/AddTask';
import Zoom from '@mui/material/Zoom';

function Createnote(){

    var [inputText,setinputText] = useState({
        title:"",
        content:""
    })
    var [notes,setnotes] = useState([])

    var [msg,setmsg] = useState("")

    var [msganime,setmsganime] = useState(false)

    var [popup,setpopup] = useState(false)


    function handleChange(event){
        var {name,value} = event.target;
        setinputText((preval)=>{
            return{
            ...preval,
            [name]:value
            }
        })
    }

    function additem(event){
        event.preventDefault();
        if (inputText.title !== "" || inputText.content !== ""){
            setnotes((preval)=>{
                return [...preval, inputText]
            })
            setmsg("TODO ADDED")
            setmsganime(true)
            setTimeout(() => {
            setmsg("")
            setmsganime(false)
            }, 1000);
        } 
        else{
            setmsg("NO TODO")
            setmsganime(true)
            setTimeout(() => {
            setmsg("")
            setmsganime(false)
        }, 1000);
        }
        setinputText({
            title:"",
            content:""
        })
        setpopup(false)
    }

    function ontaskdone(){
        setmsg("TASK COMPLETED")
        setmsganime(true)
        setTimeout(() => {
            setmsg("")
            setmsganime(false)
        }, 1000);
    }

    function removeitem(id){
        setnotes((preval)=>{
           return preval.filter((note,index)=>{
                return id !== index
            })
        })
        setmsg("TODO REMOVED")
        setmsganime(true)
        setTimeout(() => {
            setmsg("")
            setmsganime(false)
        }, 1000);
    }

    function titleClick(){
        setpopup(true)
    }

    return (
        <section className="top-container">
            <div className="notemsg" style={msganime?{backgroundColor:"white",color:"red",padding:"7px"}:null}><h3>{msg}</h3></div>
            <div className="input-box">
                <div className="inputarea">
                    <form>
                        <input name="title" type="text" value={inputText.title} onChange={handleChange} placeholder="Enter the title" onClick={titleClick}/>
                        <hr />
                        <textarea id="textarea" style={popup?{display:"block"}:{display:"none"}} name="content" rows="2" value={inputText.content} onChange={handleChange} placeholder="Enter the content"></textarea>
                        <Zoom in={popup}><button onClick={additem}><AddTaskIcon /></button></Zoom>
                    </form>
                </div>
            </div>
            <div className="note-box">
                {notes.map((note,index)=>{
                    return <Note key={index} id={index} ondelete={removeitem}  fortaskdone={ontaskdone} title={note.title} content={note.content}/>
                })}
            </div>
        </section>
    )
}
export default Createnote