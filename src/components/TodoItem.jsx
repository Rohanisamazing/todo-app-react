import { useState } from "react";

export default function ToDoItem({ task, toggleTask, deleteTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleEdit = () => {
    if (isEditing) editTask(task.id, newText);
    setIsEditing(!isEditing);
  };

  return (
    <li className="flex justify-between items-center bg-white p-2 rounded-md shadow-md my-2">
      {isEditing ? (
        <input
          type="text"
          className="border rounded-md p-1"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
      ) : (
        <span
          className={
            "cursor-pointer " +
            (task.completed ? "line-through text-gray-500" : "")
          }
          onClick={() => toggleTask(task.id)}
        >
          {task.text}
        </span>
      )}

      <div>
        <button className="mx-1 text-blue-500" onClick={handleEdit}>
          {isEditing ? "Save" : "Edit"}
        </button>
        <button
          className="mx-1 text-red-500"
          onClick={() => deleteTask(task.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
}
