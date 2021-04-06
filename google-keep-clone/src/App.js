import react, { useState } from 'react';
import Header from './Header';
import CreateNote from './CreateNote';
import Note from './Note';
import './App.css';

const App =()=>{
  const [addItem,setAddItem]=useState([]);

  const addNote =(note)=>{
    setAddItem((prevData)=>{
      return [...prevData, note];
    }); 

    console.log(note);
  }

  // deleting notes from checking id's

  const onDelete=(id)=>{
    setAddItem((olddata)=>{
      return olddata.filter((currdata,index)=>{
        return (index!==id);
      });
    });
  };

  return(
  <>
    <Header />
    <CreateNote passNote={addNote} />
    {addItem.map((val,index)=>{
      return ( <Note key={index} id={index} title={val.title}
      content={val.content} deleteItem={onDelete} />
      );
      })}
    </>
);
};
export default App;