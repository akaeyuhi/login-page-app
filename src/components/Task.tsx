import React from 'react';
import { TaskDto } from '../features/slices/tasksSlice';

const Task = ({ text }: TaskDto) =>
  <li className="main__list-item">{text}</li>;

export default Task;
