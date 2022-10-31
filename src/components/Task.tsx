import React from 'react';

export interface TaskDto {
  text: string,
  id: number,
}

const Task = ({ text }: TaskDto) =>
  <li className="main__list-item">{text}</li>;

export default Task;
