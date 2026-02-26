import { useState } from "react";
import { TaskForm } from "./../TaskForm/TaskForm";
import { filteredTasks } from "../../utils/taskUtils";
import { TaskList } from "./../TaskList/TaskList";
import type { Task, TaskStatus, Priority } from "../../types";
import { TaskFilter } from "../TaskFilter/TaskFilter";

export const Dashboard = () => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const saved = localStorage.getItem("tasks-array");
    return saved ? JSON.parse(saved) : [];
  });

  const [filter, setFilter] = useState({
    status: "all",
    priority: "all",
    search: "",
  });
  const displayTasks = filteredTasks(tasks, filter);

  const handleAddTask = (newTask: Task) => {
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem("tasks-array", JSON.stringify(updatedTasks));
  };

  console.log("RAW TASKS TASK: ", tasks);
  //

  return (
    <div style={{
      backgroundColor: 'rgb(26, 163, 134)',
      borderRadius: '10px'
    }}>
      <h2 style={{
         fontWeight: 800,
         fontSize: "2rem"
      }}>Cultivate</h2>
      <h4>grow your life, one seed at a time
      </h4>
      <TaskForm addTask={handleAddTask}></TaskForm>
      <TaskFilter
        filter={filter}
        onFilterChange={(newFilters: {
          status?: TaskStatus;
          priority?: Priority;
          search?: string;
        }) => setFilter({ ...filter, ...newFilters })}
      ></TaskFilter>
      <TaskList
        tasks={displayTasks}
        onStatusChange={(taskId: string, newStatus: TaskStatus) => {
          const updatedTasks = tasks.map((task) =>
            task.id === taskId ? { ...task, status: newStatus } : task,
          );
          setTasks(updatedTasks);
          localStorage.setItem("tasks-array", JSON.stringify(updatedTasks));
        }}
        onDelete={(id) => {
          console.log("delete task button");
          const updatedTasks = tasks.filter((t) => t.id !== id);
          setTasks(updatedTasks);
          localStorage.setItem("tasks-array", JSON.stringify(updatedTasks));
        }}
      ></TaskList>
    </div>
  );
};
