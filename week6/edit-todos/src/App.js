import './App.css';
import ToDoList from './ToDoList.js';
//import {listOfJokes} from './JOKES.js';
import {useState, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoForm from './TodoForm.js';
import axios from 'axios';


function App() {
  const [todos, setTodos] = useState([])

  function allTodos(){
    axios.get("http://localhost:9000/allTodos")
    .then(res => setTodos(res.data))
    .catch(err => console.log(err))
  }

  useEffect(() => {
    allTodos();
  }, []);


  const completeTodo = (id, boolean) => {
    axios.get(`http://localhost:9000/completeTodo/${id}/${boolean}`)
    .then(res => {
      const tempTodos = [...todos];
      const updatedTodos = [tempTodos, res.data]
      setTodos(updatedTodos);
    })
    .catch(err => console.log(err))
  }

  const deleteTodo = (id) => {
    const tempTodos = [...todos];
    const filteredTodos = tempTodos.filter(todo => todo.id !== id);
    setTodos(filteredTodos);
  }

  const addTodo = async(text) => {
    const res = await axios.get(`http://localhost:9000/addTodo/${text}`)

    const newTodo = await res.data;
    const addedTodos = [...todos, newTodo];
    setTodos(addedTodos);
  }

  const editTodo = (obj, updates) => {
    const tempTodos = [...todos];
    const todoItem = tempTodos.find(todo => todo.id === obj.id);
    todoItem.text = updates;
    setTodos(tempTodos);
  }
  

  return (
      <>
        <h1>List of Todos</h1>
        <TodoForm addTodo ={addTodo}/>
        <ToDoList todos ={todos} completeTodo ={completeTodo} deleteTodo ={deleteTodo} editTodo ={editTodo}/>
      </>
  );
}

export default App;
