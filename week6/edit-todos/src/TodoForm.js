import {useState} from 'react';

function TodoForm({addTodo}) {

    const [userInput, setUserInput] = useState("");

    const validateForm = (e) => {
        e.preventDefault();
        if (userInput !== "") {
            addTodo(userInput);
        } 
    }

    const changeState = (e) => {
        setUserInput(e.target.value);
    }

    return (
        <form id="todoForm" onSubmit={validateForm}>
            <label>Add a Todo Here: </label>
            <input id="todoText" name="todoText" placeholder="todo item..." onChange ={changeState} required></input>
            <button>Add Me!</button>
        </form>
    );
}

export default TodoForm;