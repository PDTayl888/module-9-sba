import type { Task } from "../../types"

interface TaskFormProps {
    addTask: (task: Task) => void;
}

export const TaskForm = ({ addTask }: TaskFormProps => {
    return (
        <form action="">

            <h2>TASK FORM</h2>

            <div>
                <label htmlFor="title">TITLE</label>
                <input 
                    placeholder="title goes here..."
                    value={title}
                    onChange={() => setTitle()}
                    type="text" 
                />
            </div>

            <div>
                <label htmlFor="description">DESCRIPTION</label>
                <textarea 
                    placeholder="description goes here..."
                    value={description}
                    onChange={() => setDescription()}
                    type="text" 
                />
            </div>

            <div>
                <label htmlFor="priority">PRIORITY</label>
                <select 
                    name="priority" 
                    id="priority"
                    value{priority}
                    onChange={() => setPriority()}>
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
                    onChange={() => setDueDate()}
                    type="date" 
                />
            </div>






        </form>
    )
})