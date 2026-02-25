import { useState } from "react";
import type { Task, TaskStatus, TaskFormProps, Priority } from "../../types";

export const TaskForm = ({ addTask }: TaskFormProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("medium");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!title.trim()) return;

    const newTask: Task = {
      id: Date.now().toString(),
      title: title,
      description: description,
      status: "pending" as TaskStatus,
      priority: priority as Priority,
      dueDate: dueDate,
    };

    addTask(newTask);

    setTitle("");
    setDescription("");
    setPriority("medium");
    setDueDate("");
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <p>To-Do</p>

      <div>
        <label htmlFor="title">what </label>
        <input
          placeholder="title goes here..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
        />
      </div>

      <div>
        <label htmlFor="description">how </label>
        <textarea
          placeholder="description goes here..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="priority">why </label>
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="low">optional</option>
          <option value="medium">helpful</option>
          <option value="high">crucial</option>
        </select>
      </div>

      <div>
        <label htmlFor="due-date">when </label>
        <input
          placeholder="choose due date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          type="date"
        />
      </div>

      <button type="submit">go</button>
    </form>
  );
};
