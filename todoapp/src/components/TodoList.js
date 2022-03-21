import React,{useState} from 'react'
import TodoForm from './TodoForm';
import ReactDOM from 'react-dom'

function TodoList() {
    const [todos,setTodos]=useState([]);
    const addTodo=todo=> {
        if(!todo.text || /^\s*$/.test(todo.text)){
            return
        }

        const newTodos=[todo,...todos]
        setTodos(newTodos)
        console.log(...todos);
    }
  return (
     <>
    <h1>whats the plan for toady?</h1>
    <TodoForm onSubmit={addTodo}/>
    </>
  )
}

export default TodoList;