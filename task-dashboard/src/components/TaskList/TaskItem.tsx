import type { TaskStatus } from "../../types";
import type { TaskItemProps } from "../../types";

export const TaskItem = ({ task, onStatusChange, onDelete }: TaskItemProps) => {
  return (
    <div
      style={{
        border: "1px solid #fffffff",
        borderRadius: "12px",
        backgroundColor: "blue",
      }}
    >
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Priority: {task.priority}</p>
      <p>Due: {task.dueDate}</p>

      <select
        name="status"
        id={task.id}
        value={task.status}
        onChange={(e) => onStatusChange(task.id, e.target.value as TaskStatus)}
      >
        <option value="pending">Pending</option>
        <option value="in-progress">In Progress</option>
        <option value="completed">completed</option>
      </select>

      <button
        style={{
          borderRadius: "8px",
          marginLeft: "130px",
          backgroundColor: "red",
        }}
        onClick={() => {
          console.log("X");
          onDelete(task.id);
        }}
      >
        X
      </button>
    </div>
  );
};
