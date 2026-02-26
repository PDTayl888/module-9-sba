import type { TaskStatus } from "../../types";
import type { TaskItemProps } from "../../types";

export const TaskItem = ({ task, onStatusChange, onDelete }: TaskItemProps) => {
  return (
    <div
      style={{
        border: ".6px dotted white",
        borderRadius: "5px",
        padding: "6px",
        backgroundColor: "rgba(58, 153, 129, 0.87)",
        color: "white",
      }}
    >
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>why {task.priority}</p>
      <p>when {task.dueDate}</p>

      <select
        name="status"
        id={task.id}
        value={task.status}
        onChange={(e) => onStatusChange(task.id, e.target.value as TaskStatus)}
      >
        <option value="seedling">seedling</option>
        <option value="bloom">bloom</option>
        <option value="harvested">harvested</option>
      </select>

      <button
        style={{
          height: "38px",
          borderRadius: "50%",
          marginLeft: "130px",
          fontWeight: "bold",
          boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
          backgroundColor: "#ff4d4d",
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
