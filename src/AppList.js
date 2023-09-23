import React,{useState} from 'react'
import AddTask from './AddTask'
import ToDoList from './ToDoList'
const AppList = () => {

 const [tasks,SetTasks]=useState([]);
 
 const addTask=(newTask)=>{
   console.log(newTask);
    SetTasks([...tasks,newTask]); 
    
 }

 const deleteTask=(taskId)=>{
    const updatedTask=tasks.filter((task)=>task.id!==taskId);
    SetTasks(updatedTask);
 }

 const editTask=(taskId,newTask)=>{
   console.log(newTask);
    const updatedTasks=tasks.map((task)=>
        task.id===taskId?{...task,text:newTask}:task
    )
    SetTasks(updatedTasks);
 }

  return (
    <div className='App'>
      <h1>ToDoList:</h1>
      <AddTask  addTask={addTask}/>
      <ToDoList tasks={tasks} editTask={editTask}  deleteTask={deleteTask}/>
    </div>
  )
}

export default AppList

