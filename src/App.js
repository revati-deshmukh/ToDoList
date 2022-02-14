import React, { useState } from "react";
import Todo from "./components/Todo.js";
import Form from "./components/Form.js";
import FilterButton from "./components/FilterButton.js";
import { nanoid } from "nanoid";
//import 'bootstrap/dist/css/bootstrap.min.css';

const FILTER_MAP = {
    All: () => true,
    Active: task => !task.completed,
    Completed: task => task.completed
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

function App(props) {

    const [tasks, setTasks] = useState(props.tasks);
    const [filter, setFilter] = useState('All');

    const taskList = tasks?.filter(FILTER_MAP[filter])
        .map(task => (
            <Todo
                name={task.name}
                completed={task.completed}
                id={task.id}
                key={task.id}
                toggleTaskCompleted={toggleTaskCompleted}
                deleteTask={deleteTask}
                editTask={editTask}
            />
        ));

    const filterList = FILTER_NAMES.map(name => (
        <FilterButton
            key={name}
            name={name}
            isPressed={name === filter}
            setFilter={setFilter}
        />
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

    function deleteTask(id) {
        const remainingTasks = tasks.filter(task => id !== task.id);
        setTasks(remainingTasks);
    }

    function editTask(id, name) {
        const editedTask = tasks.map(task => {
            if (id === task.id) {
                return { ...task, name: name }
            }
            return task;
        })
        setTasks(editedTask);
    }

    return (
        <div className="todoapp stack-large">
            <h1>ToDo List </h1>
            <Form addTask={addTask} />
            <div className="filters btn-group stack-exception">
                {filterList}
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
        </div>
    );
}

export default App