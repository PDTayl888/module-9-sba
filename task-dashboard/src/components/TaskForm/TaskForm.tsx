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
                <textarea 
                    placeholder="priority level goes here..."
                    value={description}
                    onChange={() => setDescription()}
                    type="text" 
                />
            </div>




        </form>
    )
})