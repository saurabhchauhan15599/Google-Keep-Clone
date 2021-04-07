import React, {useState} from 'react';
import AddIcon from '@material-ui/icons/Add';
import "./index.css";
import './App.css';


const CreateNote = (props) => {

  const [expand,setExpand]=useState(false);

  const [note,setNote]=useState({
    title:'',
    content:'',
  });

  const InputEvent=(event)=>{
    const {name,value}=event.target;

    setNote((prevData)=>{
      return{
        ...prevData,
        [name]:value,
      };
    });
    console.log(note);
  };

  const addEvent=()=>{
    props.passNote(note);
    setNote({
    title:'',
    content:'',
  });
  };

  const expandIt=()=>{
    setExpand(true)
  }

  return (
    <div className="container container-fluid">
      <form>
        {expand?
      <input name="title" type="text" onChange={InputEvent} value={note.title} placeholder="Title"  autoComplete="off" /> : null}

      <textarea name="content" id="" value={note.content} onChange={InputEvent} placeholder="Write a note.." onClick={expandIt} ></textarea>
      {expand?

      <AddIcon className="button-plus" onClick={addEvent} /> :null}
      </form>
    </div>
  );
};

export default CreateNote;
