import React, { useState } from 'react';
import Task  from './Task';
import { TaskDto } from '../features/slices/tasksSlice';

export default function Tasks() {
  const taskExample: TaskDto = {
    text: 'Lorem',
    id: 1,
  };
  const [tasks] = useState(
    [taskExample],
  );


  return (
    <div className="main__tasks">
      <h2 className="main__todo">Things to do</h2>
      <ol className='main__task_list'>
        {tasks.map(task => <Task text={task.text} key={task.id} id={task.id}/>)}
      </ol>
    </div>
  );
}
