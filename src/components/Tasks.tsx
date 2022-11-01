import React, { useEffect } from 'react';
import Task  from './Task';
import { RootState, useAppDispatch } from '../store';
import { getTasks } from '../features/actions/taskActions';
import { useSelector } from 'react-redux';

export default function Tasks() {
  const dispatch = useAppDispatch();
  const { tasks } = useSelector((state: RootState) => state.tasks);
  const { token } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    dispatch(getTasks(token));
  }, []);

  return (
    <div className="main__tasks">
      <h2 className="main__todo">Things to do</h2>
      <ol className='main__task_list'>
        {tasks.map(task => <Task text={task.text} key={task.id} id={task.id}/>)}
      </ol>
    </div>
  );
}
