import Todo from './Todo.js';

function ToDoList({todos, completeTodo, deleteTodo, editTodo}) {

    const todoList = todos.map((todo) => {return <Todo todo ={todo} key ={todo.id} completeTodo ={completeTodo} deleteTodo ={deleteTodo} editTodo ={editTodo}/>});
    return (
        <ul>
            <div className="divItems">
                {todoList}
            </div>
        </ul>
    );
}

export default ToDoList;