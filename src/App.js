import Todo from "./components/Todo.js";
import Form from "./components/Form.js";
import FilterButton from "./components/FilterButton.js";

function App(props) {
    const taskList = props.tasks?.map(task => (
        <Todo name={task.name} completed={task.completed} id={task.id} key={task.id} />
    ));
    return (
        <div className="todoapp stack-large">
            <h1>ToDo List </h1>
            <Form />
            <div className="filters btn-group stack-exception">
                <FilterButton filterName="All" />
                <FilterButton filterName="To do" />
                <FilterButton filterName="Completed" />
            </div>
            <h2 id="list-heading">
                3 tasks remaining
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