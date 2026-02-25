import { useState } from 'react';
import { TaskForm } from './../TaskForm/TaskForm';
import { filteredTasks } from '../../utils/taskUtils';
import { TaskList } from './../TaskList/TaskList';
import type { Task, TaskStatus, Priority } from '../../types';
import { TaskFilter } from '../TaskFilter/TaskFilter';


  
  
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

  
    console.log("RAW TASKS TASK: ", tasks);
//
    
  return (
    <>
    <h2>TASK DASHBOARD</h2>
    <TaskForm addTask={handleAddTask}></TaskForm>
    <input placeholder="enter search here..." 
            value={filter.search}
            onChange={(e) => setFilter({ ...filter, search: e.target.value})}/>
      <TaskFilter
      filter={filter}
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