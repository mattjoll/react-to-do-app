import { FunctionComponent } from "react";
import './TaskCheck.css';

type TaskCheckProps = {
    isChecked: boolean;
}

export const TaskCheck: FunctionComponent<TaskCheckProps> = (props: TaskCheckProps) => {
    const classes = `task-check ${props.isChecked ? 'checked' : ''}`;

    return (
        <button className={classes}></button>
    );
}
