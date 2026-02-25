import { useState } from 'react';
import { TaskForm } from './../TaskForm/TaskForm';
import { filteredTasks } from '../../utils/taskUtils';
import { TaskList } from './../TaskList/TaskList';
import type { Task, TaskStatus, Priority } from '../../types';
import { TaskFilter } from '../TaskFilter/TaskFilter';

//           const [tasks, setTasks] = useState<Task[]>([
//     {
//       id: "67",
//       title: "Do that thing",
//       description: "that thing that ya gotta do",
//       status: "pending",
//       priority: "low",
//       dueDate: "8-8-2008",
//     },
//     {
//       id: "7",
//       title: " that other thing",
//       description: "much different than the other one",
//       status: "pending",
//       priority: "medium",
//       dueDate: "9-23-78",
//     },
//     {
//       id: "11",
//       title: "Be born",
//       description: "hello world, literally",
//       status: "completed",
//       priority: "low",
//       dueDate: "2-21-1980",
//     },
//     {
//       id: "420",
//       title: "Mow the laundry",
//       description: "make sure to separate darks",
//       status: "pending",
//       priority: "high",
//       dueDate: "11-12-2013",
//     },
//     {
//       id: "007",
//       title: "fold the lawn",
//       description: "set mower to stun",
//       status: "completed",
//       priority: "low",
//       dueDate: "9-11-2001",
//     },
//   ]);


  
  
export const Dashboard = () => {

    const [tasks, setTasks] = useState<Task[]>(() => {
        const saved = localStorage.getItem("tasks-array");
        return saved ? JSON.parse(saved) : [];
    })

    const [filter, setFilter] = useState({ status: "all", priority: "all", search: "" });
    const displayTasks = filteredTasks(tasks, filter)

    const handleAddTask = (newTask: Task) => {
        const updatedTasks = [ ...tasks, newTask];
        setTasks(updatedTasks);
        localStorage.setItem("tasks-array", JSON.stringify(updatedTasks));
    };

  

  return (
    <>
    <h2>TASK DASHBOARD</h2>
    <TaskForm addTask={handleAddTask}></TaskForm>
    <input placeholder="enter search here..." 
            value={filter.search}
            onChange={(e) => setFilter({ ...filter, search: e.target.value})}/>
      <TaskFilter
        onFilterChange={(newFilters: { status?: TaskStatus; priority?: Priority; search?: string}) => setFilter({ ...filter, ...newFilters })}
      ></TaskFilter>
      <TaskList
        tasks={displayTasks}
        onStatusChange={(taskId: string, newStatus: TaskStatus) => {
            const updatedTasks = tasks.map((task) =>
              task.id === taskId ? { ...task, status: newStatus } : task,
            );
          setTasks(updatedTasks);
          localStorage.setItem("tasks-array", JSON.stringify(updatedTasks))
        }}
        onDelete={(id) => {
          console.log("delete task button");
          setTasks(tasks.filter((t) => t.id !== id));
        }}
      ></TaskList>
    </>
  );
}