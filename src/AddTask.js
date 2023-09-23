import React,{useState} from 'react'

const AddTask = ({addTask}) => {
  const [text,SetText]=useState('');
  const handleAdd=function(){
        const task={id :Date.now(),text};
        addTask(task);
        SetText('');
  }

  return (
    <>
        <div>
        <input   value={text} onChange={(e)=>SetText(e.target.value)}></input>
        <button  onClick={handleAdd} >ADD</button>
        </div> 
        
    </>
  )
}

export default AddTask
