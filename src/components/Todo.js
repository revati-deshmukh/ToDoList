import React from "react";

function Todo(props) {
    return (
        <li className="todo stack-small">
            <div>
                <div className="c-cb">
                    <input
                        id={props.id}
                        type="checkbox"
                        onChange={() => props.toggleTaskCompleted(props.id)}
                        defaultChecked={props.completed} />
                    <label className="todo-label" htmlFor={props.id}>
                        {props.name}
                    </label>
                </div>
                <div className="btn-group">
                    <button type="button" className="btn">
                        Edit <span className="visually-hidden">{props.name}</span>
                    </button>
                    <button type="button" className="btn btn__danger" onClick={() => props.deleteTask(props.id)}>
                        Delete <span className="visually-hidden">{props.name}</span>
                    </button>
                </div>
            </div>
        </li>
    );
}

export default Todo;