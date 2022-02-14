import React, { useState } from "react";
import Todo from "./components/Todo.js";
import Form from "./components/Form.js";
import FilterButton from "./components/FilterButton.js";
import { nanoid } from "nanoid";

function App(props) {

    const [tasks, setTasks] = useState(props.tasks);

    const taskList = tasks?.map(task => (
        <Todo
            name={task.name}
            completed={task.completed}
            id={task.id}
            key={task.id}
            toggleTaskCompleted={toggleTaskCompleted} />
    ));

    const taskNoun = taskList.length !== 1 ? 'tasks' : 'task';
    const headingText = `${taskList.length} ${taskNoun} remaining`;

    function addTask(name) {
        const newTask = { id: "id" + nanoid(), name: name, completed: false }
        setTasks([...tasks, newTask]);
    }

    function toggleTaskCompleted(id) {
        const updateTask = tasks.map(task => {
            if (id === task.id) {
                return { ...task, completed: !task.completed };
            }
            return task;
        })
        setTasks(updateTask);
    }

    return (
        <div className="todoapp stack-large">
            <h1>ToDo List </h1>
            <Form addTask={addTask} />
            <div className="filters btn-group stack-exception">
                <FilterButton filterName="All" />
                <FilterButton filterName="To do" />
                <FilterButton filterName="Completed" />
            </div>
            <h2 id="list-heading">
                {headingText}
            </h2>
            <ul
                role="list"
                className="todo-list stack-large stack-exception"
                aria-labelledby="list-heading"
            >
                {taskList}
            </ul>
            <button onClick={() => alert("hi")}>Hi</button>
        </div>
    );
}

export default App