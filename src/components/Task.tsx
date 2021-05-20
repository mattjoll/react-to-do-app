import { FunctionComponent } from "react";
import './Task.css';
import { TaskCheck } from "./TaskCheck";

export const Task: FunctionComponent = () => {
    return (
        <div className="task">
            <span>Task Name</span>
            <TaskCheck isChecked={false} />
        </div>
    );
}
