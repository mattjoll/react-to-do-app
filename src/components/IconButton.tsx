import { FunctionComponent } from "react";
import './IconButton.css';

export const IconButton: FunctionComponent = () => {
    return (
        <button className="icon-button">
            <span className="material-icons add">add</span>
        </button>
    );
}
