import { useState } from "react";
import type { Task, TaskStatus, TaskFormProps } from "../../types"

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
            status: 'pending' as TaskStatus,
            priority: 'medium',
            dueDate: '',
        }

        addTask(newTask)

        setTitle("");
        setDescription("");
        setPriority("medium");
        setDueDate("");
        
    }


    return (
        <form 
            action=""
            onSubmit={handleSubmit}>

            <p>TASK FORM</p>

            <div>
                <label htmlFor="title">TITLE</label>
                <input 
                    placeholder="title goes here..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    type="text" 
                />
            </div>

            <div>
                <label htmlFor="description">DESCRIPTION</label>
                <textarea 
                    placeholder="description goes here..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)} 
                />
            </div>

            <div>
                <label htmlFor="priority">PRIORITY</label>
                <select 
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}>
                        <option value="low">LOW</option>
                        <option value="medium">MEDIUM</option>
                        <option value="high">HIGH</option>
                    </select>
            </div>

            <div>
                <label htmlFor="due date">DUE DATE</label>
                <input 
                    placeholder="choose due date"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    type="date" 
                />
            </div>

            <button type="submit">ADD TASK</button>

        </form>
    );
    

}