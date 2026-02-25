import { useState } from "react";
import type { Task } from "../../types";

  
  
export const Dashboard = ({ }) => {


  

  return (
    <>
      <TaskFilter
        onFilterChange={(newStatus) => setFilter({ ...filter, ...newStatus })}
      ></TaskFilter>
      <TaskList
        tasks={filteredTasks}
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