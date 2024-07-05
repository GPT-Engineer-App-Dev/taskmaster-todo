import React from "react";
import TaskItem from "@/components/TaskItem";

const TaskList = ({ tasks, editTask, deleteTask, toggleTaskCompletion }) => {
  return (
    <div className="space-y-2">
      {tasks.map(task => (
        <TaskItem 
          key={task.id} 
          task={task} 
          editTask={editTask} 
          deleteTask={deleteTask} 
          toggleTaskCompletion={toggleTaskCompletion} 
        />
      ))}
    </div>
  );
};

export default TaskList;