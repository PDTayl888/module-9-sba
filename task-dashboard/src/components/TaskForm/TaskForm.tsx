import { useState } from "react";
import type { Task, TaskStatus, TaskFormProps, Priority } from "../../types";

export const TaskForm = ({ addTask }: TaskFormProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("helpful");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!title.trim()) return;

    const newTask: Task = {
      id: Date.now().toString(),
      title: title,
      description: description,
      status: "bloom" as TaskStatus,
      priority: priority as Priority,
      dueDate: dueDate,
    };

    addTask(newTask);

    setTitle("");
    setDescription("");
    setPriority("optional");
    setDueDate("");
  };

  return (
    <form
      action=""
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        borderRadius: "12px",
        padding: "20px",
        backgroundColor: "rgba(58, 153, 129, 0.87)",
        color: "white",
      }}
    >
      <p>plant a seed</p>

      <div>
        <label htmlFor="title">what </label>
        <input
          placeholder="you need to do..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
        />
      </div>

      <div>
        <label htmlFor="description">how </label>
        <textarea
          style={{ paddingTop: "30px" }}
          placeholder="you will do it..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="priority">why </label>
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="optional">optional</option>
          <option value="helpful">helpful</option>
          <option value="crucial">crucial</option>
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

      <button
        type="submit"
        style={{
          marginTop: "10px",
          padding: "12px 24px",
          backgroundColor: "#ffffff",
          color: "rgb(26, 163, 134)",
          border: "none",
          borderRadius: "50px",
          fontWeight: "800",
          fontSize: "1rem",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          alignSelf: "center",
        }}
      >
        GO
      </button>
    </form>
  );
};
