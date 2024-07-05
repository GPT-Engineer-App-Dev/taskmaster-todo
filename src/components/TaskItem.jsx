import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Pencil, Trash } from "lucide-react";

const TaskItem = ({ task, editTask, deleteTask, toggleTaskCompletion }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    editTask(task.id, newTitle);
    setIsEditing(false);
  };

  return (
    <div className="flex items-center space-x-2">
      <Checkbox checked={task.completed} onCheckedChange={() => toggleTaskCompletion(task.id)} />
      {isEditing ? (
        <Input value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
      ) : (
        <span className={`flex-1 ${task.completed ? "line-through" : ""}`}>{task.title}</span>
      )}
      {isEditing ? (
        <Button onClick={handleSave}>Save</Button>
      ) : (
        <Button variant="outline" onClick={handleEdit}>
          <Pencil className="h-4 w-4" />
        </Button>
      )}
      <Button variant="outline" onClick={() => deleteTask(task.id)}>
        <Trash className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default TaskItem;