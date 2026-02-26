//import type { Task, TaskStatus } from "../../types";
//import { TaskItem } from "../../TaskItem/TaskItem";

import type { TaskListProps } from "../../types";
import { TaskItem } from "./TaskItem";

export const TaskList = ({
  tasks,
  onStatusChange,
  onDelete,
}: TaskListProps) => {
  if (tasks.length === 0) {
    return (
      <h2
        style={{
          borderRadius: "12px",
          backgroundColor: "red",
        }}
      >
        NO SEEDS FOUND
      </h2>
    );
  }

  return (
    <>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onStatusChange={onStatusChange}
          onDelete={onDelete}
        ></TaskItem>
      ))}
    </>
  );
};
