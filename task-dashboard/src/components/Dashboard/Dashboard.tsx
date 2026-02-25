import { TaskForm } from './../TaskForm/TaskForm';

  
  
export const Dashboard = () => {

    const handleAddTask = () => {

    }

  

  return (
    <>
    <TaskForm addTask={handleAddTask}></TaskForm>
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