import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const AddTask = ({ addTask }) => {
  const [title, setTitle] = useState("");

  const handleAddTask = () => {
    if (title.trim()) {
      addTask(title);
      setTitle("");
    }
  };

  return (
    <div className="flex space-x-2 mb-4">
      <Input 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        placeholder="Add a new task" 
      />
      <Button onClick={handleAddTask}>Add Task</Button>
    </div>
  );
};

export default AddTask;