import { useState } from 'react';
import { TaskForm } from './../TaskForm/TaskForm';
import { TaskFilter } from './../TaskForm/TaskFilter';
import { filteredTasks, FilteredTasks } from '../../utils/taskUtils';
import { TaskList } from './../TaskList/TaskList';
import type { Task, TaskStatus, Priority } from '../../types';



  
  
export const Dashboard = () => {

    const [tasks, setTasks] = useState<Task[]>(() => {
        const saved = localStorage.getItem("tasks-array");
        return saved ? JSON.parse(saved) : [];
    })

    const [filter, setFilter] = useState({ status: "all", priority: "all", search: "" });
    const displayTasks = filteredTasks(tasks, filter)

    const handleAddTask = () => {

    }

  

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
        onStatusChange={(taskId, newStatus) =>
          setTasks(
            tasks.map((task) =>
              task.id === taskId ? { ...task, status: newStatus } : task,
            ),
          )
        }
        onDelete={(id) => {
          console.log("delete taskliist button");
          setTasks(tasks.filter((t) => t.id !== id));
        }}
      ></TaskList>
    </>
  );
}