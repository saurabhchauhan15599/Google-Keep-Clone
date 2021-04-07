import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import './App.css';

const Note = (props) => {

  const deleteNote=()=>{
    props.deleteItem(props.id);
  };
    
  return (
    <div className="container-1">
      <h2>{props.title}</h2>
      <p>{props.content}</p>
      <button onClick={deleteNote}>
      <DeleteIcon />
      </button>
    </div>
  );
};

export default Note;
