import React, { useState } from 'react'

function ToDoList({tasks,editTask,deleteTask}) {

  const [editId,SetEditId]=useState('');
  const [newtext,SetNewtext]=useState('')
  const handleEdit=function(task){
    SetEditId(task.id);
    SetNewtext(task.text);
  }
  const handleClick=()=>{
         editTask(editId,newtext);
         SetEditId('');
         SetNewtext('');

  }
  const handleChange=(e)=>{
      SetNewtext(e.target.value)
  }
  
  return (
    <div>
    {tasks.map((task,i)=>{

      return (
      <div key={i}>  
       {editId===task.id?<><input value={newtext} onChange={handleChange} ></input>
         <button onClick={handleClick}>Save</button> 
         </>
         : 
         <> <span >{task.text}</span>
        <button onClick={()=>handleEdit(task)}>edit </button> 
        <button onClick={()=>deleteTask(task.id)}>delete</button>
       </>
      }
      
      </div>
      )

    } 
    )}
    </div>
  )
}

export default ToDoList
