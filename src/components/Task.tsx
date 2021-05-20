import { FunctionComponent } from "react";
import './Task.css';
import { TaskCheck } from "./TaskCheck";

type TaskProps = {
    isChecked: boolean;
    name: string;
}

export const Task: FunctionComponent<TaskProps> = (props: TaskProps) => {
    return (
        <div className="task">
            <span>{props.name}</span>
            <TaskCheck isChecked={props.isChecked} />
        </div>
    );
}
