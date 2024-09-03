import React from 'react'
import { MdDelete } from "react-icons/md";
import { useState } from 'react';


export default function Todolist() {
    const [task, setTask] = useState('');
    const [tasks, setTasks]=useState([]);
    const [note, setNote] =useState('');

    const addTask = () => {
        // ... --> spread operator, creates new array
        if(task.trim()) {
            setTasks([...tasks, {task, note}]);
            setTask('');
            setNote('');
            
        }
    }
    const deleteTask =(index) => {
        setTasks(tasks.filter((_,i) => i !==index));
        
    }
  return (
    <>
    <div className='main'>
        <h1 className='main-header'>Todolist</h1>
        <div className='input-containers'>
            <label className='input-label'>Title</label>
            <input className='input-typespace' type='text' placeholder='enter task here' value={task} onChange={(e) => { setTask(e.target.value)}}></input>
            <br/>
            <label className='input-label'>Description</label>
            <input  className='input-typespace' type='text' placeholder='enter description here' value={note} onChange={(e) => { setNote(e.target.value)}}></input>
            <button className='add-btn' type='button' onClick={addTask}>Add</button>
        </div>
        <div className="list-div">
  <ol className="list-style">
    {tasks.map((t, index) => (
      <li key={index} className="list-item">
        <div className="task-container">
          <div className="task">{t.task}</div>
          <div className="note">{t.note}</div>
        </div>
        <button type="button" className="delete-btn" onClick={() => deleteTask(index)}>
          <MdDelete />
        </button>
      </li>
    ))}
  </ol>
</div>

    </div>
    
    </>
  );
}
