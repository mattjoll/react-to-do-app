import { FunctionComponent } from "react";
import {Task} from './Task';
import './TaskList.css';

export const TaskList: FunctionComponent = () => {
    return (
        <div className="task-list">
            <Task name="Do the thing" isChecked={true} />
            <Task name="Dont do the thing" isChecked={false} />
            <Task name="Do the thing" isChecked={true} />
            <Task name="Dont do the thing" isChecked={false} />
            <Task name="Do the thing" isChecked={true} />
            <Task name="Dont do the thing" isChecked={false} />
            <Task name="Do the thing" isChecked={true} />
            <Task name="Dont do the thing" isChecked={false} />
            <Task name="Do the thing" isChecked={true} />
            <Task name="Dont do the thing" isChecked={false} />
            <Task name="Do the thing" isChecked={true} />
            <Task name="Dont do the thing" isChecked={false} />
            <Task name="Do the thing" isChecked={true} />
            <Task name="Dont do the thing" isChecked={false} />
        </div>
    );
}
