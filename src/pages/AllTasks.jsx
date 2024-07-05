import React, { useState } from "react";
import TaskList from "@/components/TaskList";
import AddTask from "@/components/AddTask";

const AllTasks = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (title) => {
    setTasks([...tasks, { id: Date.now(), title, completed: false }]);
  };

  const editTask = (id, newTitle) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, title: newTitle } : task));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  return (
    <div className="p-4">
      <AddTask addTask={addTask} />
      <TaskList 
        tasks={tasks} 
        editTask={editTask} 
        deleteTask={deleteTask} 
        toggleTaskCompletion={toggleTaskCompletion} 
      />
    </div>
  );
};

export default AllTasks;