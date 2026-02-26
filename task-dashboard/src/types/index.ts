export type TaskStatus = "seedling" | "bloom" | "harvested";
export type Priority = "optional" | "helpful" | "crucial";

//export type Priority =
export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: Priority;
  dueDate: string;
}

export interface TaskListProps {
  tasks: Task[];
  onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
  onDelete: (taskId: string) => void;
}

export interface TaskItemProps {
  task: Task;
  onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
  onDelete: (taskId: string) => void;
}

export interface TaskFilterProps {
  filter: {
    status: string;
    priority: string;
    search: string;
  };
  onFilterChange: (filters: {
    status?: TaskStatus;
    priority?: Priority;
    search?: string;
  }) => void;
}

export interface TaskFormProps {
  addTask: (task: Task) => void;
}
