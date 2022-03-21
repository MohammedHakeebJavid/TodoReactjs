
import React,{useState} from 'react'
import TodoForm  from './TodoForm'

function Todo() {
    const [edit,setedit]=useState({

    id:null,
    value:''
})
  return todos.map((todo,index)=>(
  
    
  <div className={todo.iscomplete ?'todo-row complete':
  'todo-row'}key={index}>
  </div>
  ))
}

export default Todo