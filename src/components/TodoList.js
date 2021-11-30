import React, { useState } from "react";

import TaskInput from "../components/TaskInput";
import TaskListItem from "../components/TaskListItem";
import Divider from '@mui/material/Divider';

function TodoList() {
  const [tasks, setTasks] = useState([]);

  function onTaskAdded(t) {
    setTasks([...tasks, t]);
  }

  function onTaskDeleted(index) {
    tasks.splice(index, 1);
    setTasks([...tasks]);
  }

  function onTaskVerified(index) {
    tasks[index].verified = true;
    setTasks([...tasks]);
  }

  return(
    <div className="container">
      <div className="section">
        <TaskInput onInput={onTaskAdded}/>
      </div>
      
      <Divider />

      <div className="section">
        {
          tasks.map((t,i) => {
            return <TaskListItem key={i} taskId={i} label={t.label} verified={t.verified} 
              onDelete={onTaskDeleted} onVerified={onTaskVerified}/>   
          })
        }
      </div>
    </div>
  )

}

export default TodoList;