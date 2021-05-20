import { FunctionComponent } from "react";
import {Task} from './Task';
import './TaskList.css';

export const TaskList: FunctionComponent = () => {
    return (
        <div className="task-list">
            <Task />
            <Task />
            <Task />
            <Task />
            <Task />
            <Task />
            <Task />
            <Task />
            <Task />
            <Task />
            <Task />
            <Task />
            <Task />
        </div>
    );
}
