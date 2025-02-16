import ToDoItem from "./TodoItem";

export default function ToDoList({ tasks, toggleTask, deleteTask, editTask }) {
  return (
    <ul className="w-96">
      {tasks.map((task) => (
        <ToDoItem key={task.id} task={task} toggleTask={toggleTask} deleteTask={deleteTask} editTask={editTask} />
      ))}
    </ul>
  );
}
